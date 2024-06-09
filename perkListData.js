const three3bftweaksdata = {
name : "3BFTweaks",
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
   xPos : 63, yPos : 35, preReqs : [2], nextPerk: 8,
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
  {name : "Fortified<br>Muscles", skill : 0, skillReq : 80,
   xPos : 42, yPos : 47, preReqs : [10], nextPerk: -1,
   description : "Having ingested a preparation of troll fat and mammoth heart fermented in Strange Remains, you've become more resilient to harm and your body can excrete toxic waste products more efficiently."},
  //12
  {name : "Alchemical<br>Intellect", skill : 0, skillReq : 100,
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
  {name : "Apprentice<br>Alteration", skill : 1, skillReq : 25,
   xPos : 53, yPos : 55, preReqs : [14], nextPerk: -1,
   description : "By pursuing your apprenticeship in Alteration, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."},
   //16
  {name : "Adept Alteration", skill : 1, skillReq : 50,
   xPos : 54, yPos : 35, preReqs : [15], nextPerk: -1,
   description : "By advancing further into the school of Alteration, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."},
   //17
  {name : "Expert<br>Alteration", skill : 1, skillReq : 75,
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
  {name : "Magical<br>Absorption", skill : 1, skillReq : 100,
   xPos : 50, yPos : 7, preReqs : [17], nextPerk: -1,
   description : "You've mastered the art of absorbing Magicka from incoming spells, and are now able to fully absorb their power from time to time."},
   //21
  {name : "Empowered<br>Alterations", skill : 1, skillReq : 25,
   xPos : 35, yPos : 55, preReqs : [14], nextPerk: -1,
   description : "You learned how to empower Alteration spells. Thus, you now can overcharge their effects into even more powerful, longer lasting versions."},
   //22
  {name : "Improved<br>Mage Armor", skill : 1, skillReq : 25,
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
  {name : "Metamagical<br>Thesis", skill : 1, skillReq : 75,
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
   xPos : 52, yPos : 42, preReqs : [37], nextPerk: -1,
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
  {name : "Binding<br>Contract", skill : 3, skillReq : 0,
   xPos : 43, yPos : 70, preReqs : [36], nextPerk: -1,
   description : "You have practiced the mental ability of maintaining two summons at the same time. This power extends to controlling any type of conjured or conceived entity, even outside the school of Conjuration."},
   //52
  {name : "Stabilized<br>Binding", skill : 3, skillReq : 25,
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
   xPos : 66, yPos : 35, preReqs : [68], nextPerk: -1,
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
  {name : "Soul Gem<br>Mastery", skill : 5, skillReq : 25,
   xPos : 65, yPos : 70, preReqs : [78], nextPerk: -1,
   description : "You've learned how to draw more energy from soul gems (especially smaller ones) and are now able to <br> craft them at a smelter by transmuting and melting certain minerals. Also allows the reforging of soul gem fragments into soul gems."},
   //81
  {name : "Arcane<br>Experimentation", skill : 5, skillReq : 50,
   xPos : 66, yPos : 45, preReqs : [80], nextPerk: -1,
   description : "Your studies have enabled you to research unique enchantments of your own<br>and to craft better staves at the forge. You can craft adept-tier scrolls."},
   //82
  {name : "Artificer's<br>Insight", skill : 5, skillReq : 75,
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
  {name : "Weapon<br>Infusion", skill : 5, skillReq : 10,
   xPos : 48, yPos : 72, preReqs : [78], nextPerk: -1,
   description : "You've gained the ability to infuse magicka directly into your weapon."},
   //88
  {name : "Efficient<br>Infusions", skill : 5, skillReq : 30,
   xPos : 49, yPos : 50, preReqs : [87], nextPerk: -1,
   description : "Your weapon infusions do more damage."},
   //89
  {name : "Overwhelming<br>Magicka", skill : 5, skillReq : 60,
   xPos : 50, yPos : 35, preReqs : [88], nextPerk: -1,
   description : "Your weapon infusions invisibly explode, doing area damage and do even more damage."},
   //90
  {name : "Temporal<br>Distortion", skill : 5, skillReq : 90,
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
  {name : "Combat<br>Training", skill : 7, skillReq : 20,
   xPos : 70, yPos : 68, preReqs : [101], nextPerk: -1,
   description : "You are less hindered by your armor so you can attack with ease and sprint without problems. <br>[No power attack stamina cost penalty, increased unarmed damage with heavy gauntlets, -10% armor weight penalty, and no sprinting stamina cost penalty.]"},
   //103
  {name : "Fortitude", skill : 7, skillReq : 55,
   xPos : 80, yPos : 52, preReqs : [102], nextPerk: -1,
   description : "Your training made you stronger and you are now less burdened by the rigidity of your armor.<br> You also receive some additional stamina and carry weight and are less burdened by heavy armor."},
   //104
  {name : "Power of<br>the Combatant", skill : 7, skillReq : 80,
   xPos : 78, yPos : 20, preReqs : [103], nextPerk: -1,
   description : "Your use of heavy armor has emboldened you, allowing you to regenerate stamina more quickly while wearing heavy armor. <br> Furthermore, you learned some new tricks to overcome the mobility limitations of your armor."},
   //105
  {name : "Juggernaut", skill : 7, skillReq : 100,
   xPos : 75, yPos : 5, preReqs : [104], nextPerk: -1,
   description : "You've reached perfection in the skill of wearing heavy armor and are now significantly mroe maneuverable in it. [15% less armor weight, 10% more armor rating, 90% less stagger when wearing all heavy armor: head, chest, hands and feet]"},
   //106
  {name : "Combat<br>Casting", skill : 7, skillReq : 15,
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
  {name : "Relentless<br>Onslaught", skill : 7, skillReq : 10,
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
  {name : "Ranged Combat Training", skill : 10, skillReq : 0,
   xPos : 80, yPos : 90, preReqs : [], nextPerk: -1,
   description : "After some training at the shooting range you can deal more damage with bows and crossbows.<br>[bow and crossbow damage x 1.1, ammunition grants armor penetration, 30% less stamina drain for bows]"},
   //135
  {name : "Ranger", skill : 10, skillReq : 15,
   xPos : 50, yPos : 75, preReqs : [134], nextPerk: -1,
   description : "You improved your footwork when engaging in ranged combat.<br>[Able to run with a drawn light bow or crossbow. While drawing a heavy bow or crossbow, able to move quicker and more resistant to stagger]"},
   //136
  {name : "Hunting Stride", skill : 10, skillReq : 70,
   xPos : 40, yPos : 50, preReqs : [135], nextPerk: -1,
   description : "Increases movement speed while aiming a heavy bow by 40% and light bow by 2.5%."},
   //137
  {name : "Eagle Eye", skill : 10, skillReq : 25,
   xPos : 30, yPos : 30, preReqs : [134], nextPerk: -1,
   description : "By concentrating only on your target and holding your breath, you can now aim much more precisely. Foes that are at point blank range take more damage.<br>[zoom in by holding the block button]"},
   //138
  {name : "Precise Aim", skill : 10, skillReq : 20,
   xPos : 65, yPos : 60, preReqs : [134], nextPerk: -1,
   description : "Your aim is now precise enough to target weak spots in the enemy's defenses.<br>[10% more damage]"},
   //139
  {name : "Marksman's Focus", skill : 10, skillReq : 50,
   xPos : 60, yPos : 20, preReqs : [137], nextPerk: -1,
   description : "When fully focusing on yur target, everything around you seems to slow down remarkably. [Time slows down while zooming, but gets weaker as stamina lowers]"},
   //140
  {name : "Rapid Reload", skill : 10, skillReq : 60,
   xPos : 62, yPos : 25, preReqs : [137], nextPerk: -1,
   description : "You have familiarized yourself with the mechanics of your crossbow and can use this knowledge to reload it significantly faster. [+10 expertise, +50 reload speed with crossbows]"},
   //141
  {name : "Ammunition Specialist", skill : 10, skillReq : 55,
   xPos : 64, yPos : 30, preReqs : [137], nextPerk: -1,
   description : "Reduces weight of carried arrows and bolts by 50% and increases elemental damage dealt with explosive ammo by 33%. Gain a chance to freeze enemies, or to make them flee from combat, or to stagger them with frost/fire/shock ammo respectively. The likelihood of success depends on the strength of the enchanted ammunition."},
   //142
  {name : "Quick Shot", skill : 10, skillReq : 60,
   xPos : 66, yPos : 35, preReqs : [137], nextPerk: -1,
   description : "You have learned to draw and fire in a single movement/ [+50% draw speed with bows]"},
   //143
  {name : "Power<br>Shot", skill : 10, skillReq : 75,
   xPos : 32, yPos : 17, preReqs : [137], nextPerk: -1,
   description : "You have discovered the art of aiming at tendons and joints. [Chance to stagger targets]"},
   //144
  {name : "Piercing<br>Shot", skill : 10, skillReq : 45,
   xPos : 53, yPos : 35, preReqs : [138], nextPerk: -1,
   description : "You've learned how to hit the weakest parts of armor. [+50% armor penetration from ammunition]"},
   //145
  {name : "Penetrating Shot", skill : 10, skillReq : 80,
   xPos : 45, yPos : 16, preReqs : [144], nextPerk: -1,
   description : "You've mastered the technique of hitting weak armor parts. [+50% armor penetration from ammunition]"},
   //146
  {name : "Stunning Precision", skill : 10, skillReq : 100,
   xPos : 38, yPos : 2, preReqs : [143,145], nextPerk: -1,
   description : "Any successful staggering shot will almost always stun the target momentarily, and/or slow it down for a short period of time. 1-in-5 chance to disarm targets who are power attacking at the moment the shot lands."},
   //147
  {name : "Weapon Mastery", skill : 11, skillReq : 0,
   xPos : 50, yPos : 90, preReqs : [], nextPerk: 148,
   description : "Your improved fighting techniques allow you to swing one-handed weapons with less effort and deal more damage.<br>[10% more damage]"},
   //148
  {name : "Weapon Mastery", skill : 11, skillReq : 35,
   xPos : 50, yPos : 90, preReqs : [147], nextPerk: -1,
   description : "Your improved fighting techniques increase your damage dealt with one-handed weapons greatly.<br>[20% more damage]"},
   //149
  {name : "Flurry", skill : 11, skillReq : 25,
   xPos : 85, yPos : 78, preReqs : [148], nextPerk: 150,
   description : "When fighting with one-handed weapons, you are able to attack faster than normal.<br>[+7.5% attack speed]"},
   //150
  {name : "Flurry", skill : 11, skillReq : 50,
   xPos : 85, yPos : 78, preReqs : [147,149], nextPerk: -1,
   description : "When fighting with one-handed weapons, you're able to attack even faster.<br>[+17.5% attack speed]"},
   //151
  {name : "Storm of Steel", skill : 11, skillReq : 75,
   xPos : 77, yPos : 30, preReqs : [149,150], nextPerk: -1,
   description : "The fury of battle energizes your blows. Each strike you deal with one-handed weapons increases your damage for a short period of time."},
   //152
  {name : "Penetrating Strikes", skill : 11, skillReq : 15,
   xPos : 50, yPos : 65, preReqs : [147], nextPerk: -1,
   description : "Putting your whole weight behind your charge, your forward power attacks now have enough momentum to knock down opponent. [forward power attacks can knock down]"},
   //153
  {name : "Dagger<br>Focus", skill : 11, skillReq : 25,
   xPos : 25, yPos : 50, preReqs : [152], nextPerk: 154,
   description : "You learned some dirty tricks for your dagger. [+25% irresistible sneal attack damage, +10% armor penetration]"},
   //154
  {name : "Dagger<br>Focus", skill : 11, skillReq : 50,
   xPos : 25, yPos : 50, preReqs : [152,153], nextPerk: 155,
   description : "A dagger in your hand turns into a deadly weapon. [55% irresistible sneal attack damage, +20% armor penetration]"},
   //155
  {name : "Dagger<br>Focus", skill : 11, skillReq : 75,
   xPos : 25, yPos : 50, preReqs : [152,153,154], nextPerk: -1,
   description : "A dagger in your hand turns into a deadly weapon. [100% irresistible sneal attack damage, +30% armor penetration]"},
   //156
  {name : "War Axe<br>Focus", skill : 11, skillReq : 0,
   xPos : 35, yPos : 50, preReqs : [152], nextPerk: 157,
   description : "You've become familiar with war axes.<br>[10% more damage, +10% armor penetration]"},
   //157
  {name : "War Axe>br>Focus", skill : 11, skillReq : 0,
   xPos : 35, yPos : 50, preReqs : [152,156], nextPerk: 158,
   description : "You've become an advanced war axe fighter.<br>[20% more damage, +20% armor penetration]"},
   //158
  {name : "War Axe<br>Focus", skill : 11, skillReq : 0,
   xPos : 35, yPos : 50, preReqs : [152,156,157], nextPerk: -1,
   description : "You've become a master of war axe combat..<br>[30% more damage, +30% armor penetration]"},
   //159
  {name : "Mace<br>Focus", skill : 11, skillReq : 25,
   xPos : 65, yPos : 50, preReqs : [152], nextPerk: 160,
   description : "You've learned some techniques to crush armor with maces.<br>[5% more power attack damage, +15% armor penetration]"},
   //160
  {name : "Mace<br>Focus", skill : 11, skillReq : 50,
   xPos : 65, yPos : 50, preReqs : [152,159], nextPerk: 161,
   description : "You've become an advanced mace fighter and know how to find weak spots in enemy armor.<br>[10% more power attack damage, +30% armor penetration]"},
   //161
  {name : "Mace<br>Focus", skill : 11, skillReq : 75,
   xPos : 65, yPos : 50, preReqs : [152,159,160], nextPerk: -1,
   description : "You've become a masterly mace fighter, rendering armor almost useless.<br>[15% more power attack damage, +45% armor penetration]"},
   //162
  {name : "Sword<br>Focus", skill : 11, skillReq : 25,
   xPos : 75, yPos : 50, preReqs : [152], nextPerk: 163,
   description : "You've learned the basics of sword combat.<br>[+8% attack speed, +7% armor penetration]"},
   //163
  {name : "Sword<br>Focus", skill : 11, skillReq : 50,
   xPos : 75, yPos : 50, preReqs : [152,162], nextPerk: 164,
   description : "You've acquired the advanced techniques of sword combat.<br>[+16% attack speed, +14% armor penetration]"},
   //164
  {name : "Sword<br>Focus", skill : 11, skillReq : 75,
   xPos : 75, yPos : 50, preReqs : [152,162,163], nextPerk: -1,
   description : "You've become a master of sword combat.<br>[+24% attack speed, +21% armor penetration]"},
   //165
  {name : "Powerful<br>Strike", skill : 11, skillReq : 50,
   xPos : 42, yPos : 40, preReqs : [152], nextPerk: -1,
   description : "By pursuing your apprenticeship in Restoration, you've gained knowledge of Apprentice level spells which you now augment while casting them with less effort."},
   //166
  {name : "Powerful<br>Charge", skill : 11, skillReq : 50,
   xPos : 58, yPos : 40, preReqs : [152], nextPerk: -1,
   description : "By advancing further into the school of Restoration, you've gained some Adept level spells and learned how to augment and cast spells of this rank more easily."},
   //167
  {name : "Battle Master", skill : 11, skillReq : 100,
   xPos : 50, yPos :10, preReqs : [165,166], nextPerk: -1,
   description : "You've gained a mastery over special weapon techniques that allow you to knock down and disarm enemies.<br>[Forward power attacks can knock down, sideways power attacks disarm enemies who are attacking you]"},
   //168
  {name : "Nimble Fingers", skill : 12, skillReq : 0,
   xPos : 30, yPos : 90, preReqs : [], nextPerk: 169,
   description : "You've spent some time improving your sleight of hand,<br>which gives you substantial chances when pickpocketing, along with an easier time distributing your weight when attacking and traveling."},
   //169
  {name : "Nimble Fingers", skill : 12, skillReq : 40,
   xPos : 30, yPos : 90, preReqs : [168], nextPerk: -1,
   description : "Your fingers have become very nimble, and besides other advantages, they allow you to <br> pickpocket even better and to apply poisons on your victims. Why fight if a vial of deadly venom can also do the trick?"},
   //170
  {name : "Akimbo Attacks", skill : 12, skillReq : 30,
   xPos : 27, yPos : 70, preReqs : [168], nextPerk: -1,
   description : "You are able to move freely while attacking simultaneously with two weapons. The extra effort required lowers your attack speed by 10%."},
   //171
  {name : "Precise<br>Strikes", skill : 12, skillReq : 50,
   xPos : 32, yPos : 37, preReqs : [170], nextPerk: 172,
   description : "You're able to target and accurately strike a target's weak points. Brandishing two weapons simultaneously contributes to greater power in your attacks. <br>[increases armor penetration by 5 with one-handed weapons without a shield, or 10 while dual wielding]"},
   //172
  {name : "Precise<br>Strikes", skill : 12, skillReq : 80,
   xPos : 32, yPos : 37, preReqs : [170,171], nextPerk: -1,
   description : "You're able to target and accurately strike a target's weak points even more effectively. Brandishing two weapons simultaneously contributes to greater power in your attacks. <br>[increases armor penetration by 10 with one-handed weapons without a shield, or 15 while dual wielding]"},
   //173
  {name : "Akimbo<br>Power Attacks", skill : 12, skillReq : 70,
   xPos : 20, yPos : 43, preReqs : [170], nextPerk: -1,
   description : "You're able to move somewhat more freely when power-attacking simultaneously with 2 weapons."},
   //174
  {name : "Dual Savagery", skill : 12, skillReq : 90,
   xPos : 23, yPos : 20, preReqs : [173], nextPerk: -1,
   description : "You've become very skilled in wielding two weapons at once. Dual-wielding attacks are no longer slower and power attacks cost less."},
   //175
  {name : "Cutpurse", skill : 12, skillReq : 25,
   xPos : 35, yPos : 67, preReqs : [168], nextPerk: -1,
   description : "People shouldn't burden themselves with purses and keys.<br>Luckily, you now can free them of these burdens more easily."},
   //176
  {name : "Nightly<br>Thief", skill : 12, skillReq : 50,
   xPos : 41, yPos : 50, preReqs : [175], nextPerk: -1,
   description : "You have learned how to avoid waking up targets during your 'nightly visits', <br> so you can free them from their worldly burdens with ease. Furthermore, you now can carry more items <br> without becoming overencumbered."},
   //177
  {name : "Misdirection", skill : 12, skillReq : 70,
   xPos : 43, yPos : 23, preReqs : [176], nextPerk: -1,
   description : "Why should someone own a nice weapon or piece of jewelry when it could be yours? <br> Now you can sometimes adjust this inequity."},
   //178
  {name : "Perfected Art", skill : 12, skillReq : 100,
   xPos : 45, yPos : 5, preReqs : [177], nextPerk: -1,
   description : "After having learned everything there is to know about thievery,<br>your legendary skill means you almost never get caught."},
   //179
  {name : "Brawling", skill : 12, skillReq : 15,
   xPos : 50, yPos : 69, preReqs : [168], nextPerk: -1,
   description : "You're a passionate fist fighter, and train regularly to toughen your muscles to their very limits.<br>Your punches now deliver 30 more damage points and cost half as much stamina."},
   //180
  {name : "Boxing<br>Focus", skill : 12, skillReq : 25,
   xPos : 52, yPos : 50, preReqs : [179], nextPerk: 181,
   description : "You've learned the basics of combat boxing, allowing you to increase your attack rate and movement speed while using fist weapons slightly."},
   //181
  {name : "Boxing<br>Focus", skill : 12, skillReq : 50,
   xPos : 52, yPos : 50, preReqs : [179,180], nextPerk: 182,
   description : "You've acquired the advanced techniques of combat boxing, further increasing your attack rate  and movement speed while using fist weapons. This path you choose locks you out of other focuses."},
   //182
  {name : "Boxing<br>Focus", skill : 12, skillReq : 75,
   xPos : 52, yPos : 50, preReqs : [179,180,181], nextPerk: -1,
   description : "You've become a master of combat boxing, allowing you to swing your fists and move so while using fist weapons fast that it's almost undetectable to the mortal eye. You're able to do a sprinting unarmed attack. This path you choose locks you out of other focuses."},	
   //183
  {name : "Grappling<br>Focus", skill : 12, skillReq : 25,
   xPos : 60, yPos : 43, preReqs : [179], nextPerk: 184,
   description : "You've learned the basics of grappling, allowing you to disarm your opponents and make them trip and fall. Prevents perking into Boxing Focus."},
   //184
  {name : "Grappling<br>Focus", skill : 12, skillReq : 50,
   xPos : 60, yPos : 43, preReqs : [179,183], nextPerk: 185,
   description : "You've learned the basics of grappling, allowing you to disarm your opponents and make them trip and fall. Prevents perking into Boxing Focus."},
   //185
  {name : "Grappling<br>Focus", skill : 12, skillReq : 75,
   xPos : 60, yPos : 43, preReqs : [179,183,184], nextPerk: -1,
   description : "You've learned the basics of grappling, allowing you to disarm your opponents and make them trip and fall. Prevents perking into Boxing Focus."},
   //186
  {name : "Fast Hands", skill : 12, skillReq : 40,
   xPos : 75, yPos : 70, preReqs : [168], nextPerk: 187,
   description : "You're able to attack more quickly with light weapons like daggers and bows."},
   //187
  {name : "Fast Hands", skill : 12, skillReq : 80,
   xPos : 75, yPos : 70, preReqs : [168,186], nextPerk: -1,
   description : "You're able to attack even more quickly with light weapons like daggers and bows. In addition, you're able to deflect incoming projectiles from ranged weapons, significantly reducing their damage, if you have enough distance and are not attacking,"},
   //188
  {name : "Novice Restoration", skill : 13, skillReq : 0,
   xPos : 35, yPos : 90, preReqs : [], nextPerk: -1,
   description : "You've taught yourself a few Novice level spells and learned how to cast them with decreased effort <br> while your newfound knowledge also allows you to augment all Restoration spells."},
   //189
  {name : "Benefactor's<br>Insight", skill : 13, skillReq : 20,
   xPos : 30, yPos : 65, preReqs : [188], nextPerk: -1,
   description : "You learned how to empower Restoration spells. <br> Therefore, you are now able to overcharge their effects."},
   //190
  {name : "Restorative<br>Expertise", skill : 13, skillReq : 30,
   xPos : 15, yPos : 68, preReqs : [188], nextPerk: -1,
   description : "You've learned to focus your mind on restorative forces. Thus, you can regenerate your magicka 35% faster, heal wounds more efficiently with your healing spells, and lose less magicka when struck in combat."},
   //191
  {name : "Apprentice<br>Restoration", skill : 13, skillReq : 25,
   xPos : 55, yPos : 75, preReqs : [188], nextPerk: -1,
   description : "By pursuing your apprenticeship in Restoration, you've gained knowledge of Apprentice level spells<br>which you now augment while casting them with less effort."},
   //192
  {name : "Respite", skill : 13, skillReq : 60,
   xPos : 17, yPos : 30, preReqs : [190], nextPerk: -1,
   description : "In addition to curing wounds, your healing spells now reinvigorate the body itself,<br>restoring the affected subject's stamina. Sunlight spells can now absorb stamina regeneration."},
   //193
  {name : "Power of Life", skill : 13, skillReq : 75,
   xPos : 20, yPos : 8, preReqs : [192], nextPerk: -1,
   description : "Through your deep understanding of healing and life energies, you have developed an exceptionally efficient healing spell."},
   //194
  {name : "Solar<br>Dominance", skill : 13, skillReq : 35,
   xPos : 75, yPos : 50, preReqs : [191], nextPerk: -1,
   description : "Your mastery of sun spells allows you to use them with ease and enables your sunlight weapons to become stronger."},
   //195
  {name : "Mysticism", skill : 13, skillReq : 75,
   xPos : 60, yPos : 30, preReqs : [194], nextPerk: -1,
   description : "You've learned the art of weaving mystical energies into your spells, <br> making all of them more effective against the undead and Daedra."},
   //196
  {name : "Magnus' Comprehension", skill : 13, skillReq : 70,
   xPos : 77, yPos : 20, preReqs : [194], nextPerk: -1,
   description : "Your mastery of sun spells allows them to be stronger, enables your sunlight weapons to become stronger, and you are empowered by the daytime."},
   //197
  {name : "Adept<br>Restoration", skill : 13, skillReq : 50,
   xPos : 40, yPos : 35, preReqs : [191], nextPerk: -1,
   description : "By advancing further into the school of Restoration, you've gained some Adept level spells<br>and learned how to augment and cast spells of this rank more easily."},
   //198
  {name : "Expert<br>Restoration", skill : 13, skillReq : 75,
   xPos : 42, yPos : 20, preReqs : [197], nextPerk: -1,
   description : "You've unlocked almost every secret in the school of Restoration and you've acquired some Expert level spells.<br>You can now cast spells of this level easier and augment them to an almost otherworldly extent."},
   //199
  {name : "Master<br>Restoration", skill : 13, skillReq : 100,
   xPos : 35, yPos : 8, preReqs : [198], nextPerk: -1,
   description : "Your knowledge of Restoration has become all-encompassing.You taught yourself a Master level spell <br> and you can cast the most complex spells from this school with less effort while augmenting them beyond mortal limits."},
   //200
  {name : "Ward Mastery", skill : 13, skillReq : 90,
   xPos : 60, yPos : 5, preReqs : [198], nextPerk: -1,
   description : "Having learned all common ward spells, your mastery of wards is now complete. All ward spells absorb magicka from incoming spells and are easier to cast. Additionally, you have developed a new and especially powerful ward spell."},
   //201
  {name : "Craftsmanship", skill : 14, skillReq : 0,
   xPos : 50, yPos : 90, preReqs : [], nextPerk: -1,
   description : "You've acquired the basics of craftsmanship and know how to properly use all kinds of tools. Thus, you are able to craft and improve a wide variety of common goods,<br>including novice-tier master keys and bombs. Unlocks weapon traits: cushioned and silver-lined. Unlocks Augmentation."},
   //202
  {name : "Advanced<br>Blacksmithing", skill : 14, skillReq : 50,
   xPos : 50, yPos : 70, preReqs : [201], nextPerk: -1,
   description : "You've gained quite some finesse, allowing you to craft plate armor, fine jewelry and exotic blades. You have also found a way to melt and crush certain gems into<br>alchemically usable dust. You've learned how to craft adept-tier master keys and nail bombs. Unlocks weapon trait: jagged. Increases Augmentation strength."},
   //203
  {name : "Arcane<br>Craftsmanship", skill : 14, skillReq : 60,
   xPos : 37, yPos : 53, preReqs : [202], nextPerk: -1,
   description : "After reading a tome about the ancient secrets of explosive dwemer bolts, you've learned the<br>necessary techniques to craft bolts and arrows that will explode with elemental fury upon impact as well as how to create elemental bombs. Unlocks weapon trait: conducting."},
   //204
  {name : "Legendary<br>Blacksmithing", skill : 14, skillReq : 100,
   xPos : 63, yPos : 53, preReqs : [202], nextPerk: -1,
   description : "You make steel sing songs on the anvil. Your hammer is no longer a mere tool, but a loom that weaves the fabric of myths.<br>You can improve weapons and armor of almost any kind, including the most ancient of artifacts. Maximizes Augmentation strength."},
   //205
  {name : "Advanced<br>Light Armors", skill : 14, skillReq : 25,
   xPos : 37, yPos : 77, preReqs : [201], nextPerk: -1,
   description : "You've been able to learn more advanced techniques, <br> allowing you to craft and efficiently improve scale armor. You've learned how to craft apprentice-tier master keys. Unlocks weapon trait: aerodynamic."},
   //206
  {name : "Elven<br>Smithing", skill : 14, skillReq : 40,
   xPos : 20, yPos : 67, preReqs : [201], nextPerk: -1,
   description : "You've gained enough finesse to create and improve Elven armour and weapons <br> by studying the Elven craftmanship carefully. Unlocks weapon traits: polished and torqued."},
   //207
  {name : "Morrowind<br>Smithing", skill : 14, skillReq : 60,
   xPos : 5, yPos : 63, preReqs : [201], nextPerk: -1,
   description : "Thanks to your studies of Dunmeri craftsmanship, you have gained the skills necessary<br> to create armors in the Morrowind style out of materials such as chitin or bone."},
   //208
  {name : "Orcish<br>Smithing", skill : 14, skillReq : 45,
   xPos : 60, yPos : 77, preReqs : [201], nextPerk: -1,
   description : "Orcish equipment is hard to craft, but you've got what it takes. <br> With the schematics, you can now craft and improve it easily and efficiently. Unlocks weapon trait: sturdy-gripped."},
   //209
  {name : "Dwarven<br>Smithing", skill : 14, skillReq : 55,
   xPos : 75, yPos : 67, preReqs : [201], nextPerk: -1,
   description : "You've studied some long-lost schematics of dwarven equipment and <br> acquired the secret knowledge of how to create and improve them efficiently. Unlocks weapon trait: reinforced."},
   //210
  {name : "Nordic<br>Smithing", skill : 14, skillReq : 65,
   xPos : 95, yPos : 63, preReqs : [201], nextPerk: -1,
   description : "You have become skilled at quicksilver-steel alloying. <br> Therefore, you can now forge Nordic armor and weapons. Unlocks weapon trait: hollowed."},
   //211
  {name : "Glass<br>Smithing", skill : 14, skillReq : 75,
   xPos : 29, yPos : 40, preReqs : [205,206,207], nextPerk: -1,
   description : "Crafting and improving Glass equipment is not for the unskilled, <br>but having studied intensely, you have overcome that challenge."},
   //212
  {name : "Ebony<br>Smithing", skill : 14, skillReq : 75,
   xPos : 71, yPos : 40, preReqs : [208,209,210], nextPerk: -1,
   description : "Ebony weapons and armour - some even fail at heating the metal. But not you. <br>Now that you've studied the related schematics, you can craft and improve ebony equipment with ease, as well as craft expert-tier master keys."},
   //213
  {name : "Daedric Smithing", skill : 14, skillReq : 100,
   xPos : 71, yPos : 20, preReqs : [212], nextPerk: -1,
   description : "The creation of daedric weapons and armor is a secret few mortals know - still, <br> somehow you managed to acquire the knowledge and skill to manage the feat."},
   //214
  {name : "Stalhrim<br>Smithing", skill : 14, skillReq : 85,
   xPos : 50, yPos : 43, preReqs : [211,212], nextPerk: -1,
   description : "Around the world, only a few know the secret of properly processing enchanted ice, <br>but you have uncovered this powerful lore and can now forge Stalhrim gear [Requires A New Source of Stalhrim completion]."},
   //215
  {name : "Draconic<br>Smithing", skill : 14, skillReq : 100,
   xPos : 50, yPos : 35, preReqs : [211,212], nextPerk: -1,
   description : "The scales and bones of dragons are probably the hardest material to work with, <br> but you've mastered even this art since you studied that old compendium."},
   //216
  {name : "Stealth", skill : 15, skillReq : 0,
   xPos : 50, yPos : 90, preReqs : [], nextPerk: 217,
   description : "You know the basics of moving silently and are harder to detect when sneaking <br> while not wearing any heavy armor."},
   //217
  {name : "Stealth", skill : 15, skillReq : 0,
   xPos : 50, yPos : 90, preReqs : [216], nextPerk: -1,
   description : "You are even harder to detect when sneaking even when wearing heavy armor."},
   //218
  {name : "Precise Movement", skill : 15, skillReq : 25,
   xPos : 35, yPos : 70, preReqs : [216], nextPerk: -1,
   description : "Your new found finesse allows you to move with greater precision."},
   //219
  {name : "Deft Strike", skill : 15, skillReq : 25,
   xPos : 57, yPos : 75, preReqs : [216], nextPerk: -1,
   description : "You've learned to exploit weaknesses in your foes' armor <br> when sneak attacking with daggers, bows or swords."},
   //220
  {name : "Anatomical Lore", skill : 15, skillReq : 50,
   xPos : 63, yPos : 50, preReqs : [219], nextPerk: -1,
   description : "Newfound knowledge of humanoid anatomy allows you to slay almost any <br> human-like creature outright with sneak attacks."},
   //221
  {name : "Advanced<br>Anatomical Lore", skill : 15, skillReq : 75,
   xPos : 55, yPos : 40, preReqs : [220], nextPerk: -1,
   description : "Your vast knowledge of anatomy allows you to perform devastating sneal attacks on almost any target."},
   //222
  {name : "Light<br>Steps", skill : 15, skillReq : 40,
   xPos : 42, yPos : 40, preReqs : [218], nextPerk: -1,
   description : "By distributing your weight more consciously,<br>you're able to avoid triggering pressure plates or similar mechanisms, and can strike with more force from a stealthy position."},
   //223
  {name : "Acrobatics", skill : 15, skillReq : 75,
   xPos : 50, yPos : 32, preReqs : [222], nextPerk: -1,
   description : "Your improved balance allows you to silently roll forward,<br>avoid getting knocked down except through magic and move even more quietly. Grants the One with the Shadows Rank I ability."},
   //224
  {name : "Shadowrunner", skill : 15, skillReq : 100,
   xPos : 65, yPos : 20, preReqs : [223], nextPerk: -1,
   description : "There's almost nothing you cannot evade.<br>You are even harder to detect, more silent and all falling damage is decreased. Grants the One with the Shadows Rank II ability."},
   //225
  {name : "Haggling", skill : 16, skillReq : 0,
   xPos : 25, yPos : 90, preReqs : [], nextPerk: 226,
   description : "You've learned how to deal with Skyrim's greedy merchants <br> and how to haggle for better prices."},
   //226
  {name : "Haggling", skill : 16, skillReq : 40,
   xPos : 25, yPos : 90, preReqs : [225], nextPerk: -1,
   description : "You've become an expert in dealing with Skyrim's greedy merchants <br> and how to demand more favorable prices. You've even able to convince merchants to use their reserve funds to pay for your goods."},
   //227
  {name : "Merchant", skill : 16, skillReq : 60,
   xPos : 22, yPos : 50, preReqs : [225], nextPerk: -1,
   description : "Your trading skills are good enough to sell almost anything to any merchant willing to trade with you, <br> and you can invest some of your gold with a shopkeeper to increase his available gold permanently."},
   //228
  {name : "Silver Tongue", skill : 16, skillReq : 25,
   xPos : 8, yPos : 70, preReqs : [225], nextPerk: -1,
   description : "You've spent quite some time improving your rhetorical skills and are now able to greatly influence<br>any conversation and to fascinate the opposite gender. You also get better offers at respective vendors."},
   //229
  {name : "Fencing", skill : 16, skillReq : 100,
   xPos : 33, yPos : 30, preReqs : [227], nextPerk: -1,
   description : "You've become so persuasive that you could make almost anyone believe that <br> your goods are of a legal origin."},
   //230
  {name : "Leadership", skill : 16, skillReq : 75,
   xPos : 23, yPos : 28, preReqs : [228], nextPerk: -1,
   description : "Your rhetorical skill makes you the perfect leader. By inspiring all those who fight by your side,<br>you encourage your followers to always push their abilities to their very limits."},
   //231
  {name : "Masquerade", skill : 16, skillReq : 50,
   xPos : 20, yPos : 20, preReqs : [228], nextPerk: 232,
   description : "You've become proficient at acting, and with the right equipment you can now disguise yourself,<br>although sometimes people can still tell that you are not truly one of them."},
   //232
  {name : "Masquerade", skill : 16, skillReq : 100,
   xPos : 20, yPos : 20, preReqs : [228,231], nextPerk: -1,
   description : "There is no role you cannot play, and your acting is so believable that there is almost no way <br> for others to see through your disguises."},
   //233
  {name : "Lore of the Thu'um", skill : 16, skillReq : 0,
   xPos : 75, yPos : 90, preReqs : [], nextPerk: -1,
   description : "You've been studying the lore and ancient script of dragons and the Thu'um.<br>Thus, you can shout more often."},
   //234
  {name : "Destructive Urge", skill : 16, skillReq : 0,
   xPos : 55, yPos : 80, preReqs : [233], nextPerk: -1,
   description : "The horrors that the Thu'um can inflict are etched into your mind just as you have seen them etched into stone.<br>Your Thu'um will wreak even greater havoc among your unfortunate foes."},
   //235
  {name : "Indomitable Force", skill : 16, skillReq : 0,
   xPos : 53, yPos : 60, preReqs : [233], nextPerk: -1,
   description : "You know what it means to be called Ysmir, Dragon of the North.<br> As you have withstood the test of Thu'um, so you will withstand the Thu'um of others."},
   //236
   {name : "Spiritual Equilibrium", skill : 16, skillReq : 0,
   xPos : 57, yPos : 35, preReqs : [233], nextPerk: -1,
   description : "You have been guided in meditating on the Thu'um.<br>Now your shouts linger, lasting longer than they did before."},
   //237
   {name : "The Way of the Voice", skill : 16, skillReq : 0,
   xPos : 60, yPos : 25, preReqs : [233], nextPerk: -1,
   description : "You've meditated thoroughly, and acquired vast insights into the Way of the Voice. <br> Thus, you can call upon the power of your Thu'um rapidly once each day."},
   //238
   {name : "Great Weapon Mastery", skill : 17, skillReq : 0,
   xPos : 50, yPos : 90, preReqs : [], nextPerk: 239,
   description : "Your improved fighting techniques increase your damage dealt with two-handed weapons.<br>[damage x 1.1]"},
   //239
   {name : "Great Weapon Mastery", skill : 17, skillReq : 35,
   xPos : 50, yPos : 90, preReqs : [238], nextPerk: -1,
   description : "Your improved fighting techniques increase your damage dealt with two-handed weapons even more.<br>[damage x 1.2]"},
   //240
   {name : "Barbaric Might", skill : 17, skillReq : 15,
   xPos : 50, yPos : 65, preReqs : [238], nextPerk: -1,
   description : "Your power attacks become mighty blows that will penetrate armor and are less tiring. Backwards power attacks deal more damage.<br>[-33% power attack stamina cost, +5% armor penetration, 1.25x damage with backwards power attacks]"},
   //241
   {name : "Battle<br>Axe Focus", skill : 17, skillReq : 25,
   xPos : 38, yPos : 55, preReqs : [240], nextPerk: 242,
   description : "You've become familiar with battle axes.<br>[10% more damage, +10% armor penetration]"},
   //242
   {name : "Battle<br>Axe Focus", skill : 17, skillReq : 50,
   xPos : 38, yPos : 55, preReqs : [240,241], nextPerk: 243,
   description : "You've become an advanced battle axe fighter.<br>[15% more damage, +20% armor penetration]"},
   //243
   {name : "Battle<br>Axe Focus", skill : 17, skillReq : 75,
   xPos : 38, yPos : 55, preReqs : [240,241,242], nextPerk: -1,
   description : "You've become a master of battle axe combat.<br>[30% more damage, +30% armor penetration]"},
   //244
   {name : "Greatsword<br>Focus", skill : 17, skillReq : 25,
   xPos : 62, yPos : 55, preReqs : [240], nextPerk: 245,
   description : "You've learned the basics of greatsword combat.<br>[+8% attack speed with greatswords, +7% armor penetration]"},
   //245
   {name : "Greatsword<br>Focus", skill : 17, skillReq : 50,
   xPos : 62, yPos : 55, preReqs : [240,244], nextPerk: 246,
   description : "You've acquired the advanced techniques of greatsword combat.<br>[+16% attack speed with greatswords, +14% armor penetration]"},
   //246
   {name : "Greatsword<br>Focus", skill : 17, skillReq : 75,
   xPos : 62, yPos : 55, preReqs : [240,244,245], nextPerk: -1,
   description : "You've become a master of greatsword combat.<br>[+24% attack speed with greatswords, +21% armor penetration]"},
   //247
   {name : "Warhammer<br>Focus", skill : 17, skillReq : 25,
   xPos : 62, yPos : 75, preReqs : [240], nextPerk: 248,
   description : "You've learned some techniques to crush armor with warhammers.<br>[5% more power attack damage, +15% armor penetration]"},
   //248
   {name : "Warhammer<br>Focus", skill : 17, skillReq : 50,
   xPos : 62, yPos : 75, preReqs : [240,247], nextPerk: 249,
   description : "You've become an advanced warhammer fighter and know how to find weak spots in enemy armor.<br>[10% more power attack damage, +30% armor penetration]"},
   //249
   {name : "Warhammer<br>Focus", skill : 17, skillReq : 75,
   xPos : 62, yPos : 75, preReqs : [240,247,248], nextPerk: -1,
   description : "You've become a masterly warhammer fighter, rendering armor almost useless.<br>[15% more power attack damage, +45% armor penetration]"},
   //250
   {name : "Staff<br>Focus", skill : 17, skillReq : 25,
   xPos : 38, yPos : 75, preReqs : [240], nextPerk: 251,
   description : "You've learned the basics of quarterstaff combat.<br>[+10% attack speed with quarterstaves, +12% armor penetration]"},
   //251
   {name : "Staff<br>Focus", skill : 17, skillReq : 50,
   xPos : 38, yPos : 75, preReqs : [240,250], nextPerk: 252,
   description : "You've acquired the advanced techniques of quarterstaff combat.<br>[+20% attack speed with quarterstaves, +24% armor penetration]"},
   //252
   {name : "Staff<br>Focus", skill : 17, skillReq : 75,
   xPos : 38, yPos : 75, preReqs : [240,250,251], nextPerk: -1,
   description : "You've become a master of quarterstaff combat.<br>[+30% attack speed with quarterstaves, +36% armor penetration]"},
   //253
   {name : "Devastating Strike", skill : 17, skillReq : 50,
   xPos : 56, yPos : 40, preReqs : [240], nextPerk: -1,
   description : "Your two-handed combat style has improved so much that all power attacks have become devastating.<br>[10% more power attack damage]"},
   //254
   {name : "Cleave", skill : 17, skillReq : 50,
   xPos : 44, yPos : 40, preReqs : [240], nextPerk: -1,
   description : "Your power attacks are truly devastating and you can cut down multiple foes with a single sweeping blow.<br>[sideways power attack can hit multiple targets]"},
   //255
   {name : "Devastating Charge", skill : 17, skillReq : 75,
   xPos : 50, yPos : 15, preReqs : [253,254], nextPerk: -1,
   description : "You've learned to perform a leaping power attack while sprinting, reducing your enemies to smithereens.<br>[Able to do sprinting power attack]"},
   //256
   {name : "Reckless Strike", skill : 17, skillReq : 85,
   xPos : 50, yPos : 10, preReqs : [255], nextPerk: -1,
   description : "You've mastered the use of your strongest swings, reducing the damage you take while power attacking. Your sideways power attacks can knock down enemies, and your backwards power attacks reflect incoming spells."},
   //267
   {name : "Mighty Strike", skill : 17, skillReq : 100,
   xPos : 50, yPos : 5, preReqs : [256], nextPerk: -1,
   description : "You can kill almost any foe with a single strike of your two-hander, as your blows even fell giants with ease.<br>[25% more damage against enemies with full health.]"},

]
};

addPerkData(three3bftweaksdata);