var perksList = [];
var racesList = [];
var gameMechanicsList = [];
var presetList = [];
var curPerkList;
var curRaceList;
var curGameMechanics;
var activeSkill = 0;

var characterData = {
  race: 0, //This is an index into the race data array
  hmsIncreases: [],
  skillLevels: [],
  perksTaken: [],
  oghmaChoice: 0, //0 for nothing, 1 for health, 2 for magicka, 3 for stam
  perkListID: 0,
  raceListID: 0,
  gameMechanicsListID: 0,
  level: 1,
  attrIncreases: 0,
  earnedPerks : 3,
  spentPerks: 0 //The number of perks actually taken
};

$(document).ready(function(){

  curPerkList = perksList[0];
  curRaceList = racesList[0];
  curGameMechanics = gameMechanicsList[0];

  initCharacterData();
  updateSelectOptions();
  updateSkillNames();
  updateSkillLevelsDisplay();
  drawMiniSkillTrees();
  updateActiveSkillPanel();
  updateRaceSelect();
  
  updateCircleAndLineColors();
  
  attachHandlers();
});

//Reset character data completely to a staring 
function initCharacterData(){
  characterData.race = 0;
  characterData.hmsIncreases = [0,0,0];
  characterData.skillLevels = [];
  for(let i = 0; i < 18; i++){
    characterData.skillLevels.push(curRaceList.races[0].startingSkills[i]);
  }
  characterData.perksTaken = [];
  for(let i = 0; i < curPerkList.perks.length; i++){
    characterData.perksTaken.push(false);
  }
  characterData.oghmaChoice = 0;
  characterData.perkListID = 0;
  characterData.raceListID = 0;
  characterData.gameMechanicsListID = 0;
  characterData.level = 1;
  characterData.attrIncreases = 0;
  characterData.earnedPerks = curGameMechanics.initialPerks;
  characterData.spentPerks = 0;
}

function attachHandlers(){
  $(".miniSkillTreeDiv").click(leftSideSkillClick);
  $(".miniSkillCircle").click(miniSkillCircleClick);
  $(window).resize(resizeWindowHandler);
  $("#activeSkillLevelInput").on("keyup input",skillInputChange);
  $("#presetSelect").on("change",presetSelectChange);
  $("#perksSelect").on("change",perkSelectChange);
}

function presetSelectChange() {
  let presetIndex = getIndexWithID(Number($(this).val()),presetList);
  let preset = presetList[presetIndex];
  $("#perksSelect").val(preset.perks);
}

function perkSelectChange(){
  alert("perks changed");
}

function skillInputChange(){
  let value = Number($(this).val());
  let minVal = $(this).attr("min");
  if(value < minVal) value = minVal;
  if(value > 100) value = 100;
  $(this).val(value);
  characterData.skillLevels[activeSkill] = value;
  
  /*
  let removedOne = removeInvalidPerks(activeSkill);
  if(removedOne){
    drawActiveSkillTree();
  }
  */
  
  updateCircleAndLineColors();
  
  updateCharacterLevelAndEarnedPerks();
  updateSkillLevelsDisplay();
}

//Remove perks that the character should no longer have
//because the skill level is now too low.
//Returns true if a perk was removed and we need to redraw
//the active skill display
function removeInvalidPerks(skillNum){
  let answer = false;
  let skillLev = characterData.skillLevels[skillNum];
  
  for(let i = 0; i < curPerkList.perks.length; i++){
    if(curPerkList.perks[i].skill != skillNum || !characterHasPerk(i)){
          continue;
    }
    if(skillLev < curPerkList.perks[i].skillReq){
      removePerkAndDependents(i);
      answer = true;
    }
  }
  
  return answer;
}

function attachActiveSkillHandlers(){
  $(".activeSkillCircle").hover(activeSkillPerkHoverEnter,activeSkillPerkHoverLeave);
  $(".activeSkillCircle").mousedown(activeSkillPerkClick);
}

function activeSkillPerkClick(event){
  let perkNum = Number($(this).attr("data-perknum"));
  
  if(event.button == 0){//LMB
    let hasPerk = characterHasPerk(perkNum);
    let isInChain = curPerkList.perks[perkNum].placeInChain != -1;
    let isFirstInChain = curPerkList.perks[perkNum].prevPerk == -1;
    
    //The perk we clicked on is the one we want to take
    if(!isInChain || !hasPerk){
      tryTakePerk(perkNum);
    }
    //Otherwise we clicked part of a chain and actually want to take the next one.
    else{
      tryTakePerk(curPerkList.perks[perkNum].nextPerk);
    }
  }
  else if (event.button == 2){//RMB
    tryRemovePerk(perkNum);
  }
}

//Attempt to take the given perk. Can fail if the pre-reqs for
//the perk are not met. Updates the displays if the perk is taken.
function tryTakePerk(perkNum){

  if(!canTakePerk(perkNum)) return;
  
  actuallyTakePerk(perkNum);
  updateActiveSkillPanel();
  updateCircleAndLineColors();
}

//Check if the given perk can actually be taken
function canTakePerk(perkNum){
  if(perkNum < 0) return false;
  if(calcFreePerks() < 1) return false;
  if(characterHasPerk(perkNum)) return false;
  
  if(curPerkList.perks[perkNum].skillReq > characterData.skillLevels[activeSkill])
    return false;
  
  for(let i = 0; i < curPerkList.perks[perkNum].preReqs.length; i++){
    if(!characterHasPerk(curPerkList.perks[perkNum].preReqs[i])) return false;
  }
  
  return true;
}

//Take the perk. Assumes that all the prerequisites are satisfied.
function actuallyTakePerk(perkNum){
  characterData.spentPerks++;
  characterData.perksTaken[perkNum] = true;
}

//Remove the perk. Assumes that the perk has actually been taken.
function actuallyRemovePerk(perkNum){
  characterData.perksTaken[perkNum] = false;
  characterData.spentPerks--;
}

//Recursively remove the given perk and all of the perks that require
//it to be taken. Assumes the given perk can actually be removed.
function removePerkAndDependents(perkNum){
  for(let i = 0; i < curPerkList.perks.length; i++){
    if(characterHasPerk(i) && curPerkList.perks[i].preReqs.indexOf(perkNum) != -1){
      removePerkAndDependents(i);
    }
  }
  actuallyRemovePerk(perkNum);
}

function tryRemovePerk(perkNum){
  let perkToRemove = perkNum;
  let hasPerk = characterHasPerk(perkNum);
  let isInChain = curPerkList.perks[perkNum].placeInChain != -1;
  let isFirstInChain = curPerkList.perks[perkNum].prevPerk == -1;
 
  //Basic sanity check
  if(!characterHasPerk(perkToRemove)) return;
  
  removePerkAndDependents(perkToRemove);
  updateActiveSkillPanel();
  updateCircleAndLineColors();
}

function activeSkillPerkHoverEnter(event){

  let clientRect = this.getBoundingClientRect();

  let perkNum = Number($(this).attr("data-perknum"));
  let hasPerk = characterHasPerk(perkNum);
  let isInChain = curPerkList.perks[perkNum].placeInChain != -1;
  let isLastInChain = curPerkList.perks[perkNum].nextPerk == -1; 
  
  let skillReq = curPerkList.perks[perkNum].skillReq;
  let descString = curPerkList.perks[perkNum].description;
  if(skillReq > 0){
    descString += ` (Skill Req: ${skillReq})`
  }
  $("#highlightedPerkDesc").html(descString);
  
  if(hasPerk && isInChain && !isLastInChain){
    let nextPerkNum = curPerkList.perks[perkNum].nextPerk;
    let nextPerkReq = curPerkList.perks[nextPerkNum].skillReq;
    let nextPerkDescString = curPerkList.perks[nextPerkNum].description;
    let nextDescString = `<b>Next rank:</b> ${nextPerkDescString} (Skill Req: ${nextPerkReq})`;
    
    $("#highlightedNextPerkDesc").html(nextDescString);
  }
  else {
    $("#highlightedNextPerkDesc").empty();
  }
  
  $("#highlightedPerkDiv").css({left : `${clientRect.left-300}px`, top : `${clientRect.top+40}px`, display: "block"});
  //$("#highlightedPerkDiv").show();  
}

function activeSkillPerkHoverLeave(){
  $("#highlightedPerkName").empty();
  $("#highlightedPerkDesc").empty();
  $("#highlightedNextPerkDesc").empty();
  $("#highlightedPerkDiv").hide();
}

function resizeWindowHandler(){
  drawActiveSkillTree();
  drawMiniSkillTrees();
  updateCircleAndLineColors();
}

function miniSkillCircleClick(){
  //alert($(this).attr("data-perknum"));
}

function leftSideSkillClick(){
  activeSkill = Number($(this).attr("data-skillnum"));
  $(".miniSkillTreeDivSelected").removeClass("miniSkillTreeDivSelected");
  $(this).addClass("miniSkillTreeDivSelected");
  updateActiveSkillPanel();
}

function updateLevelAndFreePerksDisplay(){
  let theDiv = $("#freePerkCountDiv");
  let freePerks = calcFreePerks();
  theDiv.html(`Level ${characterData.level}, Free Perks: ${freePerks}`);
  if(freePerks < 0){
    theDiv.removeClass("whiteText");
    theDiv.addClass("redText");
  }
  else{
    theDiv.removeClass("redText");
    theDiv.addClass("whiteText");
  }
}

function updateActiveSkillPanel(){
  $("#activeSkillDisplayName").html(curPerkList.skillNames[activeSkill]);
  updateLevelAndFreePerksDisplay();
  $("#activeSkillLevelInput").val(characterData.skillLevels[activeSkill]);
  drawActiveSkillTree();
  updateCircleAndLineColors();
}

function drawActiveSkillTree(){
  
  //clear the lines and circles in the active skill tree
  $("#activeSkillDisplaySVG > circle").remove();
  $("#activeSkillDisplaySVG > line").remove();
  $("#activeSkillDisplaySVG > text").remove();
  
  let perks = curPerkList.perks;
  let theSVG = $("#activeSkillDisplaySVG");
  let svgWidth = theSVG.width();
  let svgHeight = theSVG.height();
  //Draw the connecting lines. Do this first so that the circles will be
  //drawn on top of them.
  for(let i = 0; i < perks.length; i++)
  {
    if(perks[i].skill != activeSkill) continue;
    let curXPos = perks[i].xPos / 100 * svgWidth;
    let curYPos = perks[i].yPos / 100 * svgHeight;
    
    //Assuming that all pre-reqs are in the same skill tree
    for(let j = 0; j < perks[i].preReqs.length; j++)
    {
      let preXPos = perks[ perks[i].preReqs[j] ].xPos / 100 * svgWidth;
      let preYPos = perks[ perks[i].preReqs[j] ].yPos / 100 * svgHeight;
      
      if(preXPos != curXPos || preYPos != curYPos)
      {
        /*
        let theColor = "lightblue";
        
        if(characterHasPerk(i) && characterHasPerk(perks[i].preReqs[j])){
          theColor = "yellow";
        }
        
        theSVG.append(`<line id="mainLine${i}to${perks[i].preReqs[j]}" x1="${curXPos}" y1="${curYPos}" x2="${preXPos}" y2="${preYPos}" stroke="${theColor}" stroke-width="2" stroke-opacity="0.5" />`);*/
        
        theSVG.append(`<line id="mainLine${i}to${perks[i].preReqs[j]}" x1="${curXPos}" y1="${curYPos}" x2="${preXPos}" y2="${preYPos}" stroke-width="2" stroke-opacity="0.5" />`);
      }
    }
  }
  //Then draw the circles for the perks along with the labels
  for(let i = 0; i < perks.length; i++)
  {
    //This is only for the actively selected perk tree
    if(perks[i].skill != activeSkill) continue;
    
    let hasPerk = characterHasPerk(i);
    let isInChain = perks[i].placeInChain != -1;
    let isLastInChain = perks[i].nextPerk == -1;
    let isFirstInChain = perks[i].prevPerk == -1;
    let hasNextInChain = characterHasPerk(perks[i].nextPerk);
    let hasPrevInChain = characterHasPerk(perks[i].prevPerk);
    
    //If it's not part of a chain we always want to draw it.
    if(isInChain)
    {
      let wantToDraw = false;
      if(hasPerk && isLastInChain) wantToDraw = true;
      if(hasPerk && !hasNextInChain) wantToDraw = true;
      if(!hasPerk && isFirstInChain) wantToDraw = true;
      if(!wantToDraw) continue;
    }
    
    let curXPos = perks[i].xPos / 100 * svgWidth;
    let curYPos = perks[i].yPos / 100 * svgHeight;  
    /*
    let fillType = "perkNotSelectedGrad";

    if(hasPerk || hasPrevInChain){
      fillType = "perkSelectedGrad";
    }
    
    
    theSVG.append(`<circle class="activeSkillCircle" id="activeCircle${i}" cx="${curXPos}" cy="${curYPos}" r="10" data-perkNum="${i}" oncontextmenu="return false" fill="url(#${fillType})"/>`);
    */
    
    theSVG.append(`<circle class="activeSkillCircle" id="activeCircle${i}" cx="${curXPos}" cy="${curYPos}" r="10" data-perkNum="${i}" oncontextmenu="return false"/>`);
    
    let label = perks[i].name;
    if(isInChain){
      if(!hasPerk){
        label += " (0";
      }
      else{
        label += ` (${perks[i].placeInChain}`;
      }
      label += `/${perks[i].totalInChain})`;
    }
    
    theSVG.append(`<text font-size="16px" x="${curXPos}" y="${curYPos+25}" text-anchor="middle" fill="black" filter="url(#shadow)">${label}</text>`); 
    theSVG.append(`<text font-size="16px" x="${curXPos}" y="${curYPos+25}" text-anchor="middle" fill="white">${label}</text>`); 
  }
  //Silly hack to actually draw the new SVG
  $("#activeSkillDisplaySVG").html($("#activeSkillDisplaySVG").html())
  
  $("#activeSkillLevelInput").attr("min",
    curRaceList.races[characterData.race].startingSkills[activeSkill]);
  
  //Re-attach the handlers to all of the circles
  attachActiveSkillHandlers();
}

function updateCircleAndLineColors(){
  //First handle the active skill
  for(let i = 0; i < curPerkList.perks.length; i++){
    let thePerk = curPerkList.perks[i];
    let hasPerk = characterHasPerk(i);
    //Handle the active skill display
    if(thePerk.skill == activeSkill){
      //First deal with the circles
      if(hasPerk){
        if(characterData.skillLevels[activeSkill] >= thePerk.skillReq){
          $(`#activeCircle${i}`).attr("fill","url(#perkSelectedGrad)");
        }
        else{
          //Don't meet the skill requirement anymore
          $(`#activeCircle${i}`).attr("fill","url(#perkNotValidGrad)");
        }
        
        //Then the connecting lines
        for(let j = 0; j < thePerk.preReqs.length; j++){
          $(`#mainLine${i}to${thePerk.preReqs[j]}`).attr("stroke","yellow");
        }
      }
      else{
        $(`#activeCircle${i}`).attr("fill","url(#perkNotSelectedGrad)");
        for(let j = 0; j < thePerk.preReqs.length; j++){
          $(`#mainLine${i}to${thePerk.preReqs[j]}`).attr("stroke","lightblue");
        }
      } 
    }
  }
  //Then the mini-skill trees
  for(let i = 0; i < curPerkList.perks.length; i++){
    let thePerk = curPerkList.perks[i];
    //We only drew the first perk in the chain, so nothing to do for the rest
    if (thePerk.prevPerk != -1) continue;
    
    let hasPerk = characterHasPerk(i);
    if(!hasPerk){
      $(`#miniSkillCircle${i}`).attr("fill","lightblue");
      for(let j = 0; j < thePerk.preReqs.length; j++){
        $(`#miniLine${i}to${thePerk.preReqs[j]}`).attr("stroke","lightblue");
      }
    }
    else{
      for(let j = 0; j < thePerk.preReqs.length; j++){
        $(`#miniLine${i}to${thePerk.preReqs[j]}`).attr("stroke","yellow");
      }
      //Check if the circle should be red because we have a later perk in the
      //chain that we don't meet the skill req for.
      let shouldBeRed = false;
      let checkingNum = i;
      while(checkingNum != -1){
        let checking = curPerkList.perks[checkingNum];
        if(characterHasPerk(checkingNum) &&
            checking.skillReq > characterData.skillLevels[checking.skill])
        {
          shouldBeRed = true;
          break;
        }
        checkingNum = checking.nextPerk;
      }
      
      if(shouldBeRed){
        $(`#miniSkillCircle${i}`).attr("fill","red");
      }
      else {
        $(`#miniSkillCircle${i}`).attr("fill","yellow");
      }
    }
  }
}

function drawMiniSkillTrees() {
  
  for(let i = 1; i <= 18; i++){
    $(`#skill${i}SVG`).html("")
  }
  
  let perks = curPerkList.perks;
  //Draw the connecting lines. Do this first so that the circles will be
  //drawn on top of them.
  for(let i = 0; i < perks.length; i++)
  {
    let theSVG = $("#skill" + (perks[i].skill + 1) + "SVG");
    let svgWidth = theSVG.width();
    let svgHeight = theSVG.height();
    
    let curXPos = perks[i].xPos / 100 * svgWidth;
    let curYPos = perks[i].yPos / 100 * svgHeight;
    
    for(let j = 0; j < perks[i].preReqs.length; j++)
    {
      let preXPos = perks[ perks[i].preReqs[j] ].xPos / 100 * svgWidth;
      let preYPos = perks[ perks[i].preReqs[j] ].yPos / 100 * svgHeight;
      
      if(preXPos != curXPos || preYPos != curYPos)
      {
        /*
        let theColor = "lightblue";
        
        if(characterHasPerk(i) && characterHasPerk(perks[i].preReqs[j])){
          theColor = "yellow";
        }
        */
        
        theSVG.append(`<line id="miniLine${i}to${perks[i].preReqs[j]}" x1="${curXPos}" y1="${curYPos}" x2="${preXPos}" y2="${preYPos}" stroke-width="1" />`);
      }
    }
  }
  
  for(let i = 0; i < perks.length; i++)
  {
    let theSVG = $("#skill" + (perks[i].skill + 1) + "SVG");
    let svgWidth = theSVG.width();
    let svgHeight = theSVG.height();
    
    let curXPos = perks[i].xPos / 100 * svgWidth;
    let curYPos = perks[i].yPos / 100 * svgHeight;
    
    //For perk chains, only draw one circle for the first one
    if(perks[i].prevPerk == -1)
    {
      /*
      let fillType = "lightblue";

      if(characterHasPerk(i)){
        fillType = "yellow";
      }
      */
      
      $("#skill" + (perks[i].skill + 1) + "SVG").append(`<circle class="miniSkillCircle" id="miniSkillCircle${i}" cx="${curXPos}" cy="${curYPos}" r="3" data-perkNum="${i}" />`);
    }
  }
 
  for(let i = 1; i <= 18; i++){
    $(`#skill${i}Div`).html($(`#skill${i}Div`).html())
  }
}

function updateSkillNames() {
  for(let i = 0; i < 18; i++){
    $("#skill" + (i+1) + "Name").html(curPerkList.skillNames[i]);
  }
}

function updateSkillLevelsDisplay(){
  for(let i = 1; i <= 18; i++){
    $("#skill" + i + "Level").html(characterData.skillLevels[i-1]);
  }
}

function characterHasPerk(perkNum){
  return characterData.perksTaken[perkNum];
}

//Don't need to do any processing here (yet).
function addRaceData(raceData){
  racesList.push(raceData);
}

//Do some additional processing on the perk data,
//primarily to identify skill chains and add some extra
//fields to make dealing with them easier.
function addPerkData(perkData){
  //First add the prevPerk property
  for(let i = 0; i < perkData.perks.length; i++){
    let nextPerk = perkData.perks[i].nextPerk
    if(nextPerk != -1){
      perkData.perks[nextPerk].prevPerk = i;
    }
  }
  //Then find those with the prevPerk property defined and nextPerk == -1
  //These are the ends of the chains
  //If prevPerk isn't defined and nextPerk is -1, then it's not in a chain at all.
  for(let i = 0; i < perkData.perks.length; i++){

    if( !("prevPerk" in perkData.perks[i]) && perkData.perks[i].nextPerk == -1){
      //Not in chain
      perkData.perks[i].prevPerk = -1;
      perkData.perks[i].totalInChain = -1;
      perkData.perks[i].placeInChain = -1;
    }
    else if(perkData.perks[i].nextPerk != -1){
      perkData.perks[i].prevPerk = -1;
      //The start of a chain
      //First count how many are in the chain
      let totalInChain = 1;
      let checking = i;
      
      while(perkData.perks[checking].nextPerk != -1){
        totalInChain++;
        checking = perkData.perks[checking].nextPerk; 
      }
      //Then add the total and running total to each in the chain
      checking = i;
      for(let j = 1; j <= totalInChain; j++){
        perkData.perks[checking].totalInChain = totalInChain;
        perkData.perks[checking].placeInChain = j;
        checking = perkData.perks[checking].nextPerk; 
      }
    }
  }
  
  perksList.push(perkData);
}

//A little processing to do here: build a table of the cumulative amount
//of character XP is needed to get to each level
function addGameMechanicsData(gameData){
  
  gameData.xpTable = [0];
  
  for(let i = 1; i < 99; i++){
    gameData.xpTable.push(
       gameData.xpTable[i-1] + gameData.leveling.base + i * gameData.leveling.mult);
  }
  
  gameMechanicsList.push(gameData);
}

function addPresetData(presetData){
  presetList.push(presetData);
}

function updateSelectOptions(){
  
  let presetSel = $("#presetSelect");
  presetSel.empty();
  for(let i = 0; i < presetList.length; i++){
    presetSel.append(`<option value="${presetList[i].id}">${presetList[i].name}</option>`);
  }
  
  let perksSel = $("#perksSelect");
  perksSel.empty();
  for(let i = 0; i < perksList.length; i++){
    perksSel.append(`<option value="${perksList[i].id}">${perksList[i].name}</option>`);
  }
  
  let racesSel = $("#racesSelect");
  racesSel.empty();
  for(let i = 0; i < racesList.length; i++){
    racesSel.append(`<option value="${racesList[i].id}">${racesList[i].name}</option>`);
  }
  
  let mechanicsSel = $("#mechanicsSelect");
  mechanicsSel.empty();
  for(let i = 0; i < gameMechanicsList.length; i++){
    mechanicsSel.append(`<option value="${gameMechanicsList[i].id}">${gameMechanicsList[i].name}</option>`);
  }
}

function getIndexWithID(id,dataArray){
  for(let i = 0; i < dataArray.length; i++){
    if(dataArray[i].id == id) return i;
  }
  return -1;
}

function updateRaceSelect(){
  let raceSel = $("#raceSelect");
  raceSel.empty();
  for(let i = 0; i < curRaceList.races.length; i++){
    raceSel.append(`<option value="${i}">${curRaceList.races[i].name}</option>`);
  }
}

function calcFreePerks(){
  return characterData.earnedPerks - characterData.spentPerks;
}

//Get what level the player should be based on the skill levels
function calcLevel(){
  
  let totalXP = calcTotalXP();
  
  //Don't need to check i=0 because the value there should always be 0
  for(let i = 1; i < curGameMechanics.xpTable.length; i++){
    if(totalXP < curGameMechanics.xpTable[i]) return i;
  }
  // How would we ever get here???
  return 1;
}

//Calculate how much character XP has been earned based on skill levels
function calcTotalXP(){
  let answer = 0;
  for(let i = 0; i < 18; i++){
    let baseSkill = curRaceList.races[characterData.race].startingSkills[i];
    let currentSkill = characterData.skillLevels[i];
    if(baseSkill == currentSkill) continue;
    
    let start = baseSkill + 1;
    let n = (currentSkill - start) + 1;
    
    //use formula for sum of consective integers
    answer += (n/2) * (start + currentSkill);
  }
  return answer;
}

function updateCharacterLevelAndEarnedPerks(){
  let newLevel = calcLevel();
  let levelDiff = newLevel - characterData.level;
  characterData.level = newLevel;
  characterData.earnedPerks += levelDiff;
  updateLevelAndFreePerksDisplay();
}

function resetSkillsAndPerks(){
}