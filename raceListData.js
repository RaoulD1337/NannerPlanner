const threebftweaksRaceData = {
  name : "3BFTweaks",
  id: 0,
  
  races : [
    {
     name: "Argonian", 
     startingHMS: [105,90,120], 
     startingCW: 105, speedBonus: 0,
     hmsBonus: [30,0,0], 
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
addRaceData(threebftweaksRaceData);