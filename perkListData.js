/*
*
* Base Requiem 4.0.2 (and probably earlier)
*
*/
const three3bftweaks433data = {
name : "3BFTweaks 4.33",
id: 0,
skillNames : [
  "Alchemy",      // 0
  "Alteration",   // 1
  "Block",        // 2
  "Conjuration",  // 3
  "Destruction",  // 4
  "Enchanting",   // 5
  "Evasion",      // 6
  "Heavy Armor",  // 7
  "Illusion",     // 8
  "Lockpicking",  // 9
  "Marksman",     // 10
  "One-Handed",   // 11
  "Dexterity",   // 12
  "Restoration",  // 13
  "Smithing",     // 14
  "Sneak",        // 15
  "Speech",       // 16
  "Two-Handed"    // 17
],
perks : [
  /*
    {name : "", skill : 0, skillReq : 0,
      xPos : 0, yPos : 0, preReqs : [], nextPerk: -1,
      description : ""},
  */
  //0
  {name : "Alchemical Lore", skill : 0, skillReq: 0,
   xPos : 50.3, yPos : 90, preReqs : [], nextPerk: 1,
   description : "You've acquired basic alchemical insights and understand how to work with a laboratory. Thus, you can now craft your own potions and poisons."},
  //1
  {name : "Alchemical Lore", skill : 0, skillReq : 0,
   xPos : 50, yPos : 90, preReqs : [0], nextPerk: -1,
   description : "You now can craft alchemistic powders at a smelter. In addition, your sensory organs have become very keen. Thus, you determine most of the alchemical properties of consumed ingredients. Your created potions are 50% more potent."},
  //2
  {name : "Improved Elixirs", skill : 0, skillReq : 25,
   xPos : 75, yPos : 85, preReqs : [0], nextPerk: -1,
   description : "Having refined your brewing process, you are now able to improve the effects of all your beneficial elixirs by 10%, and your health/stamina/magicka-restoring potions by a further 10%."},
  //3
  {name : "Night Vision", skill : 0, skillReq : 35,
  xPos : 60, yPos : 75, preReqs : [2], nextPerk: -1,	
  description : "Having altered your body with extracts from a sabrecat eye, you can now make your eyes see in the dark at will."},
  //4
  {name : "Concentrated Poisons", skill : 0, skillReq : 25,
  xPos : 25, yPos : 85, preReqs : [0], nextPerk: -1,
  description : "Your experience in the obscure alchemical arts allows you to concentrate your poisons.<br> Thus, you can make most of them last longer before they need to be reapplied and they're slightly stronger."},
  //5
  {name : "Addict's Panacea", skill : 0, skillReq : 40,
   xPos : 40, yPos : 75, preReqs : [4], nextPerk: -1,
   description : "Skoom addiction is unlike any other disease. You're able to concoct a recipe that will make you whole again."},
  //6
  {name : "Regeneration", skill : 0, skillReq : 65,
   xPos : 50, yPos : 60, preReqs : [2], nextPerk: -1,
   description : "Having altered your body with extracts from troll fat, slaughterfish eggs and spriggan sap, you're now able to regenerate your body, and do so even more rapidly when you are immersed in water."},
  //7
  {name : "Catalysis", skill : 0, skillReq : 50,
   xPos : 63, yPos : 35, preReqs : [2], nextPerk: 7,
   description : "You've started experimenting with a catalyst that increases the yield of the brewing process roughly one fifth of the time and improves the effects of all your beneficial elixirs by 10%."},
  //8
  {name : "Catalysis", skill : 0, skillReq : 100,
   xPos : 63, yPos : 35, preReqs : [2,7], nextPerk: -1,
   description : "You've improved the catalyst. Thereby, you can craft double the amount of <br> mixtures with the same amount of ingredients half of the time, are able to improve the effects of all your beneficial elixirs by 10% and your health/stamina/magicka-restoring potions by a further 10%."},
  //9
  {name : "Improved Poisons", skill : 0, skillReq : 50,
   xPos : 37, yPos : 35, preReqs : [4], nextPerk: -1,
   description : "By adding small amounts of truly horrifying ingredients, you are able to make your poisons more potent."},
  //10
  {name : "Immunization", skill : 0, skillReq : 75,
   xPos : 50, yPos : 25, preReqs : [7,9], nextPerk: -1,
   description : "You've discovered a way to make your body more resilient to all kinds of diseases and poisons."},
  //11
  {name : "Fortified Muscles", skill : 0, skillReq : 80,
   xPos : 42, yPos : 47, preReqs : [10], nextPerk: -1,
   description : "Having ingested a preparation of troll fat and mammoth heart fermented in Strange Remains, you've become more resilient to harm and your body can excrete toxic waste products more efficiently."},
  //12
  {name : "Alchemical Intellect", skill : 0, skillReq : 100,
   xPos : 58, yPos : 47, preReqs : [10], nextPerk: -1,
   description : "Having altered your body with extracts from a Dremora's Heart and Ectoplasm, your mind has transcended mortal limits, expanding your magicka and improving your spell casting."},
  //13
  {name : "Purification Process", skill : 0, skillReq : 100,
   xPos : 50, yPos : 5, preReqs : [10], nextPerk: -1,
   description : "You've found a method to eliminate disadvantages from your mixtures while making them even more potent. All created potions are 10% more potent, while all beneficial potions are a further 5% more potent. Lastly, health/magicka/stamina-restoring potions are a further 5% more potent."},
  //14
  {name : "Novice Alteration", skill : 1, skillReq : 0,
   xPos : 50, yPos : 90, preReqs : [], nextPerk: -1,
   description : "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort while your newfound knowledge also allows you to augment all Alteration spells."},
  //15
  {name : "Apprentice Alteration", skill : 1, skillReq : 25,
   xPos : 53, yPos : 55, preReqs : [14], nextPerk: -1,
   description : "By pursuing your apprenticeship in Alteration, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."},
   //16
  {name : "Adept Alteration", skill : 1, skillReq : 50,
   xPos : 54, yPos : 35, preReqs : [15], nextPerk: -1,
   description : "By advancing further into the school of Alteration, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."},
   //17
  {name : "Expert Alteration", skill : 1, skillReq : 75,
   xPos : 60, yPos : 20, preReqs : [16], nextPerk: -1,
   description : "You've unlocked almost every secret in the school of Alteration and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."},
   //18
  {name : "Master Alteration", skill : 1, skillReq : 100,
   xPos : 70, yPos : 5, preReqs : [17], nextPerk: -1,
   description : "Your knowledge of Alteration has become all-encompassing. You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."},
   //19
  {name : "Spell Armor", skill : 1, skillReq : 75,
   xPos : 80, yPos : 20, preReqs : [17], nextPerk: -1,
   description : "You've expanded the versatility of your Mage Armor spells by enabling them to also decrease incoming elemental damage."},
   //20
  {name : "Magical Absorption", skill : 1, skillReq : 100,
   xPos : 50, yPos : 7, preReqs : [17], nextPerk: -1,
   description : "You've mastered the art of absorbing Magicka from incoming spells, and are now able to fully absorb their power from time to time."},
   //21
  {name : "Empowered Alterations", skill : 1, skillReq : 25,
   xPos : 35, yPos : 55, preReqs : [14], nextPerk: -1,
   description : "You learned how to empower Alteration spells. Thus, you now can overcharge their effects into even more powerful, longer lasting versions."},
   //22
  {name : "Improved Mage Armor", skill : 1, skillReq : 25,
   xPos : 35, yPos : 38, preReqs : [15], nextPerk: -1,
   description : "You've mastered the art of casting armor spells. Arrows do 5% less damage per rank of mage armor active.<br> So long as the weight of all worn gear you have equipped is less than 10, all mage armor spells will be more effective. They'll be even more effective if your total weight is less than 5."},
   //23
  {name : "Magic<br>Resistance", skill : 1, skillReq : 25,
   xPos : 72, yPos : 37, preReqs : [15], nextPerk: -1,
   description : "Your Mage Armor spells are able to block a part of a dangerous spell's effect, increasing with higher rank Mage Armor"},
   //24
  {name : "Stability", skill : 1, skillReq : 50,
   xPos : 42, yPos : 22, preReqs : [16], nextPerk: -1,
   description : "You've become exceptionally good at making your alteration spells more stable. Thus, they now last longer."},
   //25
  {name : "Metamagical Thesis", skill : 1, skillReq : 75,
   xPos : 25, yPos : 18, preReqs : [24], nextPerk: -1,
   description : "Your knowledge of the very fabric of magic itself allows you to cast any spell of any school with decreased effort."},
   //26
  {name : "Metamagical<br>Empowerment", skill : 1, skillReq : 100,
   xPos : 32, yPos : 5, preReqs : [25], nextPerk: -1,
   description : "Having delved even deeper in metamagical lore, you can cast any spell more effectively and augment all other magical effects."},
   //27
  {name : "Improved Blocking", skill : 2, skillReq : 0,
   xPos : 55, yPos : 90, preReqs : [], nextPerk: -1,
   description : "You strengthened your shield arm and trained to parry blows a little. Thus you can block somewhat better and protect yourself a bit more from offensive magic with your shield."},
   //28
  {name : "Strong Grip", skill : 2, skillReq : 15,
   xPos : 17, yPos : 70, preReqs : [27], nextPerk: -1,
   description : "You hold on to your shield like you would hold on to your life. Blocking is even more effective and your equipped shield weighs less. Your shield is also able to block a bit more of offensive magic."},
   //29
  {name : "Experienced Blocking", skill : 2, skillReq : 30,
   xPos : 14, yPos : 45, preReqs : [28], nextPerk: -1,
   description : "With weapon or shield you can block almost any blow with rock-solid confidence. Additionally, when blocking a hit you feel the adrenaline rushing through your veins, recovering a small amount of stamina. You are also able to block a bit more offensive magic with your shield."},
   //30
   {name : "Defensive Stance", skill : 2, skillReq : 50,
   xPos : 18, yPos : 32, preReqs : [29], nextPerk: -1,
   description : "You have honed your defensive movements to perfection. [Blocking with a shield does not slow you down]"},
   //31
  {name : "Elemental Protection", skill : 2, skillReq : 75,
   xPos : 29, yPos : 22, preReqs : [30], nextPerk: -1,
   description : "You've perfected the art of blocking spells and take even less damage from them while blocking. You've even learned to deflect spells with your weapon a bit, though a shield is still much more effective for such a task."},
   //32
  {name : "Powerful Bashes", skill : 2, skillReq : 20,
   xPos : 89, yPos : 65, preReqs : [27], nextPerk: -1,
   description : "You can perform a much more powerful bash. Bashing an enemy with your shield or your weapon will likely put them off balance. Bashing an enemy using a shield now damages the target with element type inherited from your shield's resistance enchantment.."},
   //33
  {name : "Overpowering Bashes", skill : 2, skillReq : 40,
   xPos : 250/3, yPos : 40, preReqs : [32], nextPerk: -1,
   description : "Your shield bashes will often overpower your foes. They will be staggered much more and likely will even trip and fall. Blocking physical damage with a shield with a resistance enchantment now charges the shield with energy, allowing your power bashes to release the stored energy with devastating strike."},
   //34
  {name : "Disarming Bash", skill : 2, skillReq : 65,
   xPos : 75, yPos : 25, preReqs : [33], nextPerk: -1,
   description : "Sometimes, when you put all your strength into your bashes your foes drop their weapon because of the pain. Your shield with a resistance enchantment now charges faster and released energy is even stronger and hits targets around you."},
   //35
  {name : "Unstoppable Charge", skill : 2, skillReq : 100,
   xPos : 55, yPos : 15, preReqs : [34,31], nextPerk: -1,
   description : "When bull rushing with a shield raised, you are a tremendous force to deal with. In addition to likely being knocked down, your unfortunate enemies will also suffer serious wounds from the impact itself."},
   //36
  {name : "Novice<br>Conjuration", skill : 3, skillReq : 0,
   xPos : 55, yPos : 90, preReqs : [], nextPerk: -1,
   description : "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort <br> while your newfound knowledge also allows you to augment all Conjuration spells."},
   //37
  {name : "Apprentice<br>Conjuration", skill : 3, skillReq : 25,
   xPos : 53, yPos : 60, preReqs : [36], nextPerk: -1,
   description : "By pursuing your apprenticeship in Conjuration, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."},
   //38
  {name : "Adept<br>Conjuration", skill : 3, skillReq : 50,
   xPos : 52, yPos : 38, preReqs : [37], nextPerk: -1,
   description : "By advancing further into the school of Conjuration, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."},
   //39
  {name : "Expert<br>Conjuration", skill : 3, skillReq : 75,
   xPos : 50, yPos : 22, preReqs : [38], nextPerk: -1,
   description : "You've unlocked almost every secret in the school of Conjuration and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."},
   //40
  {name : "Master<br>Conjuration", skill : 3, skillReq : 100,
   xPos : 50, yPos : 11, preReqs : [39], nextPerk: -1,
   description : "Your knowledge of Conjuration has become all-encompassing. You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."},
   //41
   {name : "Mystic<br>Maelstrom", skill : 3, skillReq : 30,
   xPos : 72, yPos : 70, preReqs : [36], nextPerk: -1,
   description : "The weapon-shaped Daedra you conjure now directly cut into their victims' souls, <br> thereby making targets vulnerable to soul gems and suffer irresistible damage. Bound items also last until sheathed or dispelled. "},
   //42
  {name : "Mystic<br>Binding", skill : 3, skillReq : 50,
   xPos : 75, yPos : 40, preReqs : [41], nextPerk: -1,
   description : "You've become very skilled in binding weapon-shaped daedra from Oblivion. <br> Thereby, bound weapons are stronger and have silver properties."},
   //43
  {name : "Mystic<br>Banishment", skill : 3, skillReq : 75,
   xPos : 73, yPos : 25, preReqs : [42], nextPerk: -1,
   description : "Your bound weapons are now able to send summoned creatures back into the waters of Oblivion <br> and turn the undead. They also now bypass an additional tenth of foes' armor values."},
   //44
  {name : "Mystic<br>Disruption", skill : 3, skillReq : 90,
   xPos : 71, yPos : 8, preReqs : [43], nextPerk: -1,
   description : "You've perfected your invocations of summoning weapon-shaped daedra. They now bypass an additional fifth of foes' armor values."},
   //45
  {name : "Necromancy", skill : 3, skillReq : 25,
   xPos : 63, yPos : 54, preReqs : [36], nextPerk: -1,
   description : "You've developed a knack for making the dead serve your commands.<br> Therefore, all spells that summon or raise the dead and ghosts last longer and can raise more powerful entities."},
   //46
  {name : "Ritualism", skill : 3, skillReq : 50,
   xPos : 62, yPos : 34, preReqs : [45], nextPerk: -1,
   description : "Your knowledge of the realms of the dead surpasses that of many and decreases the effort needed to raise or summon the dead and ghosts."},
   //47
  {name : "Dark<br>Infusion", skill : 3, skillReq : 90,
   xPos : 60, yPos : 15, preReqs : [46], nextPerk: -1,
   description : "By infusing your undead creations with dark energies, you are able to make them stronger and more resilient. You can even prevent your creations from decaying to dust."},
   //48
  {name : "Summoner's<br>Insight", skill : 3, skillReq : 25,
   xPos : 47, yPos : 53, preReqs : [36], nextPerk: -1,
   description : "You've learned how to empower Conjuration spells.<br>Thus, you can now make them last longer in this realm."},
   //49
  {name : "Cognitive<br>Flexibility", skill : 3, skillReq : 50,
   xPos : 44, yPos : 33, preReqs : [48], nextPerk: 50,
   description : "You have practiced the mental ability of maintaining two summons at the same time. This power extends to controlling any type of conjured or conceived entity, even outside the school of Conjuration."},
   //50 
  {name : "Cognitive<br>Flexibility", skill : 3, skillReq : 100,
   xPos : 44, yPos : 33, preReqs : [48,49], nextPerk: -1,
   description : "You have mastered the art of Cognitive Flexibility, a trait of only the most accomplished Summoners throughout history. You can now control three summons, of any type, simultaneously."},
   //51
  {name : "Binding Contract", skill : 3, skillReq : 0,
   xPos : 43, yPos : 70, preReqs : [36], nextPerk: -1,
   description : "You have practiced the mental ability of maintaining two summons at the same time. This power extends to controlling any type of conjured or conceived entity, even outside the school of Conjuration."},
   //52
  {name : "Stabilized Binding", skill : 3, skillReq : 25,
   xPos : 30, yPos : 65, preReqs : [36], nextPerk: -1,
   description : "Having studied the barriers that divide the planes of existence, you can make your summoned daedra and spirits last longer in this realm."},
  //53
  {name : "Spiritual<br>Binding", skill : 3, skillReq : 35,
   xPos : 35, yPos : 48, preReqs : [52], nextPerk: -1,
   description : "Your knowledge of Oblivion's spiritual aspects increases the strength of all your summoned spirits."},
   //54
  {name : "Extended<br>Binding", skill : 3, skillReq : 50,
   xPos : 29, yPos : 35, preReqs : [52], nextPerk: -1,
   description : "You've perfected your spells' formulae to summon daedra and spirits, and are now able to cast them more easily and further away."},
   //55
  {name : "Elemental Binding", skill : 3, skillReq : 75,
   xPos : 32, yPos : 8, preReqs : [54], nextPerk: -1,
   description : "Your knowledge of Oblivion's elemental aspects increases the strength of all your summoned Atronachs while the highest level rituals will conjure Thralls that are immune to Banishment and Control spells."},
  //56
  {name : "Novice Destruction", skill : 4, skillReq : 0,
   xPos : 50, yPos : 90, preReqs : [], nextPerk: -1,
   description : "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort <br> while your newfound knowledge also allows you to augment all Destruction spells."},
  //57
  {name : "Empowered<br>Elements", skill : 4, skillReq : 20,
   xPos : 20, yPos : 65, preReqs : [56], nextPerk: -1,
   description : "You learned how to empower Destruction spells. Thus, you're able to overcharge their effects."},
   //58
  {name : "Impact", skill : 4, skillReq : 50,
   xPos : 21, yPos : 20, preReqs : [57], nextPerk: -1,
   description : "By intensifying the force of most of your overcharged Destruction spells, you're now capable of staggering your foes."},
   //59
  {name : "Esoteric Magic", skill : 4, skillReq : 40,
   xPos : 33, yPos : 55, preReqs : [56], nextPerk: 60,
   description : "You have studied the stranger aspects of the Destruction school. <br> Therefore, you no longer suffer a penalty when casting non-elemental spells."},
   //60
  {name : "Esoteric Magic", skill : 4, skillReq : 80,
   xPos : 33, yPos : 55, preReqs : [56,59], nextPerk: -1,
   description : "You have studied the stranger aspects of the Destruction school. <br> Therefore, you no longer suffer a penalty when casting non-elemental spells."},
   //61
  {name : "Clandestine<br>Magic", skill : 4, skillReq : 60,
   xPos : 35, yPos : 25, preReqs : [59], nextPerk: -1,
   description : "You have studied the reviled aspects of the Destruction school. <br> Your hemomancy spells cost less health, abyssal spells do more damage, and arcane spells cost less."},
   //62
  {name : "Forbidden<br>Knowledge", skill : 4, skillReq : 95,
   xPos : 32, yPos : 5, preReqs : [61], nextPerk: -1,
   description : "You've acquired forgotten secrets of esoteric magic. <br> Your esoteric spells do 20% more damage."},
   //63
  {name : "Apprentice<br>Destruction", skill : 4, skillReq : 25,
   xPos : 47, yPos : 66, preReqs : [56], nextPerk: -1,
   description : "By pursuing your apprenticeship in Destruction, you've gained knowledge of Apprentice level spells<br>which you now augment while casting them with less effort."},
  //64
  {name : "Rune Mastery", skill : 4, skillReq : 50,
   xPos : 40, yPos : 17, preReqs : [63], nextPerk: -1,
   description : "By studying the arcane symbols of all three elements, you have developed more powerful rune spells and have unlocked the secret of maintaining three active runes instead of just one."},
   //65
  {name : "Adept<br>Destruction", skill : 4, skillReq : 50,
   xPos : 47, yPos : 40, preReqs : [63], nextPerk: -1,
   description : "By advancing further into the school of Destruction, you've gained some Adept level spells<br>and learned how to augment and cast spells of this rank more easily."},
   //66
  {name : "Expert<br>Destruction", skill : 4, skillReq : 75,
   xPos : 48, yPos : 25, preReqs : [65], nextPerk: -1,
   description : "You've unlocked almost every secret in the school of Destruction and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."},
   //67
  {name : "Master<br>Destruction", skill : 4, skillReq : 100,
   xPos : 46, yPos : 10, preReqs : [66], nextPerk: -1,
   description : "Your knowledge of Destruction has become all-encompassing. You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."},
   //68
  {name : "Elemental Expertise", skill : 4, skillReq : 25,
   xPos : 70, yPos : 55, preReqs : [56], nextPerk: 69,
   description : "You now are able to intensify the heat of your fire spells, energize your lightning spells, sharpen your wind spells, and lower the temperature of your ice spells. Thus, <br> they now deal increased damage. In addition, you will no longer suffer a damage penalty on all elemental spells."},
   //69
  {name : "Elemental Expertise", skill : 4, skillReq : 60,
   xPos : 70, yPos : 55, preReqs : [56,68], nextPerk: -1,
   description : "You now are able to intensify the heat of your fire spells, energize your lightning spells, sharpen your wind spells, and lower the temperature of your ice spells. Thus, <br> they now deal increased damage. In addition, you will no longer suffer a damage penalty on all elemental spells."},
   //70
  {name : "Electrostatic<br>Discharge", skill : 4, skillReq : 75,
   xPos : 58, yPos : 35, preReqs : [68], nextPerk: -1,
   description : "Your lightning strikes pass through body and mind with thundering intensity.<br>Thus, they now stagger targets without enough insulation to protect themselves."},
   //71
  {name : "Lightning<br>Mastery", skill : 4, skillReq : 100,
   xPos : 59, yPos : 12, preReqs : [70], nextPerk: -1,
   description : "Your aptitude with lightning grants you a natural resistance to it, while also increasing all your shock spells' power even further."},
   //72
  {name : "Deep<br>Freeze", skill : 4, skillReq : 75,
   xPos : 65, yPos : 35, preReqs : [68], nextPerk: -1,
   description : "Your higher level ice spells are colder than Skyrim's most ferocious blizzards,<br>causing them to freeze foes with low resistance to frost."},
   //73
  {name : "Frost<br>Mastery", skill : 4, skillReq : 100,
   xPos : 66, yPos : 12, preReqs : [72], nextPerk: -1,
   description : "Your understanding of all that is cold grants you a natural resistance to it, while increasing all your frost spells' power even further."},
   //74
  {name : "Cremation", skill : 4, skillReq : 75,
   xPos : 74, yPos : 36, preReqs : [68], nextPerk: -1,
   description : "Your higher level fire spells burn so ferociously that foes are set ablaze,<br>often causing them to run away in gruesome agony as their very skin becomes molten."},
   //75
  {name : "Fire<br>Mastery", skill : 4, skillReq : 100,
   xPos : 75, yPos : 13, preReqs : [74], nextPerk: -1,
   description : "Your fascination for fire now grants you a natural resistance to it, while also increasing all your fire spells' power even further."},
   //76
  {name : "Breakthrough<br>Winds", skill : 4, skillReq : 75,
   xPos : 82, yPos : 37, preReqs : [68], nextPerk: -1,
   description : "Your winds permeate the very magicka of the Aurbis.<br>Thus, targets are more susceptible to all sources of magic for a short duration after being struck."},
   //77
  {name : "Wind<br>Mastery", skill : 4, skillReq : 100,
   xPos : 81, yPos : 13, preReqs : [76], nextPerk: -1,
   description : "Your grasp of wind grants you a natural ability to move with ease, <br> while increasing all your wind spells' power even further."},
   //78
  {name : "Enchanter's Insight", skill : 5, skillReq : 0,
   xPos : 50, yPos : 90, preReqs : [], nextPerk: 79,
   description : "You've acquired fundamental insights into how matter and magic intertwine. Thus, you can now infuse<br> items with arcane energy at an enchanter and use soul gems to recharge enchanted items of all kinds. You can craft novice-tier scrolls."},
   //79
  {name : "Enchanter's Insight", skill : 5, skillReq : 20,
   xPos : 50, yPos : 90, preReqs : [78], nextPerk: -1,
   description : "Your advanced knowledge of arcane energy allows you to improve all your enchantments even more."},
   //80
  {name : "Soul Gem Mastery", skill : 5, skillReq : 25,
   xPos : 65, yPos : 70, preReqs : [78], nextPerk: -1,
   description : "You've learned how to draw more energy from soul gems (especially smaller ones) and are now able to <br> craft them at a smelter by transmuting and melting certain minerals. Also allows the reforging of soul gem fragments into soul gems."},
   //81
  {name : "Arcane Experimentation", skill : 5, skillReq : 50,
   xPos : 66, yPos : 45, preReqs : [80], nextPerk: -1,
   description : "Your studies have enabled you to research unique enchantments of your own<br>and to craft better staves at the forge. You can craft adept-tier scrolls."},
   //82
  {name : "Artificer's Insight", skill : 5, skillReq : 75,
   xPos : 65, yPos : 25, preReqs : [81], nextPerk: -1,
   description : "You could fill grimoires with your newfound knowledge that allows you to create<br>even better enchantments and staves. You can craft expert-tier scrolls."},
   //83
  {name : "Elemental Lore", skill : 5, skillReq : 25,
   xPos : 35, yPos : 60, preReqs : [78], nextPerk: -1,
   description : "You've learned how to tame the elements most efficently. Thus, all elemental enchantments are stronger."},
   //84
  {name : "Corpus Lore", skill : 5, skillReq : 50,
   xPos : 35, yPos : 43, preReqs : [83], nextPerk: -1,
   description : "You've become skilled in using enchantments to strenghten mind and body. Thus, all such enchantments are stronger."},
   //85
  {name : "Skill Lore", skill : 5, skillReq : 75,
   xPos : 38, yPos : 23, preReqs : [84], nextPerk: -1,
   description : "You've become a master of infusing enchantments that transfer knowledge and skill to the user, making all such ones stronger."},
   //86
  {name : "Enchantment Mastery", skill : 5, skillReq : 100,
   xPos : 57, yPos : 10, preReqs : [82,85], nextPerk: -1,
   description : "You've found a way to bind even more energy into inanimate matter. Thus, you can bend the Law of Firsts to an extent and even create Daedric staves, while your enchantments are even stronger still."},
   //87
  {name : "Weapon Infusion", skill : 5, skillReq : 10,
   xPos : 48, yPos : 72, preReqs : [78], nextPerk: -1,
   description : "You've gained the ability to infuse magicka directly into your weapon."},
   //88
  {name : "Efficient Infusions", skill : 5, skillReq : 30,
   xPos : 49, yPos : 50, preReqs : [87], nextPerk: -1,
   description : "Your weapon infusions do more damage."},
   //89
  {name : "Overwhelming Magicka", skill : 5, skillReq : 60,
   xPos : 50, yPos : 35, preReqs : [88], nextPerk: -1,
   description : "Your weapon infusions invisibly explode, doing area damage and do even more damage."},
   //90
  {name : "Temporal Distortion", skill : 5, skillReq : 90,
   xPos : 54, yPos : 22, preReqs : [89], nextPerk: -1,
   description : "Your weapon infusions are able to pierce magic resistances and do even more damage."},
   //91
  {name : "Agility", skill : 6, skillReq : 0,
   xPos : 50, yPos : 90, preReqs : [], nextPerk: -1,
   description : "After some training you are now much more confident in your evasive movements. Your light armor and clothes will now hinder your movements less and you take less damage from falling. You burn slightly less stamina from actions when not wearing a heavy cuirass. Unique material bonuses are applied when wearing light armor."},
   //92
  {name : "Dodge", skill : 6, skillReq : 20,
   xPos : 62, yPos : 70, preReqs : [91], nextPerk: -1,
   description : "Your trained reflexes allow you to dodge incoming blows when not wearing a heavy cuirass.<br>By sprinting a step or two away, you can attempt to dodge hostile attacks."},
   //93
  {name : "Unarmored", skill : 6, skillReq : 30,
   xPos : 70, yPos : 50, preReqs : [92], nextPerk: -1,
   description : "Your trained reflexes allow you to dodge incoming blows when not wearing a heavy cuirass.<br>By sprinting a step or two away, you can attempt to dodge hostile attacks."},
   //94
  {name : "Agile Spellcasting", skill : 6, skillReq : 30,
   xPos : 35, yPos : 60, preReqs : [91], nextPerk: -1,
   description : "You learned how to avoid the limitations light armors bestow upon somatic spell components and allow your movement to bolster your spells. <br> Thus, you can cast spells in them unhindered."},
   //95
  {name : "Finesse", skill : 6, skillReq : 25,
   xPos : 50, yPos : 61, preReqs : [91], nextPerk: -1,
   description : "You inflict increased damage with all your power attacks while not wearing a<br>heavy cuirass, for you're able to hit more precisely. Dodging decreases incoming ranged damage, for your vitals are avoided."},
   //96
  {name : "Dexterity", skill : 6, skillReq : 50,
   xPos : 35, yPos : 40, preReqs : [95], nextPerk: -1,
   description : "You are able to balance your weapon and free hands better.<br> Thus, you can decrease the effort to execute power attacks and draw a bow when not wearing a heavy cuirass and can cast spells with greater speed when fully unburdened by armor."},
   //97
  {name : "Wind Walker", skill : 6, skillReq : 75,
   xPos : 38, yPos : 20, preReqs : [96], nextPerk: -1,
   description : "Your light armor and clothes have become your second skin.<br>[Up to +10% movement speed and +30% stamina regeneration when wearing no heavy armor: head, chest, hands, feet, -25% armor weight penalty]"},
   //98
  {name : "Vexing Flanker", skill : 6, skillReq : 50,
   xPos : 68, yPos : 41, preReqs : [95], nextPerk: -1,
   description : "You deal more damage with melee weapons while you are running and/or behind an enemy, for you have learned to flank your enemies with ease when not wearing a heavy cuirass. You can also shoot ranged weapons faster when running.<br>Dodging allows you to pinpoint vital spots and penetrate armor weakpoints with your attacks. Furthermore, your reflexes will never betray you when an enemy attempts a lethal strike."},
   //99
  {name : "Combat Reflexes", skill : 6, skillReq : 75,
   xPos : 58, yPos : 19, preReqs : [95,98], nextPerk: -1,
   description : "You've gained the ability to act faster in combat, though doing so will quickly exhaust you. Dodging costs less stamina."},
   //100
  {name : "Meteoric Reflexes", skill : 6, skillReq : 100,
   xPos : 47, yPos : 10, preReqs : [97,99], nextPerk: -1,
   description : "You require no extra stamina for power attacks when wearing heavy armor and are less hindered by your armor. Also, your gauntlets improve your unarmed damage."},
   //101
  {name : "Conditioning", skill : 7, skillReq : 0,
   xPos : 50, yPos : 90, preReqs : [], nextPerk: -1,
   description : "You've accustomed yourself to using heavy armor.<br>[No stamina drain for wearing heavy armor, unique bonus when wearing high-quality materials, -35% armor weight penalty]"},
   //102
  {name : "Combat Training", skill : 7, skillReq : 20,
   xPos : 70, yPos : 68, preReqs : [101], nextPerk: -1,
   description : "You are less hindered by your armor so you can attack with ease and sprint without problems. <br>[No power attack stamina cost penalty, increased unarmed damage with heavy gauntlets, -10% armor weight penalty, and no sprinting stamina cost penalty.]"},
   //103
  {name : "Fortitude", skill : 7, skillReq : 55,
   xPos : 80, yPos : 52, preReqs : [102], nextPerk: -1,
   description : "Your training made you stronger and you are now less burdened by the rigidity of your armor.<br> You also receive some additional stamina and carry weight and are less burdened by heavy armor."},
   //104
  {name : "Power of the Combatant", skill : 7, skillReq : 80,
   xPos : 78, yPos : 20, preReqs : [103], nextPerk: -1,
   description : "Your use of heavy armor has emboldened you, allowing you to regenerate stamina more quickly while wearing heavy armor. <br> Furthermore, you learned some new tricks to overcome the mobility limitations of your armor."},
   //105
  {name : "Juggernaut", skill : 7, skillReq : 100,
   xPos : 75, yPos : 5, preReqs : [104], nextPerk: -1,
   description : "You've reached perfection in the skill of wearing heavy armor and are now significantly mroe maneuverable in it. [15% less armor weight, 10% more armor rating, 90% less stagger when wearing all heavy armor: head, chest, hands and feet]"},
   //106
  {name : "Combat Casting", skill : 7, skillReq : 15,
   xPos : 30, yPos : 68, preReqs : [101], nextPerk: -1,
   description : "You're able to keep concentrated enough in heavy armor to <br> cast Novice and Apprentice level spells without severe penalties."},
   //107
  {name : "Combat Trance", skill : 7, skillReq : 40,
   xPos : 20, yPos : 52, preReqs : [106], nextPerk: -1,
   description : "Your heavy armor distracts you even less, allowing you to cast Adept level spells <br> with almost no penalty."},
   //108
  {name : "Combat Meditation", skill : 7, skillReq : 65,
   xPos : 22, yPos : 20, preReqs : [107], nextPerk: -1,
   description : "You're accustomed to your heavy armor so much<br> that you can now cast even Expert level spells with relative ease."},
   //109
  {name : "Battle Mage", skill : 7, skillReq : 95,
   xPos : 25, yPos : 5, preReqs : [108], nextPerk: -1,
   description : "You have mastered spellcasting while wearing heavy armor and now can even cast Master level spells with ease. <br> Bolstered by wearing your full heavy armor, you can concentrate even more and cast all spells easier."},
   //110
  {name : "Relentless Onslaught", skill : 7, skillReq : 10,
   xPos : 50, yPos : 68, preReqs : [101], nextPerk: -1,
   description : "After extensive training, you can strike with confidence even while being hit.<br>[Take 50% less melee damage when bullrushing, -10% armor weight penalty, and increasing stamina restored when struck when wearing 1/2/3/4 pieces of heavy armor]"},
   //111
  {name : "Toxin<br>Nullification", skill : 7, skillReq : 25,
   xPos : 50, yPos : 52, preReqs : [110], nextPerk: -1,
   description : "For each piece of heavy armor worn, you can further withstand poison by 5%, and by an extra 10% if a full suit is donned."},
   //112
  {name : "Elemental<br>Nullification", skill : 7, skillReq : 50,
   xPos : 50, yPos : 35, preReqs : [111], nextPerk: -1,
   description : "For each piece of heavy armor worn, you can further withstand elemental attacks by 2.5%, and by an extra 5% if a full suit is donned."},
   //113
  {name : "Magic<br>Nullification", skill : 7, skillReq : 75,
   xPos : 50, yPos : 20, preReqs : [112], nextPerk: -1,
   description : "For each piece of heavy armor worn, you can further withstand magical attacks by 2.5%, and by an extra 5% if a full suit is donned."},
   //114
  {name : "Novice<br>Illusion", skill : 8, skillReq : 0,
   xPos : 50, yPos : 90, preReqs : [], nextPerk: -1,
   description : "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort <br> while your newfound knowledge also allows you to augment the strength and duration of all Illusion spells."},
   //115
  {name : "Apprentice<br>Illusion", skill : 8, skillReq : 20,
   xPos : 50, yPos : 65, preReqs : [114], nextPerk: -1,
   description : "By pursuing your apprenticeship in Illusion, you've gained knowledge of Apprentice level spells<br>which you now augment while casting them with less effort."},
   //116
  {name : "Empowered<br>Manipulations", skill : 8, skillReq : 20,
   xPos : 75, yPos : 55, preReqs : [114], nextPerk: -1,
   description : "Some Illusion spells can be empowered, which in general increases their magnitude and/or duration by 125% while increasing the casting cost by 100%."},
   //117
  {name : "Delusive<br>Phantasms", skill : 8, skillReq : 15,
   xPos : 90, yPos : 75, preReqs : [114], nextPerk: -1,
   description : "You have studied the most common spell formulae that affect basic emotions like fear, calmness and courage. Thus, you can empower related spells and increase their overall effectiveness."},
   //118
  {name : "Acoustic<br>Manipulation", skill : 8, skillReq : 25,
   xPos : 30, yPos : 65, preReqs : [114], nextPerk: -1,
   description : "After studying spells like Muffle, Arcane Resonance or Dampening Rune you are now familiar with manipulating sounds. <br> Thus, you can empower these spells and require less concentration to maintain them."},
   //119
  {name : "Visual<br>Manipulation", skill : 8, skillReq : 30,
   xPos : 37, yPos : 38, preReqs : [114], nextPerk: -1,
   description : "You've experimented with spells like Dark Vision and Invisibility to manipulate your surroundings. After a lot of training<br>you can now empower such spells and concentrating on them requires less effort."},
   //120
  {name : "Otherwordly<br>Phantasms", skill : 8, skillReq : 45,
   xPos : 88, yPos : 45, preReqs : [117], nextPerk: -1,
   description : "You have extended your knowledge of affecting emotions, being able to turn your foes into <br> berserking maniacs or cause them to fall asleep with ease. You also learned how to empower related spells."},
   //121
  {name : "Adept<br>Illusion", skill : 8, skillReq : 40,
   xPos : 50, yPos : 40, preReqs : [115], nextPerk: -1,
   description : "By advancing further into the school of Illusion, you've gained some Adept level spells<br>and learned how to augment and cast spells of this rank more easily."},
   //122
  {name : "Pain and<br>Agony", skill : 8, skillReq : 50,
   xPos : 65, yPos : 30, preReqs : [121], nextPerk: -1,
   description : "Having studied spells like Phantasmal Pain and Waking Nightmare, you can now invoke terrible agony in your foes with ease. In addition, you also learned how to empower related spells."},
   //123
  {name : "Environmental<br>Manipulation", skill : 8, skillReq : 65,
   xPos : 25, yPos : 29, preReqs : [118,119], nextPerk: -1,
   description : "After long training with spells like Vanish, Veil of Silence, and Invisibility and Muffling Spheres, you gained a deep insight<br>into the connections between light and sound. You can now empower these spells and maintain them with less effort."},
   //124
  {name : "Obliterate<br>the Mind", skill : 8, skillReq : 70,
   xPos : 77, yPos : 15, preReqs : [120,122], nextPerk: -1,
   description : "You have studied spells like Phantasmal Killer and Blackout. Thus, you can now empower them and shatter your foes' minds with ease."},
   //125
  {name : "Expert<br>Illusion", skill : 8, skillReq : 60,
   xPos : 51, yPos : 25, preReqs : [121], nextPerk: -1,
   description : "You've unlocked almost every secret in the school of Illusion and you've acquired some Expert level spells.<br>You can now cast spells of this level easier and augment them to an almost otherworldly extent."},
   //126
  {name : "Master<br>Illusion", skill : 8, skillReq : 80,
   xPos : 50, yPos : 12, preReqs : [125], nextPerk: -1,
   description : "Your knowledge of Illusion has become all-encompassing. You taught yourself a Master level spell <br> and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."},
   //127
  {name : "Domination", skill : 8, skillReq : 90,
   xPos : 75, yPos : 3, preReqs : [124,126], nextPerk: -1,
   description : "Having studied spells like Phantasmal Miasma, Fog of Shadows, and Mind Maelstrom, there is no thinking being that can escape your influence. These spells can now be empowered and sustained more easily."},
   //128
  {name : "Phantasmogoria", skill : 8, skillReq : 90,
   xPos : 35, yPos : 5, preReqs : [123,126], nextPerk: -1,
   description : "You've mastered the most powerful forms of deceptive magic. Therefore, spells like Veil of Shadows<br>and Mistress of the Dark can now be empowered and cast with highly decreased effort."},
   //129
  {name : "Cheap Tricks", skill : 9, skillReq : 0,
   xPos : 50, yPos : 90, preReqs : [], nextPerk: -1,
   description : "You have learned the basics of the art of picking locks and carrying found goods.<br>[+3 lockpicking expertise, +20 carry weight, forge lockpicks with Craftsmanship]"},
   //130
  {name : "Advanced<br>Lockpicking", skill : 9, skillReq : 30,
   xPos : 55, yPos : 65, preReqs : [129], nextPerk: -1,
   description : "You have extended your repertoire of lockpicking tricks and are able to carry more loot.<br>[+2 Lockpicking Expertise, +15 carry weight]"},
   //131
  {name : "Treasure<br>Hunter", skill : 9, skillReq : 50,
   xPos : 25, yPos : 43, preReqs : [130], nextPerk: -1,
   description : "You are able to locate secret spaces in containers when you search them <br> and can thereby find more loot. You're also able to more effectively carry your loot. [+30 Carry Weight]"},
   //132
  {name : "Sophisticated<br>lockpicking", skill : 9, skillReq : 60,
   xPos : 58, yPos : 45, preReqs : [130], nextPerk: -1,
   description : "You have memorized the inner mechanics of sophisticated locks and security systems and are able to haul more loot out.<br>[+2 Lockpicking Expertise, +10 Carry Weight]"},
   //133
  {name : "Masterly<br>Lockpicking", skill : 9, skillReq : 90,
   xPos : 62, yPos : 20, preReqs : [132], nextPerk: -1,
   description : "You learned everything there is to know about the art of lockpicking and hauling loot.<br>[+2 Lockpicking Expertise, +20 Carry Weight]"},
   //134
  {name : "Martial Arts", skill : 11, skillReq : 0,
   xPos : 125/4, yPos : 297/4, preReqs : [], nextPerk: -1,
   description : "You are a passionate fist fighter, and train regularly to toughen your muscles to their very limits. Thus you are able to deliver much harder punches to your enemies."},
   //135
  {name : "Weapon Mastery", skill : 11, skillReq : 0,
   xPos : 191/4, yPos : 351/4, preReqs : [], nextPerk: 136,
   description : "Your improved fighting techniques allow you to swing one-handed weapons with less effort and deal more damage. [damage x 1.2, -50% weapon weight penalties]"},
   //136
  {name : "Weapon Mastery", skill : 11, skillReq : 0,
   xPos : 191/4, yPos : 351/4, preReqs : [135], nextPerk: -1,
   description : "Your improved fighting techniques increase your damage dealt with one-handed weapons greatly. [damage x 1.4, -50% weapon weight penalties]"},
   //137
  {name : "Penetrating Strikes", skill : 11, skillReq : 20,
   xPos : 195/4, yPos : 274/4, preReqs : [135], nextPerk: -1,
   description : "Your power attacks with one-handed weapons are now devastating enough to penetrate enemy armor and less exhausting. [-50% power attack stamina cost, +5 armor penetration]"},
   //138
  {name : "Dagger<br>Focus", skill : 11, skillReq : 25,
   xPos : 85/4, yPos : 240/4, preReqs : [137], nextPerk: 139,
   description : "You learned some dirty tricks for your dagger and are more likely to find weak spots in enemy armor. [irresistable sneak attack damage x 1.25, +10 armor penetration]"},
   //139
  {name : "Dagger<br>Focus", skill : 11, skillReq : 50,
   xPos : 85/4, yPos : 240/4, preReqs : [138], nextPerk: 140,
   description : "A dagger in your hand turns into a deadly weapon that will find a weakness in every armor. [irresistable sneak attack damage x 1.55, +20 armor penetration]"},
   //140
  {name : "Dagger<br>Focus", skill : 11, skillReq : 75,
   xPos : 85/4, yPos : 240/4, preReqs : [139], nextPerk: -1,
   description : "You have mastered the deadly art of the dagger and enemy armor stands no chance against your precision. [irresistable sneak attack damage x 2, +30 armor penetration]"},
   //141
  {name : "War Axe<br>Focus", skill : 11, skillReq : 25,
   xPos : 140/4, yPos : 200/4, preReqs : [137], nextPerk: 142,
   description : "You've become familiar with war axes, thereby increasing their damage and armor penetration. [damage x 1.05, +10 armor penetration]"},
   //142
  {name : "War Axe<br>Focus", skill : 11, skillReq : 50,
   xPos : 140/4, yPos : 200/4, preReqs : [141], nextPerk: 143,
   description : "You've become an advanced axe fighter, further increasing their damage and armor penetration. [damage x 1.15, +20 armor penetration]"},
   //143
  {name : "War Axe<br>Focus", skill : 11, skillReq : 75,
   xPos : 140/4, yPos : 200/4, preReqs : [142], nextPerk: -1,
   description : "Having mastered war axe combat, they start to feel like an almost natural extension of your arm. [damage x 1.3, +30 armor penetration]"},
   //144
  {name : "Mace<br>Focus", skill : 11, skillReq : 25,
   xPos : 260/4, yPos : 200/4, preReqs : [137], nextPerk: 145,
   description : "You've become familiar with war axes, thereby increasing their damage and armor penetration. [damage x 1.05, +10 armor penetration]"},
   //145
  {name : "Mace<br>Focus", skill : 11, skillReq : 50,
   xPos : 260/4, yPos : 200/4, preReqs : [144], nextPerk: 146,
   description : "You've become an advanced mace fighter and know how to find weak spots in enemy armor. [power attack damage x 1.1, +30 armor penetration]"},
   //146
  {name : "Mace<br>Focus", skill : 11, skillReq : 75,
   xPos : 260/4, yPos : 200/4, preReqs : [145], nextPerk: -1,
   description : "You've become a masterly mace fighter, rendering armor almost useless. [power attack damage x 1.15, +45 armor penetration]"},
   //147
  {name : "Sword<br>Focus", skill : 11, skillReq : 25,
   xPos : 285/4, yPos : 246/4, preReqs : [137], nextPerk: 148,
   description : "You've learned the basics of sword combat, allowing you to increase your attack rate with them slightly. [+8% attack speed, +7 armor penetration]"},
   //148
  {name : "Sword<br>Focus", skill : 11, skillReq : 50,
   xPos : 285/4, yPos : 246/4, preReqs : [147], nextPerk: 149,
   description : "You've acquired the advanced techniques of sword combat, further increasing your attack rate with them. [+16% attack speed, +14 armor penetration]"},
   //149
  {name : "Sword<br>Focus", skill : 11, skillReq : 75,
   xPos : 285/4, yPos : 246/4, preReqs : [148], nextPerk: -1,
   description : "You've become a master of sword combat, allowing you to swing swords so fast that it's almost undetectable to the mortal eye. [+24% attack speed, +21 armor penetration]"},
   //150
  {name : "Powerful Strike", skill : 11, skillReq : 50,
   xPos : 150/4, yPos : 150/4, preReqs : [137], nextPerk: -1,
   description : "You know how to put the maximum force into your power attacks which are now even more devastating. [power attack damage x 1.2]"},
   //151
  {name : "Powerful Charge", skill : 11, skillReq : 50,
   xPos : 250/4, yPos : 150/4, preReqs : [137], nextPerk: -1,
   description : "You have learned to perform a leaping power attack while sprinting, inflicting terrible wounds. [unlocks sprinting power attack, -25% weapon weight penalties]"},
   //152
  {name : "Stunning Charge", skill : 11, skillReq : 100,
   xPos : 200/4, yPos : 25/4, preReqs : [150,151], nextPerk: -1,
   description : "Putting your whole weight behind your charge, your forward power attacks now have enough momentum to knock down opponent. [forward power attacks can knock down]"},
   //153
  {name : "Flurry", skill : 11, skillReq : 25,
   xPos : 350/4, yPos : 300/4, preReqs : [135], nextPerk: 154,
   description : "When fighting with one-handed weapons, you are able to attack faster than normal. [+10% attack speed]"},
   //154
  {name : "Flurry", skill : 11, skillReq : 50,
   xPos : 350/4, yPos : 300/4, preReqs : [153], nextPerk: -1,
   description : "When fighting with one-handed weapons, you're able to attack even faster. [+25% attack speed]"},
   //155
  {name : "Storm of Steel", skill : 11, skillReq : 75,
   xPos : 320/4, yPos : 100/4, preReqs : [153], nextPerk: -1,
   description : "You've become very skilled in wielding two weapons at once. [dual-wield power attack damage x 1.25]"},
   //156
  {name : "Nimble Fingers", skill : 12, skillReq : 0,
   xPos : 112/4, yPos : 337/4, preReqs : [], nextPerk: 157,
   description : "You've spent some time improving your sleight of hand, which gives you substantial chances when pickpocketing."},
   //157
  {name : "Nimble Fingers", skill : 12, skillReq : 0,
   xPos : 112/4, yPos : 337/4, preReqs : [156], nextPerk: -1,
   description : "Your fingers have become very nimble, and besides other advantages, they allow you to pickpocket even better and to apply poisons on your victims. Why fight if a vial of deadly venom can also do the trick?"},
   //158
  {name : "Cutpurse", skill : 12, skillReq : 25,
   xPos : 161/4, yPos : 242/4, preReqs : [156], nextPerk: -1,
   description : "People shouldn't burden themselves with purses and keys. Luckily, you now can free them of these burdens more easily."},
   //159
  {name : "Mighty Greed", skill : 12, skillReq : 25,
   xPos : 257/4, yPos : 275/4, preReqs : [158], nextPerk: -1,
   description : "You are either very strong or very greedy... You now can carry more items without becoming overencumbered."},
   //160
  {name : "Nightly Thief", skill : 12, skillReq : 50,
   xPos : 202/4, yPos : 146/4, preReqs : [158], nextPerk: -1,
   description : "You have learned how to avoid waking up targets during your \"nightly visits\", so you can free them from their worldly burdens with ease."},
   //161
  {name : "Misdirection", skill : 12, skillReq : 75,
   xPos : 221/4, yPos : 60/4, preReqs : [160], nextPerk: -1,
   description : "Why should someone own a nice weapon or piece of jewelry when it could be yours? Now you can sometimes adjust this inequity."},
   //162
  {name : "Perfected Art", skill : 12, skillReq : 100,
   xPos : 254/4, yPos : 20/4, preReqs : [161], nextPerk: -1,
   description : "After having learned everything there is to know about thievery, your legendary skill means you almost never get caught."},
   //163
  {name : "Painful Regrets", skill : 13, skillReq : 0,
   xPos : 314/4, yPos : 360/4, preReqs : [], nextPerk: -1,
   description : "You've honestly reflected your sins, and you truly regret what pain you have inflicted upon others. Therefore, the gods show at least a bit of mercy, but the torment of your deeds will haunt you for the rest of your days..."},
   //164
  {name : "Novice Restoration", skill : 13, skillReq : 0,
   xPos : 221/4, yPos : 345/4, preReqs : [], nextPerk: -1,
   description : "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort while your newfound knowledge also allows you to augment all Restoration spells."},
   //165
  {name : "Apprentice<br>Restoration", skill : 13, skillReq : 25,
   xPos : 236/4, yPos : 268/4, preReqs : [164], nextPerk: -1,
   description : "By pursuing your apprenticeship in Restoration, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."},
   //166
  {name : "Adept<br>Restoration", skill : 13, skillReq : 50,
   xPos : 213/4, yPos : 190/4, preReqs : [165], nextPerk: -1,
   description : "By advancing further into the school of Restoration, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."},
   //167
  {name : "Expert Restoration", skill : 13, skillReq : 75,
   xPos : 219/4, yPos : 88/4, preReqs : [166], nextPerk: -1,
   description : "You've unlocked almost every secret in the school of Restoration and you've acquired some Expert level spells. You can now cast spells of this level easier and augment them to an almost otherworldly extent."},
   //168
  {name : "Master Restoration", skill : 13, skillReq : 100,
   xPos : 178/4, yPos : 30/4, preReqs : [167], nextPerk: -1,
   description : "Your knowledge of Restoration has become all-encompassing.You taught yourself a Master level spell and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."},
   //169
  {name : "Benefactor's<br>Insight", skill : 13, skillReq : 25,
   xPos : 306/4, yPos : 295/4, preReqs : [165], nextPerk: -1,
   description : "You learned how to empower Restoration spells. Therefore, you are now able to overcharge their effects."},
   //170
  {name : "Focused Mind", skill : 13, skillReq : 25,
   xPos : 336/4, yPos : 253/4, preReqs : [165], nextPerk: -1,
   description : "You've learned to focus your mind. Thus, you can keep your concentration even in stressful situations and regenerate your magicka faster."},
   //171
  {name : "Power of Life", skill : 13, skillReq : 50,
   xPos : 282/4, yPos : 160/4, preReqs : [170], nextPerk: -1,
   description : "Your studies of healing magic now grant you the power of making yourself almost invulnerable for a short duration once a day."},
   //172
  {name : "Essence of Life", skill : 13, skillReq : 75,
   xPos : 350/4, yPos : 201/4, preReqs : [171], nextPerk: -1,
   description : "Your understanding of healing and how magic and life are intertwined allows you to call upon your newfound power more often."},
   //173
  {name : "Improved Wards", skill : 13, skillReq : 75,
   xPos : 153/4, yPos : 169/4, preReqs : [164], nextPerk: -1,
   description : "Your arcane wards now absorb magicka from incoming spells and have slightly improved efficiency."},
   //174
  {name : "Improved Healing", skill : 13, skillReq : 50,
   xPos : 120/4, yPos : 264/4, preReqs : [164], nextPerk: -1,
   description : "You've gained more knowledge about restorative magics, allowing you to heal wounds more efficiently with your healing spells."},
   //175
  {name : "Respite", skill : 13, skillReq : 75,
   xPos : 35/4, yPos : 238/4, preReqs : [174], nextPerk: -1,
   description : "In addition to curing wounds, your healing spells now reinvigorate the body itself, restoring the affected subject's stamina."},
   //176
  {name : "Mysticism", skill : 13, skillReq : 75,
   xPos : 62/4, yPos : 161/4, preReqs : [174], nextPerk: -1,
   description : "You've learned the art of weaving mystical energies into your spells, making all of them more effective against the undead and Daedra."},
   //177
  {name : "Craftsmanship", skill : 14, skillReq : 0,
   xPos : 230/5, yPos : 310/3.5, preReqs : [], nextPerk: -1,
   description : "You've acquired the basics of craftsmanship and know how to properly use all kinds of tools. Thus, you are able to craft and improve a wide variety of common goods."},
   //178
  {name : "Advanced<br>Blacksmithing", skill : 14, skillReq : 50,
   xPos : 234/5, yPos : 203/3.5, preReqs : [177], nextPerk: -1,
   description : "You've gained quite some finesse, allowing you to craft plate armor and fine jewelry. You have also found a way to melt and crush certain gems into alchemically usable dust."},
   //179
  {name : "Arcane<br>Craftsmanship", skill : 14, skillReq : 50,
   xPos : 181/5, yPos : 160/3.5, preReqs : [178], nextPerk: -1,
   description : "After reading a tome about the ancient secrets of explosive dwemer bolts, you've learned the necessary techniques to craft bolts and arrows that will explode with elemental fury upon impact."},
   //180
  {name : "Legendary<br>Blacksmithing", skill : 14, skillReq : 100,
   xPos : 299/5, yPos : 160/3.5, preReqs : [178], nextPerk: -1,
   description : "You make steel sing songs on the anvil. Your hammer is no longer a mere tool, but a loom that weaves the fabric of myths. You can even improve the divine artifacts of Aedra and Daedra."},
   //181
  {name : "Advanced<br>Light Armors", skill : 14, skillReq : 25,
   xPos : 115/5, yPos : 220/3.5, preReqs : [177], nextPerk: -1,
   description : "You've been able to learn more advanced techniques, allowing you to craft and efficiently improve scale armor."},
   //182
  {name : "Elven Smithing", skill : 14, skillReq : 50,
   xPos : 48/5, yPos : 150/3.5, preReqs : [181], nextPerk: -1,
   description : "You've gained enough finesse to create and improve Elven armor and weapons by studying the Elven craftmanship carefully."},
   //183
  {name : "Glass Smithing", skill : 14, skillReq : 75,
   xPos : 70/5, yPos : 66/3.5, preReqs : [182], nextPerk: -1,
   description : "Crafting and improving Glass equipment is not for the unskilled, but having studied intensely, you aren't one of them any more."},
   //184
  {name : "Dwarven<br>Smithing", skill : 14, skillReq : 25,
   xPos : 347/5, yPos : 227/3.5, preReqs : [177], nextPerk: -1,
   description : "You've studied some long-lost schematics of dwarven equipment and acquired the secret knowledge of how to create and improve them efficiently."},
   //185
  {name : "Orcish<br>Smithing", skill : 14, skillReq : 50,
   xPos : 400/5, yPos : 172/3.5, preReqs : [184], nextPerk: -1,
   description : "Orcish equipment is hard to craft, but you've got what it takes. Especially the schematics! You can craft and improve it easily and most efficiently."},
   //186
  {name : "Ebony Smithing", skill : 14, skillReq : 75,
   xPos : 390/5, yPos : 68/3.5, preReqs : [185], nextPerk: -1,
   description : "Ebony weapons and armor - some even fail at heating the metal. But not you. Now that you've studied the related schematics, you can craft and improve ebony equipment with ease."},
   //187
  {name : "Daedric Smithing", skill : 14, skillReq : 100,
   xPos : 440/5, yPos : 35/3.5, preReqs : [186], nextPerk: -1,
   description : "The creation of daedric weapons and armor is a secret few mortals know - still, somehow you managed to acquire this knowledge..."},
   //188
  {name : "Draconic Blacksmithing", skill : 14, skillReq : 100,
   xPos : 251/5, yPos : 15/3.5, preReqs : [-186,-183], nextPerk: -1,
   description : "The scales and bones of dragons are probably the hardest material to work with, but you've mastered even this art since you studied that old compendium."},
   //189
  {name : "Stealth", skill : 15, skillReq : 0,
   xPos : 189/4, yPos : 349/4, preReqs : [], nextPerk: 190,
   description : "You know the basics of moving silently and are harder to detect when sneaking while not wearing any heavy armor."},
   //190
  {name : "Stealth", skill : 15, skillReq : 0,
   xPos : 189/4, yPos : 349/4, preReqs : [189], nextPerk: -1,
   description : "You are even harder to detect when sneaking while not wearing any heavy armor."},
   //191
  {name : "Deft Strike", skill : 15, skillReq : 25,
   xPos : 300/4, yPos : 252/4, preReqs : [189], nextPerk: -1,
   description : "You've learned to exploit weaknesses in your foes' armor when sneak attacking with daggers, bows or swords."},
   //192
  {name : "Anatomical Lore", skill : 15, skillReq : 50,
   xPos : 308/4, yPos : 174/4, preReqs : [191], nextPerk: -1,
   description : "Newfound knowledge of humanoid anatomy allows you to slay almost any human-like creature outright with sneak attacks."},
   //193
  {name : "Advanced Anatomical Lore", skill : 15, skillReq : 75,
   xPos : 260/4, yPos : 134/4, preReqs : [192], nextPerk: -1,
   description : "Your vast knowledge of anatomy allows you to perform devastating sneak attacks on almost any target."},
   //194
  {name : "Muffled Movement", skill : 15, skillReq : 25,
   xPos : 86/4, yPos : 245/4, preReqs : [189], nextPerk: -1,
   description : "Your newfound finesse allows you to move more quietly while not wearing any heavy armor."},
   //195
  {name : "Light Steps", skill : 15, skillReq : 50,
   xPos : 129/4, yPos : 147/4, preReqs : [194], nextPerk: -1,
   description : "By distributing your weight more consciously, you're able to avoid triggering pressure plates or similar mechanisms."},
   //196
  {name : "Acrobatics", skill : 15, skillReq : 75,
   xPos : 227/4, yPos : 79/4, preReqs : [195], nextPerk: -1,
   description : "Your improved balance allows you to silently roll forward, avoid getting knocked down except through magic and move even more quietly."},
   //197
  {name : "Shadowrunner", skill : 15, skillReq : 100,
   xPos : 324/4, yPos : 45/4, preReqs : [196], nextPerk: -1,
   description : "There's almost nothing you cannot evade. You are even harder to detect, more silent and all falling damage is decreased."},
   //198
  {name : "Haggling", skill : 16, skillReq : 0,
   xPos : 118/4, yPos : 335/4, preReqs : [], nextPerk: -1,
   description : "You've learned how to deal with Skyrim's greedy merchants and how to haggle for better prices."},
   //199
  {name : "Merchant", skill : 16, skillReq : 50,
   xPos : 98/4, yPos : 271/4, preReqs : [198], nextPerk: -1,
   description : "Your trading skills are good enough to sell almost anything to any merchant willing to trade with you, and you can invest some of your gold with a shopkeeper to increase his available gold permanently."},
   //200
  {name : "Fencing", skill : 16, skillReq : 100,
   xPos : 141/4, yPos : 246/4, preReqs : [199], nextPerk: -1,
   description : "You've become so persuasive that you could make almost anyone believe that your goods are of a legal origin."},
   //201
  {name : "Silver Tongue", skill : 16, skillReq : 25,
   xPos : 48/4, yPos : 333/4, preReqs : [198], nextPerk: -1,
   description : "You've spent quite some time improving your rhetorical skills and are now able to greatly influence any conversation and to fascinate the opposite gender. You also get better offers at respective vendors."},
   //202
  {name : "Leadership", skill : 16, skillReq : 75,
   xPos : 118/4, yPos : 174/4, preReqs : [201], nextPerk: -1,
   description : "Your rhetorical skill makes you the perfect leader. By inspiring all those who fight by your side, you encourage your followers to always push their abilities to their very limits."},
   //203
  {name : "Masquerade", skill : 16, skillReq : 50,
   xPos : 102/4, yPos : 93/4, preReqs : [201], nextPerk: 204,
   description : "You've become proficient at acting, and with the right equipment you can now disguise yourself, although sometimes people can still tell that you are not truly one of them."},
   //204
  {name : "Masquerade", skill : 16, skillReq : 100,
   xPos : 102/4, yPos : 93/4, preReqs : [203], nextPerk: -1,
   description : "There is no role you cannot play, and your acting is so believable that there is almost no way for others to see through your disguises."},
   //205
  {name : "Lore of the Thu'um", skill : 16, skillReq : 0,
   xPos : 340/4, yPos : 338/4, preReqs : [], nextPerk: -1,
   description : "You've been studying the lore and ancient script of dragons and the Thu'um. Thus, you can shout more often."},
   //206
  {name : "Destructive Urge", skill : 16, skillReq : 0,
   xPos : 250/4, yPos : 320/4, preReqs : [205], nextPerk: -1,
   description : "The horrors that the Thu'um can inflict are etched into your mind just as you have seen them etched into stone. Your Thu'um will wreak even greater havoc among your unfortunate foes."},
   //207
  {name : "Indomitable<br>Force", skill : 16, skillReq : 0,
   xPos : 265/4, yPos : 251/4, preReqs : [205], nextPerk: -1,
   description : "You know what it means to be called Ysmir, Dragon of the North. As you have withstood the test of Thu'um, so you will withstand the Thu'um of others."},
   //208
  {name : "Spiritual<br>Equilibrium", skill : 16, skillReq : 0,
   xPos : 273/4, yPos : 160/4, preReqs : [205], nextPerk: -1,
   description : "You have been guided in meditating on the Thu'um. Now your shouts linger, lasting longer than they did before."},
   //209
  {name : "The Way of<br>the Voice", skill : 16, skillReq : 0,
   xPos : 296/4, yPos : 96/4, preReqs : [205], nextPerk: -1,
   description : "You've meditated thoroughly, and acquired vast insights into the Way of the Voice. Thus, you can call upon the power of your Thu'um rapidly once each day."},
   //210
  {name : "Tongue's<br>Insight", skill : 16, skillReq : 0,
   xPos : 349/4, yPos : 71/4, preReqs : [205], nextPerk: -1,
   description : "You've spent time meditating on the Way of the Voice, unearthing more knowledge and gaining valuable insights. Thus, you can harness the might of yet another word of power."},
   //211
  {name : "Great Weapon Mastery", skill : 17, skillReq : 0,
   xPos : 192/4, yPos : 362/4, preReqs : [], nextPerk: 212,
   description : "Your improved fighting techniques increase your damage dealt with two-handed weapons. [damage x 1.2, -50% weapon weight penalties]"},
   //212
  {name : "Great Weapon Mastery", skill : 17, skillReq : 0,
   xPos : 192/4, yPos : 362/4, preReqs : [211], nextPerk: -1,
   description : "Your improved fighting techniques increase your damage dealt with two-handed weapons even more. [damage x 1.4, -50% weapon weight penalties]"},
   //213
  {name : "Barbaric Might", skill : 17, skillReq : 20,
   xPos : 195/4, yPos : 275/4, preReqs : [211], nextPerk: -1,
   description : "Your power attacks become mighty blows that will penetrate armor and are less tiring. [-50% power attack stamina cost, +5 armor penetration]"},
   //214
  {name : "Battle Axe Focus", skill : 17, skillReq : 25,
   xPos : 100/4, yPos : 232/4, preReqs : [213], nextPerk: 215,
   description : "You've become familiar with battle axes, thereby increasing their damage and armor penetration. [damage x 1.05, +10 armor penetration]"},
   //215
  {name : "Battle Axe Focus", skill : 17, skillReq : 50,
   xPos : 100/4, yPos : 232/4, preReqs : [214], nextPerk: 216,
   description : "You've become an advanced battle axe fighter, further increasing their damage and armor penetration. [damage x 1.15, +20 armor penetration]"},
   //216
  {name : "Battle Axe Focus", skill : 17, skillReq : 75,
   xPos : 100/4, yPos : 232/4, preReqs : [215], nextPerk: -1,
   description : "You've become a master of battle axe combat, allowing you to perform devastating attacks with them. [damage x 1.3, +30 armor penetration]"},
   //217
  {name : "Greatsword Focus", skill : 17, skillReq : 25,
   xPos : 280/4, yPos : 230/4, preReqs : [213], nextPerk: 218,
   description : "You've learned the basics of greatsword combat, allowing you to increase your attack rate with them slightly. [+10% attack speed with greatswords, +7 armor penetration]"},
   //218
  {name : "Greatsword Focus", skill : 17, skillReq : 50,
   xPos : 280/4, yPos : 230/4, preReqs : [217], nextPerk: 219,
   description : "You've acquired the advanced techniques of greatsword combat, further increasing your attack rate with them. [+20% attack speed with greatswords, +14 armor penetration]"},
   //219
  {name : "Greatsword Focus", skill : 17, skillReq : 75,
   xPos : 280/4, yPos : 230/4, preReqs : [218], nextPerk: -1,
   description : "You're a master of greatsword combat, making your swings even faster. [+30% attack speed with greatswords, +21 armor penetration]"},
   //220
  {name : "Warhammer Focus", skill : 17, skillReq : 25,
   xPos : 306/4, yPos : 260/4, preReqs : [213], nextPerk: 221,
   description : "You've become familiar with warhammers, enabling you to partly use their ability to penetrate your foes' armor. [power attack damage x 1.05, +15 armor penetration]"},
   //221
  {name : "Warhammer Focus", skill : 17, skillReq : 50,
   xPos : 306/4, yPos : 260/4, preReqs : [220], nextPerk: 222,
   description : "You've become an advanced warhammer fighter, further increasing your ability to penetrate armor with them. [power attack damage x 1.1, +30 armor penetration]"},
   //222
  {name : "Warhammer Focus", skill : 17, skillReq : 75,
   xPos : 306/4, yPos : 260/4, preReqs : [221], nextPerk: -1,
   description : "You've become a masterly warhammer fighter, rendering armor almost useless. [power attack damage x 1.15, +45 armor penetration]"},
   //223
  {name : "Devastating Charge", skill : 17, skillReq : 50,
   xPos : 140/4, yPos : 183/4, preReqs : [213], nextPerk: -1,
   description : "You've learned to perform a leaping power attack while sprinting, reducing your enemies to smithereens. [unlocks sprinting power attack, -25% weapon weight penalties]"},
   //224
  {name : "Devastating Strike", skill : 17, skillReq : 50,
   xPos : 260/4, yPos : 183/4, preReqs : [213], nextPerk: -1,
   description : "Your two-handed combat style has improved so much that all power attacks have become devastating. [power attack damage x 1.25]"},
   //225
  {name : "Cleave", skill : 17, skillReq : 75,
   xPos : 205/4, yPos : 91/4, preReqs : [223,224], nextPerk: -1,
   description : "Your power attacks are truly devastating and you can cut down multiple foes with a single sweeping blow. [sideways power attack can hit multiple targets]"},
   //226
  {name : "Devastating Cleave", skill : 17, skillReq : 100,
   xPos : 205/4, yPos : 50/4, preReqs : [225], nextPerk: -1,
   description : "Putting your whole weight behind your swing, your sidewards power attacks are now powerful enough to knock down foes. [sideways power attacks can knock down]"},
   //227
  {name : "Mighty Strike", skill : 17, skillReq : 100,
   xPos : 205/4, yPos : 10/4, preReqs : [226], nextPerk: -1,
   description : "You can kill almost any foe with a single strike of your two-hander, as your blows even fell giants with ease. [damage x 1.25]"},
   
]
};

addPerkData(three3bftweaks433data);

/*
*
* ################ NOT NEEDED ################
* Requiem with Fozar's DB Patch
*
*
const requiem402WithFozarsPerkData = deepmerge({},requiem402PerkData);
requiem402WithFozarsPerkData.name = "Requiem 4.0.2 + Fozar's DB patch";
requiem402WithFozarsPerkData.id = 1;

//Add new smithing perks
requiem402WithFozarsPerkData.perks.push(
  //228
  {name : "Stalhrim Smithing", skill : 14, skillReq : 85,
   xPos : 251/5, yPos : 45/3.5, preReqs : [-186,-183], nextPerk: -1,
   description : "Around the world, only a few know the secret of properly processing enchanted ice, but you were lucky, for the help you provided to Skaals, they agreed to share their secrets."}
);

requiem402WithFozarsPerkData.perks.push(
  //229
  {name : "Morrowind<br>Smithing", skill : 14, skillReq : 25,
   xPos : 303/5, yPos : 109/3.5, preReqs : [177], nextPerk: 230,
   description : "As a rule, Dunmer are masters of the processing of bone of the fauna of Morrowind, but you have mastered their knowledge with the help of this compendium written by the famous blacksmith of Morrowind."}
);

requiem402WithFozarsPerkData.perks.push(
  //230
  {name : "Morrowind<br>Smithing", skill : 14, skillReq : 50,
   xPos : 303/5, yPos : 109/3.5, preReqs : [229], nextPerk: -1,
   description : "You have honed your bone processing skills and are now able to work with such complex material as chitin. Having read the compendium to the holes, you have become a master of this technology."}
);

requiem402WithFozarsPerkData.perks.push(
  //231
  {name : "Nordic<br>Smithing", skill : 14, skillReq : 55,
   xPos : 460/5, yPos : 183/3.5, preReqs : [184], nextPerk: -1,
   description : "The key mixture found in Nordic equipment is the blend of Quicksilver and Ebony ore. The combination creates some of the hardest alloys on Nirn."}
);
//Fozar's also changes some pre-requisites for other smithing perks.
requiem402WithFozarsPerkData.perks[186].preReqs = [-185,-231];
requiem402WithFozarsPerkData.perks[183].preReqs = [-182,-230];
requiem402WithFozarsPerkData.perks[185].preReqs = [184,229];

addPerkData(requiem402WithFozarsPerkData);

/*
*
*
* FTweaks 1.7 (and probably earlier)
*
*
*
const fTweaks17PerkData = deepmerge({},requiem402WithFozarsPerkData);
fTweaks17PerkData.name = "FTweaks 1.7";
fTweaks17PerkData.id = 2;
//Basic description/requirement changes.
fTweaks17PerkData.perks[1].description = "You now can craft alchemistic powders at a smelter. In addition, your sensory organs have become very keen. Thus, you determine most of the alchemical properties of consumed ingredients. Your created potions are 50% more potent [overrides Alchemical Lore 1]";
fTweaks17PerkData.perks[1].skillReq = 50;
fTweaks17PerkData.perks[2].description = "Having refined your brewing process, you are now able to improve the effects of all your beneficial elixirs by 10%, and your health/stamina/magicka-restoring potions by a further 10%.";
fTweaks17PerkData.perks[3].skillReq = 35;
fTweaks17PerkData.perks[5].skillReq = 65;
fTweaks17PerkData.perks[6].description = "You've started experimenting with a catalyst that increases the yield of the brewing process roughly one fifth of the time.";
fTweaks17PerkData.perks[7].description = "You've improved the catalyst. Thereby, you can craft double the amount of <br> mixtures with the same amount of ingredients on third of the time.";
fTweaks17PerkData.perks[8].description = "You have learned to fully extract the most vile parts of your ingredients. <br> Thus, you are able to make your poisons 15% more potent.";
fTweaks17PerkData.perks[10].description = "Having ingested a preparation of troll fat and mammoth heart fermented in Strange Remains, you've become more resilient to harm and your body can excrete toxic waste products more efficiently.";
fTweaks17PerkData.perks[10].skillReq = 80;
fTweaks17PerkData.perks[12].description = "You've found a method to eliminate disadvantages from your mixtures while making them even more potent. All created potions are 10% more potent, while all beneficial potions are a further 5% more potent. Lastly, health/magicka/stamina-restoring potions are a further 5% more potent.";
fTweaks17PerkData.perks[21].description = "You've mastered the art of casting armor spells. So long as the weight of all items you have equipped is less than 20, all mage armor spells will be more effective.";
fTweaks17PerkData.perks[22].description = "Your Mage Armor spells are able to block a part of a dangerous spell's effect.";
fTweaks17PerkData.perks[23].description = "Your Mage Armor spells are able to block more of a dangerous spell's effect.";
fTweaks17PerkData.perks[24].description = "Your Mage Armor spells are able to block even more of a dangerous spell's effect.";
fTweaks17PerkData.perks[28].description = "You strengthened your shield arm and trained to parry blows a little. Thus you can block somewhat better and protect yourself a bit more from offensive magic with your shield.";
fTweaks17PerkData.perks[29].description = "With weapon or shield you can block almost any blow with rock-solid confidence. Additionally, when blocking a hit you feel the adrenaline rushing through your veins, recovering a small amount of stamina. You are also able to block a bit more offensive magic with your shield.";
fTweaks17PerkData.perks[29].skillReq = 45;
fTweaks17PerkData.perks[30].description = "You hold on to your shield like you would hold on to your life. Blocking is even more effective and your equipped shield weighs less. Your shield is also able to block a bit more of offensive magic.";
fTweaks17PerkData.perks[31].skillReq = 60;
fTweaks17PerkData.perks[31].description = "You've perfected the art of blocking spells and take even less damage from them while blocking. You've even learned to deflect spells with your weapon a bit, though a shield is still much more effective for such a task.";
fTweaks17PerkData.perks[42].skillReq = 30;
fTweaks17PerkData.perks[42].description = "You've become very skilled in binding weapon-shaped daedra from Oblivion. Thereby, bound weapons are stronger and much longer-lasting.";
fTweaks17PerkData.perks[43].description = "The weapon-shaped Daedra you conjure now directly cut into their victims' souls, thereby making targets vulnerable to soul gems and suffer irresistible damage.";
fTweaks17PerkData.perks[44].skillReq = 70;
fTweaks17PerkData.perks[44].description = "Your bound weapons are now able to send summoned creatures back into the waters of Oblivion and turn the undead.";
fTweaks17PerkData.perks[45].skillReq = 90;
fTweaks17PerkData.perks[45].description = "You've perfected your invocations of summoning weapon-shaped daedra. They now bypass an additional third of foes' armor values.";
fTweaks17PerkData.perks[48].skillReq = 90;
fTweaks17PerkData.perks[57].description = "You now are able to intensify the heat of your fire spells. Thus, they now deal increased damage. In addition, you will no longer suffer a damage penalty on all fire spells.";
fTweaks17PerkData.perks[58].skillReq = 60;
fTweaks17PerkData.perks[61].description = "You now are able to improve your ice spells and thereby increase their effectiveness. In addition, you will no longer suffer a damage penalty on all frost spells.";
fTweaks17PerkData.perks[62].skillReq = 60;
fTweaks17PerkData.perks[65].description = "You can now energize your lightning spells more effectively, causing them to deal more damage. In addition, you will no longer suffer a damage penalty on all shock spells.";
fTweaks17PerkData.perks[66].skillReq = 60;
fTweaks17PerkData.perks[78].description = "You've learned how to draw more energy from soul gems (especially smaller ones) and are now able to craft them at a smelter by transmuting and melting certain minerals.";
fTweaks17PerkData.perks[84].description = "You've found a way to bind even more energy into inanimate matter. Thus, you can bend the Law of Firsts to an extent and even create Daedric staves, while your enchantments are even stronger still. Additionally, all enchanted items also consume less energy.";
fTweaks17PerkData.perks[85].description = "After some training you are now much more confident in your evasive movements. Your light armor and clothes will now hinder your movements less and you take less damage from falling. You burn slightly less stamina from actions when not wearing a heavy cuirass.";
fTweaks17PerkData.perks[86].description = "Your trained reflexes allow you to dodge incoming blows when not wearing a heavy cuirass. By sprinting a step or two away, you can attempt to dodge hostile attacks."
fTweaks17PerkData.perks[87].description = "You inflict increased damage with all your power attacks while not wearing a heavy cuirass, for you're able to hit more precisely.";
fTweaks17PerkData.perks[88].description = "You are able to balance your weapon better. Thus, you can decrease the effort to execute power attacks when not wearing a heavy cuirass.";
fTweaks17PerkData.perks[90].description = "Your light armor and clothes have become your second skin. When not wearing a heavy cuirass, you can even run in them without becoming exhausted, recover faster from exhaustion, and even run faster.";
fTweaks17PerkData.perks[91].description = "You deal more damage with melee weapons while you are running, for you have learned to flank your enemies with ease when not wearing a heavy cuirass. Furthermore, your reflexes will never betray you when an enemy attempts a lethal strike.";
fTweaks17PerkData.perks[92].description = "You've gained the ability to act faster in combat, though doing so will quickly exhaust you.";

fTweaks17PerkData.perks[93].description = "Your reflexes are lightning fast and grant you a chance to decrease the damage of incoming melee attacks by half while not wearing a heavy cuirass.";
fTweaks17PerkData.perks[96].skillReq = 15;
fTweaks17PerkData.perks[97].skillReq = 40;
fTweaks17PerkData.perks[98].skillReq = 65;
fTweaks17PerkData.perks[99].skillReq = 95;
fTweaks17PerkData.perks[101].skillReq = 55;
fTweaks17PerkData.perks[102].skillReq = 80;
fTweaks17PerkData.perks[102].description = "Your use of heavy armor has emboldened you, allowing you to regenerate stamina more quickly while wearing heavy armor. Furthermore, you learned some new tricks to overcome the mobility limitations of your armor.";
fTweaks17PerkData.perks[123].description = "After some training at the shooting range you can deal more damage with bows and crossbows. [bow and crossbow damage x 1.2, -50% weapon weight penalties, ammunition grants extra expertise, 30% less stamina drain for bows]";
fTweaks17PerkData.perks[134].name = "Boxing";
fTweaks17PerkData.perks[134].description = "You're a passionate fist fighter, and train regularly to toughen your muscles to their very limits. Your punches now deliver 30 more damage points and cost 3 times less stamina.";
fTweaks17PerkData.perks[155].description = "You've become very skilled in wielding two weapons at once. [dual-wield power attack damage x 1.25, dual power attack cost x 0.5]";
fTweaks17PerkData.perks[163].name = "Redemption";
fTweaks17PerkData.perks[163].description = "You regret your past and vow to change yourself from here on out. You regain favor to some degree. (Cures Skooma Addiction and Resets Murders, Bounty, Thefts, but not divine-specific mandates or guild membership)";
fTweaks17PerkData.perks[170].description = "You've learned to focus your mind. Thus, you can keep your concentration even in stressful situations and regenerate your magicka 35% faster.";
fTweaks17PerkData.perks[171].name = "Enhanced Magicka";
fTweaks17PerkData.perks[171].description = "You have learned to focus yourself intensely, allowing you to access a greater amount of Magicka and lose less when struck in combat. Increases Magicka by 30 points.";
fTweaks17PerkData.perks[172].name = "Power of Life";
fTweaks17PerkData.perks[172].description = "Through your deep understanding of healing and life energies, you have developed an exceptionally efficient healing spell.";
fTweaks17PerkData.perks[173].name = "Ward Mastery";
fTweaks17PerkData.perks[173].preReqs = [167];
fTweaks17PerkData.perks[173].xPos = 250/4;
fTweaks17PerkData.perks[173].yPos = 120/4;
fTweaks17PerkData.perks[173].description = "Having learned all common ward spells, your mastery of wards is now complete. All ward spells absorb magicka from incoming spells and are easier to cast. Additionally, you have developed a new and especially powerful ward spell.";
//Skip smithing now because it's a whole deal;
fTweaks17PerkData.perks[190].description = "You are even harder to detect when sneaking even when wearing heavy armor.";
fTweaks17PerkData.perks[194].description = "Your newfound finesse allows you to move more quietly.";
fTweaks17PerkData.perks[211].description = "Your improved fighting techniques increase your damage dealt with two-handed weapons. [damage x 1.15, -50% weapon weight penalties]";
fTweaks17PerkData.perks[212].description = "Your improved fighting techniques increase your damage dealt with two-handed weapons even more. [damage x 1.3, -50% weapon weight penalties]";
fTweaks17PerkData.perks[223].skillReq = 75;
fTweaks17PerkData.perks[223].preReqs = [225,224];
fTweaks17PerkData.perks[223].xPos = 205/4; fTweaks17PerkData.perks[223].yPos = 91/4;
fTweaks17PerkData.perks[224].description = "Your two-handed combat style has improved so much that all power attacks have become devastating. [power attack damage x 1.2]";
fTweaks17PerkData.perks[225].skillReq = 50;
fTweaks17PerkData.perks[225].preReqs = [213];
fTweaks17PerkData.perks[225].xPos = 140/4; fTweaks17PerkData.perks[225].yPos = 183/4;
fTweaks17PerkData.perks[226].preReqs = [223];
//Next add the new perks from FTweaks
fTweaks17PerkData.perks.push(
  //232
  {name : "Toxin<br>Nullification", skill : 7, skillReq : 25,
   xPos : 160/4, yPos : 240/4.5, preReqs : [96], nextPerk: -1,
   description : "For each piece of heavy armor worn, you can further withstand poison by 5%, and by an extra 10% if a full suit is donned."}
);
fTweaks17PerkData.perks.push(
  //233
  {name : "Environmental<br>Nullification", skill : 7, skillReq : 50,
   xPos : 160/4, yPos : 170/4.5, preReqs : [232,97], nextPerk: -1,
   description : "For each piece of heavy armor worn, you can further withstand elemental attacks by 2.5%, and by an extra 5% if a full suit is donned."}
);
fTweaks17PerkData.perks.push(
  //234
  {name : "Magic<br>Nullification", skill : 7, skillReq : 75,
   xPos : 160/4, yPos : 85/4.5, preReqs : [233,98], nextPerk: -1,
   description : "For each piece of heavy armor worn, you can further withstand magical attacks by 2.5%, and by an extra 5% if a full suit is donned."}
);
//3Tweaks removes the second rank of Morrowind Smithing and adds Esoteric Magic
fTweaks17PerkData.perks[230] = {name : "Esoteric<br>Magic", skill : 4, skillReq : 45,
   xPos : 100/4, yPos : 270/4, preReqs : [56], nextPerk: -1,
   description : "You have studied the stranger aspects of the Destruction school. Therefore, you no longer suffer a penalty when casting non-elemental spells."};
//Now re-vamp the smithing tree.
fTweaks17PerkData.perks[229] = {name : "Morrowind<br>Smithing", skill : 14, skillReq : 60,
   xPos : 40/5, yPos : 157/3.5, preReqs : [177], nextPerk: -1,
   description : "Thanks to your studies of Dunmeri craftsmanship, you have gained the skills necessary to create armors in the Morrowind style out of materials such as chitin or bone."};
fTweaks17PerkData.perks[182] = {name : "Elven<br>Smithing", skill : 14, skillReq : 50,
   xPos : 100/5, yPos : 180/3.5, preReqs : [177], nextPerk: -1,
   description : "You've gained enough finesse to create and improve Elven armor and weapons by studying the Elven craftmanship carefully."};
 //Advanced Light Armors
 fTweaks17PerkData.perks[181].xPos = 175/5; fTweaks17PerkData.perks[181].yPos = 214/3.5;
 //Glass Smithing
 fTweaks17PerkData.perks[183].preReqs = [-181,-182,-229];
 fTweaks17PerkData.perks[183].description = "Crafting and improving Glass equipment is not for the unskilled, but having studied intensely, you have overcome that challenge.";
 //Move some perks in the middle up
 fTweaks17PerkData.perks[178].yPos = 153 / 3.5;
 fTweaks17PerkData.perks[179].yPos = 110 / 3.5;
 fTweaks17PerkData.perks[180].yPos = 110 / 3.5;
 fTweaks17PerkData.perks[185] = {name : "Orcish<br>Smithing", skill : 14, skillReq : 35,
   xPos : 320/5, yPos : 214/3.5, preReqs : [177], nextPerk: -1,
   description : "Orcish equipment is hard to craft, but you've got what it takes. With the schematics, you can now craft and improve it easily and efficiently."};
 //Dwarven Smithing
 fTweaks17PerkData.perks[184].skillReq = 60;
 fTweaks17PerkData.perks[184].xPos = 400/5; fTweaks17PerkData.perks[184].yPos = 170/3.5;
 fTweaks17PerkData.perks[231] = {name : "Nordic<br>Smithing", skill : 14, skillReq : 55,
   xPos : 470/5, yPos : 153/3.5, preReqs : [177], nextPerk: -1,
   description : "You have become skilled at quicksilver-steel alloying.  Therefore, you can now forge Nordic armor and weapons."};
 fTweaks17PerkData.perks[186].preReqs = [-231,-185,-184];

addPerkData(fTweaks17PerkData);

*/