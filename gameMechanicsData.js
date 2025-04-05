const gameMechanicsData = {
  
  initialPerks: 3,
  
  oghmaData : {
    perksGiven : 3,
    hmsGiven : [50,100,100]
  },
  
  leveling: {
    base : 75,
    mult : 25,
    hmsGiven : [5,7,6],
	extraHms : [2,0,0],
	extraMR : 0.3,
	extraCapLevel : 20
  },
  
  supernatural: {
	  vampire : [ 	50,					//health
					50,					//magicka
					50,					//stamina
					115,				//Disease Resist
					100 				//Poison Resist
					],
	werewolf : [	50,					//health
					50,					//Stamina
					25,					//carryweight
					//15,					//unarmed
					25,					//stamina regen
					-15,				//spell Cost
					-33,				//magicka regen
					-50					//poison Resist
					]
  },
  
  derivedAttributes : {
    attribute : ["Disease Resist",
                 "Poison Resist",
				 "Carry Weight",
//				 "Unarmed Damage",
				 "Magicka Regeneration",
				 "Stamina Regeneration",
				 "Damage Resistance",
				 "1H/2H Damage",
				 "Shout Cooldown Reduction",
				 "Magic Resist",
                 "Spell Cost Reduction",
				 "Spell Power",
                 "Move Speed",
                 "Marksman Damage",
				 "Attack Speed"],
    isPercent : [true,
                 true,
                 false,			 
//                 false,						// Unarmed
                 true,
                 true,
                 true,
                 true,
                 true,
                 true,
                 true,
				 true,
				 true,
				 true,
				 true],
    increase :  [1.0,
                 1.0,
                 2.5,
//                 ,								// Unarmed
                 2.0,
                 2.5,
                 0.75,  						
                 1.25,
                 0.25,
                 0.75,
                 0.75,
				 0.5,
				 0.3,
				 1.5,
				 0.005
				]
  }
};

ProcessGameMechanicsData(gameMechanicsData);
