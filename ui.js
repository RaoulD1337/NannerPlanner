$(document).ready(function(){
	
	
	
	
  let gotBuild = initCharacterData();
  updateSkillNames();
  updateSkillLevelsDisplay();
  drawMiniSkillTrees();
  updateActiveSkillPanel();
  updateRaceSelect();
  updateBirthsignSelect();
  updateBlessingSelect();
  updateAttributeText();
  updateCircleAndLineColors();
  createDerivedAttributesTable();
  updateDerivedAttributesActive();
  updateDerivedAttributesPassive();
  
  if(gotBuild){
    updateStuffFromCharacterCode();
  }
  
  //updateBuildCodeDisplay();
  
  attachHandlers();
  
  $("#mainTitle").html("3BFTweaks Character Planner");
  $("#mainSkillDisplayDiv").fadeIn(500);
});

function updateStuffFromCharacterCode(){
  $("#oghmaSelect").val(characterData.oghmaChoice);
  $("#blackBookInput").val(characterData.blackBookPerks);
  $("#extendedPathInput").val(characterData.extendedPathPerks);
  $("#raceSelect").val(characterData.race);
  $("#birthsignSelect").val(characterData.birthsign);
  $("#blessingSelect").val(characterData.blessing);
  $("#healthIncreasesInput").val(characterData.hmsIncreases[0]);
  $("#magickaIncreasesInput").val(characterData.hmsIncreases[1]);
  $("#staminaIncreasesInput").val(characterData.hmsIncreases[2]);
  updateCharacterLevelAndResults();
}

function createDerivedAttributesTable() {
  let theTable = $("#derivedAttributeTable");
  let derAttrData = pGameMechanicsData.derivedAttributes;
  
  for(let i = 0; i < derAttrData.attribute.length; i++){
    let theRow = `<div class="derivedAttributeTableRow">`;
    theRow += `<div class="derivedAttributeTableCellLabel" id="derivedAttributeName${i}">`;
    theRow += `${derAttrData.attribute[i]}</div>`;
    theRow += `<div class="derivedAttributeTableCellValue" id="derivedAttributeValue${i}">`;
    theRow += "0</div></div>";
    theTable.append(theRow);
  }
  
}

//Attach all the event handlers to the main UI
function attachHandlers(){
  $(".miniSkillTreeDiv").click(leftSideSkillClick);
  $(window).resize(resizeWindowHandler);
  $("#activeSkillLevelInput").on("change",skillInputChange);
  $("#raceSelect").on("change",raceSelectChange);
  $("#resetActiveSkillButton").click(resetActiveSkillButtonClick);
  $("#resetAllSkillsButton").click(resetAllSkillsButtonClick);
  $(".attributeInput").on("keydown input",attributeInputChange);
  $(".derivedChoiceInput").on("keydown input",derivedChoiceInputChange);
  $("#oghmaSelect").on("change", oghmaSelectChange);
  $("#blackBookInput").on("keydown input", blackBookInputChange);
  $("#extendedPathInput").on("keydown input", extendedPathInputChange);
  $("#blessingSelect").on("change", blessingSelectChange);
  $("#birthsignSelect").on("change",birthsignSelectChange);
  $("#buildCodeCopyText").click(buildCodeCopyTextClick);
}

function blessingSelectChange(){
  characterData.blessing = Number($(this).val());
  updateAttributeText();
  updateBuildCodeDisplay();
  
}

function birthsignSelectChange(){
  characterData.birthsign = Number($(this).val());
  updateAttributeText();
  updateBuildCodeDisplay();
}

function oghmaSelectChange(){
  characterData.oghmaChoice = Number($("#oghmaSelect").val());
  updateCharacterLevelAndResults();
  updateAttributeText();
  updateBuildCodeDisplay();
}

function blackBookInputChange(){
	
	validateAttributeInput($(this));
	
	perks = Number($("#blackBookInput").val());
	
  characterData.blackBookPerks = perks;
  updateCharacterLevelAndResults();
  updateBuildCodeDisplay();
}


function derivedChoiceInputChange(){
	//validateAttributeInput($(this));
	
	// We continue being lazy
	characterData.derivedAttributesIncreases[0] = Number($("#damageResistDerivedInput").val());
	characterData.derivedAttributesIncreases[1] = Number($("#meleeDamageDerivedInput").val());
	characterData.derivedAttributesIncreases[2] = Number($("#shoutCooldownDerivedInput").val());
	
	characterData.derivedAttributesIncreases[3] = Number($("#magicResistDerivedInput").val());
	characterData.derivedAttributesIncreases[4] = Number($("#spellCostDerivedInput").val());
	characterData.derivedAttributesIncreases[5] = Number($("#spellPowerDerivedInput").val());
	
	console.log(Number($("#spellPowerDerivedInput").val()));
	
	characterData.derivedAttributesIncreases[6] = Number($("#moveSpeedDerivedInput").val());
	characterData.derivedAttributesIncreases[7] = Number($("#marksmanDamageDerivedInput").val());
	characterData.derivedAttributesIncreases[8] = Number($("#attackSpeedDerivedInput").val());
	
	
	updateDerivedAttributesActive();
	updateDerivedAttributesInputs();
  updateBuildCodeDisplay();
}

function attributeInputChange(){
  
	validateAttributeInput($(this));
  
	//Just be lazy and update them all at the same time.
	characterData.hmsIncreases[0] = Number($("#healthIncreasesInput").val());
	characterData.hmsIncreases[1] = Number($("#magickaIncreasesInput").val());
	characterData.hmsIncreases[2] = Number($("#staminaIncreasesInput").val());
  
  updateAttributeChoiceInputs();
  updateFreeAttributeChoicesDisplay();
  updateDerivedAttributesInputs();
  updateAttributeText();
  updateDerivedAttributesPassive();
  updateBuildCodeDisplay();
}

function extendedPathInputChange(){
	
	validateAttributeInput($(this));
	
  perks = Number($("#extendedPathInput").val());
  
  characterData.extendedPathPerks = perks;
  
  updateCharacterLevelAndResults();
  updateBuildCodeDisplay();
}

function updateAttributeText(){
  let answers = ["Health: ","Magicka: ","Stamina: "];
  let oghmaVal = Number($("#oghmaSelect").val());
  let birthsignVal = Number($("#birthsignSelect").val());
  let blessingVal = Number($("#blessingSelect").val());
  let baseHms = [];
  let bonusHms = [];
  let totalIncreases = 0;

  
  for(let i = 0; i < 3; i++){
	totalIncreases += characterData.hmsIncreases[i];
	
    let baseVal = raceData.races[characterData.race].startingHMS[i];
    baseVal += pGameMechanicsData.leveling.hmsGiven[i] * characterData.hmsIncreases[i];
    
    let bonuses = raceData.races[characterData.race].hmsBonus[i];
    if( (oghmaVal - 1) == i){
      bonuses += pGameMechanicsData.oghmaData.hmsGiven[i];
    }
	
	bonuses += pBirthsignData.birthsigns[birthsignVal].hms[i];
	bonuses += pBlessingData.blessings[blessingVal].hms[i];
	
	baseHms[i] = baseVal;
	bonusHms[i] = bonuses;
	
  }
	if(totalIncreases < 20){
		baseHms[0] += pGameMechanicsData.leveling.extraHms[0]*totalIncreases;
	}
  
  for(let i = 0; i < 3; i++){
	  
	answers[i] += (baseHms[i]+bonusHms[i]);
	
    if(bonusHms[i] > 0){
      answers[i] += ` (${baseHms[i]}+${Math.abs(bonusHms[i])})`;
    } 
	if(bonusHms[i] < 0){
      answers[i] += ` (${baseHms[i]}-${Math.abs(bonusHms[i])})`;
    } 
  }
  
  $("#healthAttributeText").html(answers[0]);
  $("#magickaAttributeText").html(answers[1]);
  $("#staminaAttributeText").html(answers[2]);
}




function validateAttributeInput(theInput){
  let val = Number(theInput.val());
  if(val < 0) val = 0;
  if(val > theInput.attr("max")) val = theInput.attr("max");
  theInput.val(val);
}

function resetActiveSkillButtonClick(){
  resetSkill(activeSkill);
  updateActiveSkillPanel();
  updateCircleAndLineColors();
  updateSkillLevelsDisplay();
  updateBuildCodeDisplay();
}

function resetAllSkillsButtonClick(){
  resetSkill(-1);
  updateActiveSkillPanel();
  updateCircleAndLineColors();
  updateSkillLevelsDisplay();
  updateBuildCodeDisplay();
}



function raceSelectChange(){
  changeRace(Number($(this).val()));
  updateBuildCodeDisplay();
}

function skillInputChange(){
  let value = Number($(this).val());
  let minVal = $(this).attr("min");
  if(value < minVal) value = minVal;
  if(value > 100) value = 100;
  $(this).val(value);
  characterData.skillLevels[activeSkill] = value;
  
  updateCircleAndLineColors();
  
  updateCharacterLevelAndResults();
  updateSkillLevelsDisplay();
  updateBuildCodeDisplay();
}

function attachActiveSkillHandlers(){
  $(".activeSkillCircle").hover(activeSkillPerkHoverEnter,activeSkillPerkHoverLeave);
  $(".activeSkillCircle").mousedown(activeSkillPerkClick);
}

function activeSkillPerkClick(event){
  $("body").addClass("unselectable");
  
  let perkNum = Number($(this).attr("data-perknum"));
  
  if(event.button == 0){//LMB
    let hasPerk = characterHasPerk(perkNum);
    let isInChain = pPerksData.perks[perkNum].placeInChain != -1;
    let isFirstInChain = pPerksData.perks[perkNum].prevPerk == -1;
    
    let perkToTake = -1
    
    //The perk we clicked on is the one we want to take
    if(!isInChain || !hasPerk){ 
      perkToTake = perkNum;
    }
    //Otherwise we clicked part of a chain and actually want to take the next one.
    else{
      perkToTake = pPerksData.perks[perkNum].nextPerk;
    }
    
    if(event.detail > 1 & !tookPerkWithLastClick){
      
      let tookPerk = forceTakePerk(perkToTake);
      if(tookPerk){
        updateActiveSkillPanel();
        tookPerkWithLastClick = true;
      }
      else{
        tookPerkWithLastClick = false;
      }
      updateCharacterLevelAndResults();
      updateCircleAndLineColors();
      updateSkillLevelsDisplay();
    }
    else{
      tookPerkWithLastClick = tryTakePerk(perkToTake);
    }
    
  }
  else if (event.button == 2){//RMB
    tryRemovePerk(perkNum);
  }
  
  window.getSelection().removeAllRanges();
  setTimeout(function(){$("body").removeClass("unselectable");},5);
  updateBuildCodeDisplay();
}

function activeSkillPerkHoverEnter(event){

  let clientRect = this.getBoundingClientRect();

  let perkNum = Number($(this).attr("data-perknum"));
  let hasPerk = characterHasPerk(perkNum);
  let isInChain = pPerksData.perks[perkNum].placeInChain != -1;
  let isLastInChain = pPerksData.perks[perkNum].nextPerk == -1; 
  
  let skillReq = pPerksData.perks[perkNum].skillReq;
  let descString = pPerksData.perks[perkNum].description;
  if(skillReq > 0){
    descString += ` (Skill Req: ${skillReq})`
  }
  $("#highlightedPerkDesc").html(descString);
  
  if(hasPerk && isInChain && !isLastInChain){
    let nextPerkNum = pPerksData.perks[perkNum].nextPerk;
    let nextPerkReq = pPerksData.perks[nextPerkNum].skillReq;
    let nextPerkDescString = pPerksData.perks[nextPerkNum].description;
    let nextDescString = `<b>Next rank:</b> ${nextPerkDescString} (Skill Req: ${nextPerkReq})`;
    
    $("#highlightedNextPerkDesc").html(nextDescString);
  }
  else {
    $("#highlightedNextPerkDesc").empty();
  }
  
  $("#highlightedPerkDiv").removeClass("errorMessageDiv");
  $("#highlightedPerkDiv").css({left : `${clientRect.left-300}px`, top : `${clientRect.top+40}px`, display: "block"});
}

function activeSkillPerkHoverLeave(){
  $("#highlightedPerkDesc").empty();
  $("#highlightedNextPerkDesc").empty();
  $("#highlightedPerkDiv").hide();
}

function resizeWindowHandler(){
  drawActiveSkillTree();
  drawMiniSkillTrees();
  updateCircleAndLineColors();
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
  $("#activeSkillDisplayName").html(pPerksData.skillNames[activeSkill]);
  updateCharacterLevelAndResults();
  $("#activeSkillLevelInput").val(characterData.skillLevels[activeSkill]);
  drawActiveSkillTree();
  updateCircleAndLineColors();
}

function drawActiveSkillTree(){
  
  //clear the lines and circles in the active skill tree
  $("#activeSkillDisplaySVG > circle").remove();
  $("#activeSkillDisplaySVG > line").remove();
  $("#activeSkillDisplaySVG > text").remove();
  
  let perks = pPerksData.perks;
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
      let lineNum = Math.abs(perks[i].preReqs[j]);
      
      let preXPos = perks[ lineNum ].xPos / 100 * svgWidth;
      let preYPos = perks[ lineNum ].yPos / 100 * svgHeight;
      
      if(preXPos != curXPos || preYPos != curYPos)
      { 
        theSVG.append(`<line id="mainLine${i}to${lineNum}" x1="${curXPos}" y1="${curYPos}" x2="${preXPos}" y2="${preYPos}" stroke-width="2" stroke-opacity="0.5" />`);
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
    
    let breakLocation = label.indexOf("<br>");
    
    if(breakLocation == -1){
      theSVG.append(`<text font-size="11px" x="${curXPos}" y="${curYPos+25}" text-anchor="middle" fill="black" filter="url(#shadow)">${label}</text>`); 
      theSVG.append(`<text font-size="11px" x="${curXPos}" y="${curYPos+25}" text-anchor="middle" fill="white">${label}</text>`);
    }
    else{
      let parts = label.split("<br>");
      theSVG.append(`<text font-size="11px" x="${curXPos}" y="${curYPos+25}" text-anchor="middle" fill="black" filter="url(#shadow)">${parts[0]}
          <tspan x="${curXPos}" y="${curYPos+42}">${parts[1]}</tspan></text>`); 
          
          
      theSVG.append(`<text font-size="11px" x="${curXPos}" y="${curYPos+25}" text-anchor="middle" fill="white">${parts[0]}<tspan x="${curXPos}" y="${curYPos+42}">${parts[1]}</tspan></text>`);
    }
  }
  //Silly hack to actually draw the new SVG
  $("#activeSkillDisplaySVG").html($("#activeSkillDisplaySVG").html())
  
  $("#activeSkillLevelInput").attr("min",
    raceData.races[characterData.race].startingSkills[activeSkill]);
  
  //Re-attach the handlers to all of the circles
  attachActiveSkillHandlers();
}

function updateCircleAndLineColors(){
  //First handle the active skill
  for(let i = 0; i < pPerksData.perks.length; i++){
    let thePerk = pPerksData.perks[i];
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
          if(characterHasPerk(Math.abs(thePerk.preReqs[j]))){
            $(`#mainLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke","yellow");
          }
          else{
            $(`#mainLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke","lightblue");
          }
        }
      }
      else{
        $(`#activeCircle${i}`).attr("fill","url(#perkNotSelectedGrad)");
        for(let j = 0; j < thePerk.preReqs.length; j++){
          $(`#mainLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke","lightblue");
        }
      } 
    }
  }
  //Then the mini-skill trees
  for(let i = 0; i < pPerksData.perks.length; i++){
    let thePerk = pPerksData.perks[i];
    //We only drew the first perk in the chain, so nothing to do for the rest
    if (thePerk.prevPerk != -1) continue;
    
    let hasPerk = characterHasPerk(i);
    if(!hasPerk){
      $(`#miniSkillCircle${i}`).attr("fill","lightblue");
      for(let j = 0; j < thePerk.preReqs.length; j++){
        $(`#miniLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke","lightblue");
      }
    }
    else{
      for(let j = 0; j < thePerk.preReqs.length; j++){
        if(characterHasPerk(Math.abs(thePerk.preReqs[j]))){
          $(`#miniLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke","yellow");
        }
        else{
          $(`#miniLine${i}to${Math.abs(thePerk.preReqs[j])}`).attr("stroke","lightblue");
        }
      }
      //Check if the circle should be red because we have a later perk in the
      //chain that we don't meet the skill req for.
      let shouldBeRed = false;
      let checkingNum = i;
      while(checkingNum != -1){
        let checking = pPerksData.perks[checkingNum];
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
  
  let perks = pPerksData.perks;
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
      let lineNum = Math.abs(perks[i].preReqs[j]);
      let preXPos = perks[ lineNum ].xPos / 100 * svgWidth;
      let preYPos = perks[ lineNum ].yPos / 100 * svgHeight;
      
      if(preXPos != curXPos || preYPos != curYPos)
      { 
        theSVG.append(`<line id="miniLine${i}to${lineNum}" x1="${curXPos}" y1="${curYPos}" x2="${preXPos}" y2="${preYPos}" stroke-width="1" />`);
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
      $("#skill" + (perks[i].skill + 1) + "SVG").append(`<circle class="miniSkillCircle" id="miniSkillCircle${i}" cx="${curXPos}" cy="${curYPos}" r="3" data-perkNum="${i}" />`);
    }
  }
 
  for(let i = 1; i <= 18; i++){
    $(`#skill${i}Div`).html($(`#skill${i}Div`).html())
  }
  
  attachMiniSkillTreeHandlers();
}

function attachMiniSkillTreeHandlers(){
  $(".miniSkillCircle").hover(miniPerkHoverEnter,activeSkillPerkHoverLeave);
}

function miniPerkHoverEnter(event){
  let clientRect = this.getBoundingClientRect();

  let perkNum = Number($(this).attr("data-perknum"));
  let hasPerk = characterHasPerk(perkNum);
  let isInChain = pPerksData.perks[perkNum].placeInChain != -1;
  
  $("#highlightedPerkDiv").removeClass("errorMessageDiv");
  $("#highlightedPerkDesc").html(pPerksData.perks[perkNum].name);
  $("#highlightedNextPerkDesc").empty();
  
  $("#highlightedPerkDiv").css({left : `${clientRect.left-80}px`, top : `${clientRect.top+5}px`, display: "block"}); 
}

function updateSkillNames() {
  for(let i = 0; i < 18; i++){
    $("#skill" + (i+1) + "Name").html(pPerksData.skillNames[i]);
  }
}

function updateSkillLevelsDisplay(){
  for(let i = 1; i <= 18; i++){
    $("#skill" + i + "Level").html(characterData.skillLevels[i-1]);
  }
  $("#activeSkillLevelInput").val(characterData.skillLevels[activeSkill]);
}


function updateRaceSelect(){
  let raceSel = $("#raceSelect");
  raceSel.empty();
  for(let i = 0; i < pRaceData.races.length; i++){
    raceSel.append(`<option value="${i}">${pRaceData.races[i].name}</option>`);
  }
}

function updateBlessingSelect(){
  let blessSel = $("#blessingSelect");
  blessSel.empty();
  for(let i = 0; i < pBlessingData.blessings.length; i++){
    blessSel.append(`<option value="${i}">${pBlessingData.blessings[i].name}</option>`);
  }
}

function updateBirthsignSelect(){
  let bsSelect = $("#birthsignSelect");
  bsSelect.empty();
  for(let i = 0; i < pBirthsignData.birthsigns.length; i++){
    bsSelect.append(`<option value="${i}">${pBirthsignData.birthsigns[i].name}</option>`);
  }
}

function updateCharacterLevelAndResults(){
  calcCharacterLevelAndResults();
  updateLevelAndFreePerksDisplay();
  updateFreeAttributeChoicesDisplay();
  updateAttributeChoiceInputs();
  updateAttributeText();
}

function updateAttributeChoiceInputs() {
  let freeChoices = calcFreeAttributeChoices();
  if(freeChoices < 0) freeChoices = 0;
  $("#healthIncreasesInput").attr("max",characterData.hmsIncreases[0] + freeChoices);
  $("#magickaIncreasesInput").attr("max",characterData.hmsIncreases[1] + freeChoices);
  $("#staminaIncreasesInput").attr("max",characterData.hmsIncreases[2] + freeChoices);
}

function updateDerivedAttributesInputs() {
  let spentHealthChoices = characterData.derivedAttributesIncreases[0] + characterData.derivedAttributesIncreases[1] + characterData.derivedAttributesIncreases[2];
  let spentMagickaChoices = characterData.derivedAttributesIncreases[3] + characterData.derivedAttributesIncreases[4] + characterData.derivedAttributesIncreases[5];
  let spentStaminaChoices = characterData.derivedAttributesIncreases[6] + characterData.derivedAttributesIncreases[7] + characterData.derivedAttributesIncreases[8];
 
  
  $("#damageResistDerivedInput").attr("max",(characterData.hmsIncreases[0] - (characterData.derivedAttributesIncreases[1] + characterData.derivedAttributesIncreases[2])));
  $("#meleeDamageDerivedInput").attr("max",(characterData.hmsIncreases[0] - (characterData.derivedAttributesIncreases[0] + characterData.derivedAttributesIncreases[2])));
  $("#shoutCooldownDerivedInput").attr("max",(characterData.hmsIncreases[0] - (characterData.derivedAttributesIncreases[0] + characterData.derivedAttributesIncreases[1])));
  
  $("#magicResistDerivedInput").attr("max",(characterData.hmsIncreases[1] - (characterData.derivedAttributesIncreases[4]+characterData.derivedAttributesIncreases[5])));
  $("#spellCostDerivedInput").attr("max",(characterData.hmsIncreases[1] - (characterData.derivedAttributesIncreases[3]+characterData.derivedAttributesIncreases[5])));
  $("#spellPowerDerivedInput").attr("max",(characterData.hmsIncreases[1] - (characterData.derivedAttributesIncreases[3]+characterData.derivedAttributesIncreases[4])));
  
  $("#moveSpeedDerivedInput").attr("max",(characterData.hmsIncreases[2] - (characterData.derivedAttributesIncreases[7]+characterData.derivedAttributesIncreases[8])));
  $("#marksmanDamageDerivedInput").attr("max",(characterData.hmsIncreases[2] - (characterData.derivedAttributesIncreases[6]+characterData.derivedAttributesIncreases[8])));
  $("#attackSpeedDerivedInput").attr("max",(characterData.hmsIncreases[2] - (characterData.derivedAttributesIncreases[6]+characterData.derivedAttributesIncreases[7])));
}



function updateFreeAttributeChoicesDisplay(){
  let theDiv = $("#attributesToSpendDiv");
  let freeChoices = calcFreeAttributeChoices();
  theDiv.html(`Attribute Choices Remaining: ${freeChoices}`);
  if(freeChoices < 0){
    theDiv.removeClass("whiteText");
    theDiv.addClass("redText");
  }
  else{
    theDiv.removeClass("redText");
    theDiv.addClass("whiteText");
  }
}



function buildCodeCopyTextClick(){
  navigator.clipboard.writeText($("#buildCodeText").val()).then(function() {
    $("#buildCopiedMessage").show();
    clearTimeout(copiedMessageTimeoutID);
    copiedMessageTimeoutID = setTimeout(function() {$("#buildCopiedMessage").hide();},2000);
  }, function() {
  // clipboard write failed 
});
}


function updateBuildCodeDisplay(){
  let buildCheck = validateBuild();
  if(buildCheck.valid){
    let code = generateBuildCode();
    let buildLink = `https://raould1337.github.io/NannerPlanner/?b=${code}`;
    $("#buildCodeText").val(buildLink);
  }
  else{
    $("#buildCodeText").val(buildCheck.message);
  }
}

