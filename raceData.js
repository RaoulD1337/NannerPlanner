const raceData = {
  
  races : [
    {
     name: "Argonian", 
     startingHMS: [105,90,120], 
     startingCW: 105, speedBonus: 0,
     hmsBonus: [30,0,0], 
	 description: "Argonians are the reptilian denizens of Black Marsh. Years of defending their borders have made them experts in stealth and evasion, and their natural abilities make them equally at home in water and on land. They are resistant to diseases and poisons and enjoy raw meat. Their Histskin allows them to quickly heal their wounds at all times, while their scaly skin reduces all physical damage and offers resistance to shock.",
     startingHMSRegen: [0,.92,1.6], 
     unarmedDam: 10,
     startingSkills : [ 5,       //Alchemy
                       10,       //Alteration
                        5,       //Block
                        5,       //Conjuration
                        5,       //Destruction
                        5,       //Enchanting
                       15,       //Evasion
                        5,       //Heavy Armor
                        5,       //Illusion
                       15,       //Lockpicking
                        5,       //Marksman
                        5,       //One-handed
                       10,       //Dexterity
                       10,       //Restoration
                        5,       //Smithing
                       10,       //Sneak
                        5,       //Speech
                        5]       //Two-handed
    },
    {
     name: "Breton", 
     startingHMS: [90,120,90], 
     startingCW: 85, speedBonus: 0,
     hmsBonus: [30,0,0], 
	 description: "Bretons, the inhabitants of the province of High Rock, are the human descendants of the Elves and the ancient race of the Nedes. While Bretons are physically weak, their mixed blood allows them to gain magicka when struck. They can tap into magicka more than any other human race and they are particularly capable in the school of Conjuration. Their magic resistance blocks one fifth of incoming spell damage and all Bretons possess at least a decently higher knowledge of cooking, granting access to special, more potent recipes.",
     startingHMSRegen: [0,1.05,1.5], 
     physDamage: [0,0,0,7],
     startingSkills : [10,       //Alchemy
                       10,       //Alteration
                        5,       //Block
                       15,       //Conjuration
                        5,       //Destruction
                        5,       //Enchanting
                        5,       //Evasion
                        5,       //Heavy Armor
                       10,       //Illusion
                        5,       //Lockpicking
                        5,       //Marksman
                        5,       //One-handed
                        5,       //Dexterity
                       10,       //Restoration
                        5,       //Smithing
                        5,       //Sneak
                       10,       //Speech
                        5]       //Two-handed
    },
    {
     name: "Dark Elf", 
     startingHMS: [105,105,105], 
     startingCW: 100, speedBonus: 0,
     hmsBonus: [30,0,0], 
	 description: "The Dunmer, or Dark Elves, are the ash-skinned, red-eyed, Elven people of Vvardenfell. They combine powerful intellects with strong and agile physiques, producing excellent warriors and evokers. They are extremely resistant to fire, blocking one half of incoming fire damage and ignoring a further quarter of any incoming fire, and they naturally intensify all offensive spells and infusions. Dunmer keep close contact with their ancestors, and may call upon them to form a protective shield which negates both magic and physical damage, though the process is exhausting.",
     startingHMSRegen: [0,.95,1.65], 
     unarmedDam: 9,
     startingSkills : [ 5,       //Alchemy
                       10,       //Alteration
                        5,       //Block
                        5,       //Conjuration
                       15,       //Destruction
                        5,       //Enchanting
                       10,       //Evasion
                        5,       //Heavy Armor
                       10,       //Illusion
                        5,       //Lockpicking
                        5,       //Marksman
                       15,       //One-handed
                        5,       //Dexterity
                        5,       //Restoration
                        5,       //Smithing
                       10,       //Sneak
                        5,       //Speech
                        5]       //Two-handed
    },
    {
     name: "High Elf", 
     startingHMS: [90,130,80], 
     startingCW: 90, speedBonus: 0,
     hmsBonus: [30,45,0], 
	 description: "The Altmer of Summerset Isle are called High Elves in the Empire, describing both their physical appearance and their snobbish personality. The arcane ability of High Elves surpasses all other races in Tamriel, and they may channel Magicka at will, though the process is exhausting. While somewhat weaker in physical combat, Altmer must be especially wary of elemental damage, taking a quarter more damage from all elemental sources.",
     startingHMSRegen: [0,1.05,1.55], 
     unarmedDam: 5,
     startingSkills : [ 5,       //Alchemy
                       10,       //Alteration
                        5,       //Block
                       10,       //Conjuration
                       15,       //Destruction
                       10,       //Enchanting
                        5,       //Evasion
                        5,       //Heavy Armor
                       15,       //Illusion
                        5,       //Lockpicking
                        5,       //Marksman
                        5,       //One-handed
                        5,       //Dexterity
                       10,       //Restoration
                        5,       //Smithing
                        5,       //Sneak
                        5,       //Speech
                        5]       //Two-handed
    },
    {
     name: "Imperial", 
     startingHMS: [115,105,115], 
     startingCW: 110, speedBonus: 0,
     hmsBonus: [30,0,30], 
	 description: "The cosmopolitan citizens of Cyrodiil are descended from the founders of the glorious Empire that has influenced Tamriel's history throughout the eras. Imperials are shrewd traders, skilled in both magic and combat, and possess exceptional physical attributes due to the martial discipline of the schools of Cyrodiil. They naturally possess strong charisma and are much more persuasive.",
     startingHMSRegen: [0,0.92,1.8], 
     unarmedDam: 8,
     startingSkills : [ 5,       //Alchemy
                        5,       //Alteration
                       10,       //Block
                        5,       //Conjuration
                       10,       //Destruction
                        5,       //Enchanting
                        5,       //Evasion
                       10,       //Heavy Armor
                        5,       //Illusion
                        5,       //Lockpicking
                        5,       //Marksman
                       10,       //One-handed
                        5,       //Dexterity
                       15,       //Restoration
                        5,       //Smithing
                        5,       //Sneak
                       15,       //Speech
                        5]       //Two-handed
    },
    {
     name: "Khajiit", 
     startingHMS: [95,90,125], 
     startingCW: 95, speedBonus: 10,
     hmsBonus: [30,0,0], 
	 description: "The Khajiit are a race of feline humanoids hailing from the province of Elsweyr, well-known as great merchants but also as smugglers and thieves. They are very fast and outrun all other races which, combined with a high stamina reserve, makes them fearsome skirmishers. However, they are seldom gifted with the skill to harness magical forces. All Khajiit can see in the dark at will and eat raw meat, and their sharp claws are as lethal as knives. Further, as naturally as they pick locks or pockets, Khajiit are adept at finding gaps in enemy armor, naturally penetrating 10% of armor regardless of weapon and have +1 lockpicking expertise.",
     startingHMSRegen: [0,.83,1.65], 
     unarmedDam: 40,
     startingSkills : [10,       //Alchemy
                        5,       //Alteration
                        5,       //Block
                        5,       //Conjuration
                        5,       //Destruction
                        5,       //Enchanting
                        5,       //Evasion
                        5,       //Heavy Armor
                        5,       //Illusion
                       10,       //Lockpicking
                       10,       //Marksman
                       10,       //One-handed
                       10,       //Dexterity
                        5,       //Restoration
                        5,       //Smithing
                       20,       //Sneak
                        5,       //Speech
                        5]       //Two-handed
    },
    {
     name: "Nord", 
     startingHMS: [120,80,120], 
     startingCW: 115, speedBonus: 0,
     hmsBonus: [30,0,0], 
	 description: "Skyrim's Nords are tall and fair, with a culture which values honor, glory, and loyalty to family and community. Nords have come to distrust magic, but excel in physical warfare. They are greatly resistant to frost, reducing it by half and ignore a further quarter of any incoming cold, while their innate resistance to pain grants them immunity to stamina and magicka loss when struck. Nords are also naturally predisposed towards the Thu'um, and recover from Shouts 20% more quickly should they learn the art.",
     startingHMSRegen: [0,.88,1.65], 
     unarmedDam: 9,
     startingSkills : [ 5,       //Alchemy
                        5,       //Alteration
                       10,       //Block
                        5,       //Conjuration
                        5,       //Destruction
                        5,       //Enchanting
                       10,       //Evasion
                       10,       //Heavy Armor
                        5,       //Illusion
                        5,       //Lockpicking
                        5,       //Marksman
                       10,       //One-handed
                        5,       //Dexterity
                        5,       //Restoration
                       15,       //Smithing
                        5,       //Sneak
                        5,       //Speech
                       15]       //Two-handed
    },
    {
     name: "Orc", 
     startingHMS: [135,60,110], 
     startingCW: 145, speedBonus: 0,
     hmsBonus: [50,0,0], 
	 description: "The Orsimer or Pariah Folk, commonly called Orcs, come from Orsinium in the west. Their savage appearance and customs sometimes cause fear, but they have won acceptance for their distinguished service in the Legion. Orcs' superior strength makes them formidable warriors, though use of magic requires extensive training. Their berserker strength makes their melee strikes incredibly fearsome, but they burn stamina more quickly than other races with their attacks.",
     startingHMSRegen: [0,.83,1.8], 
     unarmedDam: 10,
     startingSkills : [ 5,       //Alchemy
                        5,       //Alteration
                       10,       //Block
                        5,       //Conjuration
                        5,       //Destruction
                        5,       //Enchanting
                       10,       //Evasion
                       15,       //Heavy Armor
                        5,       //Illusion
                        5,       //Lockpicking
                        5,       //Marksman
                       10,       //One-handed
                        5,       //Dexterity
                        5,       //Restoration
                       15,       //Smithing
                        5,       //Sneak
                        5,       //Speech
                       10]       //Two-handed
    },
    {
     name: "Redguard", 
     startingHMS: [110,80,120], 
     startingCW: 105, speedBonus: 5,
     hmsBonus: [30,0,0], 
	 description: "The dark-skinned, wiry-haired Redguards of Hammerfell seem born for battle, though their proud and independent spirits suit free-ranging heroism more. They have a hardy constitution and natural resistance to poison and disease, but tend to shun their magic. Their naturally potent adrenaline keeps them going longer in combat and they move and swing weapons with unmatched speed, though their strikes are somewhat less potent.",
     startingHMSRegen: [0,.83,1.7], 
     unarmedDam: 8,
     startingSkills : [ 5,       //Alchemy
                       10,       //Alteration
                       15,       //Block
                        5,       //Conjuration
                       10,       //Destruction
                        5,       //Enchanting
                        5,       //Evasion
                        5,       //Heavy Armor
                        5,       //Illusion
                        5,       //Lockpicking
                       10,       //Marksman
                       15,       //One-handed
                        5,       //Dexterity
                        5,       //Restoration
                       10,       //Smithing
                        5,       //Sneak
                        5,       //Speech
                        5]       //Two-handed
    },
    {
     name: "Wood Elf", 
     startingHMS: [100,100,120], 
     startingCW: 85, speedBonus: 0,
     hmsBonus: [30,0,0], 
	 description: "The Bosmer, or Wood Elves, originate from the sacred forest of Valenwood. Their culture is highly carnivorous and even cannibalistic, derived from the Green Pact with the forest in which they harm no plant in Valenwood. Their dexterity makes them excellent scouts and thieves, and there are no finer archers in all of Tamriel. They have a natural resistance to diseases and can command animals by bribing them with the flesh of their foes.",
     startingHMSRegen: [0,.88,1.65], 
     unarmedDam: 5,
     startingSkills : [10,       //Alchemy
                        5,       //Alteration
                        5,       //Block
                        5,       //Conjuration
                        5,       //Destruction
                        5,       //Enchanting
                       15,       //Evasion
                        5,       //Heavy Armor
                        5,       //Illusion
                       10,       //Lockpicking
                       15,       //Marksman
                        5,       //One-handed
                       10,       //Dexterity
                        5,       //Restoration
                        5,       //Smithing
                       10,       //Sneak
                        5,       //Speech
                        5]       //Two-handed
    }
  ]
};

ProcessRaceData(raceData);