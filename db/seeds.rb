
user1 = User.create!(user_name: "Jon", email: "J@yahoo.com", password: "password")
user2 = User.create!(user_name: "Bill", email: "B@aol.com", password: "password")
user3 = User.create!(user_name: "Kate", email: "K@aol.com", password: "password")
user4 = User.create!(user_name: "Jess", email: "J@gmail.com", password: "password")

campaign1 = Campaign.create!(name: "Alpha Squad", description: "An intro to DnD", dm: user1)
# campaign2 = Campaign.create!(name: "Omega Squad", description: "Here are some other guys you may like", dm: user1)
# campaign3 = Campaign.create!(name: "Hobbit Time", description: "Chilling with the little dudes", dm: user4)

pc1 = Pc.create!(user: user2, name: "Galadriel", campaign: campaign1, avatar: "https://s3.amazonaws.com/dmscreen/pcs/enchntress.jpg", level: 20, character_class:"Sorceress", bio:"Among the eldest and most powerful Eldar.")
pc2 = Pc.create!(user: user3, name: "Aragorn", campaign: campaign1, avatar: "https://s3.amazonaws.com/dmscreen/pcs/arragorn.jpg", level: 12, character_class:"Ranger", bio:"Last rightful king of the Númenóreans.")
pc3 = Pc.create!(user: user4, name: "Gandalph", campaign: campaign1, avatar: "https://s3.amazonaws.com/dmscreen/pcs/Gandalf.jpg", level: 17, character_class:"Wizard", bio:"The wandering wizard.")
pc4 = Pc.create!(user: user2, name: "Gimli", campaign: campaign2, avatar: "https://s3.amazonaws.com/dmscreen/pcs/Gimli.jpg", level: 10, character_class:"Fighter", bio:"Son of Gloin. A great fighter.")
pc5 = Pc.create!(user: user3, name: "Legolas", campaign: campaign2, avatar: "https://s3.amazonaws.com/dmscreen/pcs/Legolas.png", level: 10, character_class:"Fighter", bio:"A very handsome elf prince.")
pc6 = Pc.create!(user: user4, name: "Boromir", campaign: campaign2, avatar: "https://s3.amazonaws.com/dmscreen/pcs/boromir.jpg", level: 8, character_class:"Knight", bio:"One does not simply write a biography of Boramir.")
pc7 = Pc.create!(user: user1, name: "Frodo", campaign: campaign3, avatar: "https://s3.amazonaws.com/dmscreen/pcs/Frodo.jpg", level: 4, character_class:"Rogue", bio:"The ring bearer.")
pc8 = Pc.create!(user: user2, name: "Merry", campaign: campaign3, avatar: "https://s3.amazonaws.com/dmscreen/pcs/Merry.jpg", level: 2, character_class:"Scout", bio:"Fond of drinking and smoking")
pc9 = Pc.create!(user: user3, name: "Pippin", campaign: campaign3, avatar: "https://s3.amazonaws.com/dmscreen/pcs/pippin.jpg", level: 2, character_class:"Bard", bio:"Has no talents to contribute whatsoever.")

dungeon1 = Dungeon.create!(name: "The Forgotten Forge", description: "A dwarven forge, long forgotten, full Adventures.", cover_picture: "https://s3.amazonaws.com/dmscreen/Maps/Forge-of-Fury.jpg", master_floor_plan: "https://s3.amazonaws.com/dmscreen/Maps/PNG/RM_0_FLOORPLAN_FORGE_V2.png" )
dungeon2 = Dungeon.create!(name: "The Sunless Citadelle", description: "A Citadelle, long forgotten, full of monsters.", cover_picture: "https://s3.amazonaws.com/dmscreen/Maps/sunless-citadel.jpg", master_floor_plan: "https://s3.amazonaws.com/dmscreen/Maps/FloorPlan-Forge.jpg" )

room1 = Room.create!(
  dungeon: dungeon1,
  picture:"https://s3.amazonaws.com/dmscreen/Maps/PNG/rm_01_V2.png",
  room_id: 1,
  description: "The path climbs up one last steep switchback toward a bare shoulder of rock. The hillside climbs steeply on your right and drops away precipitously on your left. Debris and rubbish lie scattered over the last hundred yards or so of the path—discarded water skins, bits of charred bone, and splintered casks or kegs discarded carelessly from the path. Up ahead, the path opens up onto a wide ledge and then doubles back sharply into the mountainside. Two bestial humanoids in scale armor stand watch on the ledge. They appear to be inattentive and bored with their duty.",
  monsters:"Orcs (2): hp 8, 6; longbow (1d8/×3), greataxe, 1d10")
room2 = Room.create!(
  dungeon: dungeon1,
  picture:"https://s3.amazonaws.com/dmscreen/Maps/PNG/rm_02_V2.png",
  room_id: 2,
  description: "Broad, shallow steps lead up a steep fissure to the south and turn east into the mountainside. Here, a broad entrance has been carved out of the stone. Marble steps cracked with age and veined with green moss lead up to a strong double-door of carved stone, 8 feet wide and almost 10 feet tall. Two arrow slits high on the north and south walls command this area.", traps:"Fire Trap: CR 2; alchemist’s fire causes 4d6 points of damage in first round, then causes 1d6 points of damage each round after that; Reflex save each round halves damage first round and negates damage after first round (DC 23), no saves needed after first successful save; Search (DC 23); Disable Device (DC 23), takes 2d4 rounds.",
  monsters:"Its a Goblin! HP:10 AC:13 Attack: Longspear +3 to hit; 1d4-1 damage.")
room3 = Room.create!(dungeon: dungeon1, picture:"https://s3.amazonaws.com/dmscreen/Maps/PNG/rm_03_V2.png", room_id: 3, description: "The great door opens into a large hall. You are stand ing on a narrow ledge overlooking a deep, dark crevasse that cuts the room in two, completely obstruct ing passage to the opposite side. A dangerous looking rope bridge, frayed and thin, spans the gap. Water gurgles and rushes somewhere far below. Two copper braziers burn brightly on either side of the door, illuminating this half of the room. You can just barely make out the opposite platform on the other side of the chasm.", traps:"Arrow trap: CR2 1d6 damage to the first player in the room. Reflex save (DC14) negates.", treasure:"A small pouch containing 3 pearls, worth 25gp each.", monsters:"Orcs (2): hp 8, 6; longbow (1d8/×3), greataxe, 1d10")
room4 = Room.create!(dungeon: dungeon1, picture:"https://s3.amazonaws.com/dmscreen/Maps/PNG/rm_04_V2.png", room_id: 4, description: "The secret door slides aside to reveal a narrow passage descending a flight of stairs to open up into a small chamber below. Light from outside slants into the room through a series of narrow embrasures, posts for archers watching the entrance to the dwarf-halls.", traps: "CR 2; poison gas creates a 20-foot cone, initial Strength damage of 1d4 points, secondary Strength damage of 1d4 points; Fort save negates all (DC 13)", treasure:"Underneath a loose stone there are a potion of Cure Minor Wounds.")
room5 = Room.create!(dungeon: dungeon1, picture:"https://s3.amazonaws.com/dmscreen/Maps/PNG/rm_05_V2.png", room_id: 5, description: "This chamber is a natural cave with carefully smoothed walls and floor. Wet stone gleams, and you can discern at least four exits leading off into darkness. Red coals glow in the darkness of the far righthand passageway, and a crude wooden cage bars the closer right-hand passageway. The room is littered with orcish sleeping furs, loot, and rubbish.")
room6 = Room.create!(dungeon: dungeon1, picture:"https://s3.amazonaws.com/dmscreen/Maps/PNG/rm_06_V2.png", room_id: 6, description: "A row of rough-hewn sapling trunks forms a crude but serviceable cage across the mouth of this small cave. A door locked with an iron padlock secures the room. Inside, you see two filthy prisoners dressed in tattered rags, crowding close to the door. “Thank Yondalla!” the first one cries out. “WE'RE RESCUED!!!”")
room7 = Room.create!(dungeon: dungeon1, picture:"https://s3.amazonaws.com/dmscreen/Maps/PNG/rm_07_V2.png", room_id: 7, description: "A large, smoky fire crackles in the center of this room, Battered pots and kettles are stacked all over; clearly, this serves as a crude kitchen. You notice a distinct draft drawing the smoke up through a rough hole in the ceiling of the chamber.")
room8 = Room.create!(dungeon: dungeon1, picture:"https://s3.amazonaws.com/dmscreen/Maps/PNG/rm_08_V2.png", room_id: 8, treasure: "A small locked strongbox hidden behind a loose stone contains 180 gp and a flask of holy water.",description: "Haphazard stacks of crates, barrels, sacks, and bundles litter this long, narrow cavern. The orcs appeared to have had some success in their raids of the small settlements and mountain roads in the area. To the north, two finished stone passageways lead east and west; to the south, an old well is full of murky water.")
room9 = Room.create!(dungeon: dungeon1, picture:"https://s3.amazonaws.com/dmscreen/Maps/PNG/rm_09_V2.png", room_id: 9, description: "The secret door pivots in its center, revealing a chamber of finished stonework about 30 feet deep and 15 feet wide. The room is cluttered with crude furnishings, and the air is hazy with the smoke of a small cooking fire. Dozens of yellowed skulls are suspended from the ceiling by fraying ropes strung through holes punched in the bone. An orc in a ragged black robe looks up from her work with her face twisted in an expression of sheer rage!", monsters:"Burdug: Female orc Adp3; CR 3; Medium-size humanoid (orc); hp 20; Init +1 (Dex); Spd 30 ft.; AC 14; Atk +2 melee (1d4/ 19–20/×2 crit, dagger); SQ 60-ft. darkvision, light sensitivity; AL CE; SV Fort +3, Ref +2, Will +5; Str 11, Dex 12, Con 13, Int 9, Wis 14, Cha 10. Skills and Feats: Alchemy +0, Concentration +2, Hide +2, Listen +3, Move Silently +2, Spot +3; Alertness, Combat Casting. Spells Prepared (3/2): 0—cure minor wounds, ghost sound, guidance; 1st—cause fear, sleep.")
room10 = Room.create!(dungeon: dungeon1, picture:"https://s3.amazonaws.com/dmscreen/Maps/PNG/rm_10_V2.png", room_id: 10, description: "The ceiling soars 30 feet high in the center of this impressive chamber, and the walls are carved in images of dwarves at their forges. Two large stone doors exit to the north and south. Several old skeletons lie scattered near the northern door. A gate of wrought iron stands in the western wall.")
room11= Room.create!(dungeon: dungeon1, picture:"https://s3.amazonaws.com/dmscreen/Maps/PNG/rm_11_V2.png", room_id: 11, description: "Barrels, crates, and sacks of foodstuffs line the walls of this chamber. Among the loot, four oversized straw pallets and other simple furnishings show that this room now serves as a bunkroom.")
room12 = Room.create!(dungeon: dungeon1, picture:"https://s3.amazonaws.com/dmscreen/Maps/PNG/rm_12_V2.png", room_id: 12, description: "A short flight of stairs leads up to a large, ironbound door. A bloodstained human skull is fixed to the center of the door by an iron spike. ")
room13 = Room.create!(dungeon: dungeon1, picture:"https://s3.amazonaws.com/dmscreen/Maps/PNG/rm_13_V2.png", room_id: 13, description: "At the end of this passageway stands the statue of a fierce-looking dwarf in heavy mail armor. The stone warrior holds a sword in one hand and a smith’s hammer in the other. The statue stands on a large stone pedestal; the whole structure is about 7 feet tall and must weigh many hundreds of pounds.", treasure: "All the best treasure and a Kit-Kat Bar")
room14 = Room.create!(dungeon: dungeon1, picture:"https://s3.amazonaws.com/dmscreen/Maps/PNG/rm_14_V2.png", room_id: 14, description: "This large chamber is filled with rough-hewn bunks, tables, and chairs, and the floor is strewn with filthy pelts. At a glance it appears that perhaps a dozen or so humanoids might live here.", monsters:"Old Yarrack: Male orc War3; CR 3; Medium-size humanoid (orc); hp 22; Init +2 (Dex); Spd 30 ft.; AC 18; Atk +5 melee (1d6+1/×3, masterwork handaxe), +2 ranged (1d6+1, throwing axe); SQ 60-ft. darkvision, light sensitivity; AL CE; SV Fort +4, Ref +3, Will +4; Str 12, Dex 14, Con 12, Int 13, Wis 12, Cha 14. Skills and Feats: Climb +3, Hide +6, Intimidate +3, Listen +4, Move Silently +6, Sense Motive +3, Spot +3; Alertness, Iron Will. Possessions: Scale mail, large steel shield, masterwork hand axe, 3 throwing axes.")
room15 = Room.create!(dungeon: dungeon2, room_id: 1, description: "This is the other 1st room", monsters:"Ugly Monsters! Woof.")
room16 = Room.create!(dungeon: dungeon2, room_id: 2, description: "This is the other 2nd room", traps:"CR 2; poison gas creates a 20-foot cone, initial Strength damage of 1d4 points, secondary Strength damage of 1d4 points; Fort save negates all (DC 13)", monsters:"Theres a monster here", treasure:"Here be Treasure!")

abutter1 = Abutter.create!(ingress: room1, egress: room2)
abutter2 = Abutter.create!(ingress: room2, egress: room1)
abutter3 = Abutter.create!(ingress: room2, egress: room3)
abutter4 = Abutter.create!(ingress: room3, egress: room2)
abutter5 = Abutter.create!(ingress: room3, egress: room5)
abutter6 = Abutter.create!(ingress: room5, egress: room3)
abutter7 = Abutter.create!(ingress: room3, egress: room4)
abutter8 = Abutter.create!(ingress: room4, egress: room3)
abutter9 = Abutter.create!(ingress: room4, egress: room14)
abutter10 = Abutter.create!(ingress: room14, egress: room4)
abutter11 = Abutter.create!(ingress: room5, egress: room6)
abutter12 = Abutter.create!(ingress: room6, egress: room5)
abutter13 = Abutter.create!(ingress: room5, egress: room7)
abutter14 = Abutter.create!(ingress: room7, egress: room5)
abutter15 = Abutter.create!(ingress: room5, egress: room8)
abutter16 = Abutter.create!(ingress: room8, egress: room5)
abutter17 = Abutter.create!(ingress: room8, egress: room9)
abutter18 = Abutter.create!(ingress: room9, egress: room8)
abutter19 = Abutter.create!(ingress: room8, egress: room11)
abutter20 = Abutter.create!(ingress: room11, egress: room8)
abutter21 = Abutter.create!(ingress: room8, egress: room12)
abutter22 = Abutter.create!(ingress: room12, egress: room8)
abutter23 = Abutter.create!(ingress: room8, egress: room13)
abutter24 = Abutter.create!(ingress: room13, egress: room8)
abutter25 = Abutter.create!(ingress: room13, egress: room14)
abutter26 = Abutter.create!(ingress: room14, egress: room13)
abutter27 = Abutter.create!(ingress: room8, egress: room10)
abutter28 = Abutter.create!(ingress: room10, egress: room8)
abutter29 = Abutter.create!(ingress: room10, egress: room9)
abutter30 = Abutter.create!(ingress: room9, egress: room10)

dc1 = DungeonCampaign.create!(campaign: campaign1, dungeon: dungeon1)
dc2 = DungeonCampaign.create!(campaign: campaign2, dungeon: dungeon1)
dc3 = DungeonCampaign.create!(campaign: campaign3, dungeon: dungeon2)
