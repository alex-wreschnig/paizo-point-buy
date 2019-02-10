var pointBuy = function () {

	var lists = {
		"core":2,
		"pfs":3,
		"boon":4,
		"all":5
	};

	var costs = {
		"7": "-4",
		"8": "-2",
		"9": "-1",
		"10": "0",
		"11": "1",
		"12": "2",
		"13": "3",
		"14": "5",
		"15": "7",
		"16": "10",
		"17": "13",
		"18": "17"
	};
	
	var races = [
		{
			"name": "Human",
			"list": 1,
			"custom": 1,
			"note":"add +2 to any one ability score",
			"strength": 0,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 0
		},
		{
			"name": "Dwarf",
			"list": 1,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": -2
		},
		{
			"name": "Elf",
			"list": 1,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": -2,
			"intelligence": 2,
			"wisdom": 0,
			"charisma": 0
		},
		{
			"name": "Gnome",
			"list": 1,
			"custom": 0,
			"note":"",
			"strength": -2,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Half-Elf",
			"list": 1,
			"custom": 1,
			"note":"add +2 to any one ability score",
			"strength": 0,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 0
		},
		{
			"name": "Half-Orc",
			"list": 1,
			"custom": 1,
			"note":"add +2 to any one ability score",
			"strength": 0,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 0
		},
		{
			"name": "Halfling",
			"list": 1,
			"custom": 0,
			"note":"",
			"strength": -2,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Ifrit",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": -2,
			"charisma": 2
		},
		{
			"name": "Ifrit (Magma Ifrit)",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": -2,
			"constitution": 2,
			"intelligence": 2,
			"wisdom": 0,
			"charisma": 0
		},
		{
			"name": "Ifrit (Solar Ifrit)",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": -2,
			"charisma": 2
		},
		{
			"name": "Kitsune",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": -2,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Nagaji",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": -2,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Oread",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": -2
		},
		{
			"name": "Oread (Crystal Oread)",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": -2,
			"charisma": 2
		},
		{
			"name": "Oread (Metal Oread)",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": -2,
			"constitution": 2,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Sylph",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": -2,
			"intelligence": 2,
			"wisdom": 0,
			"charisma": 0
		},
		{
			"name": "Sylph (Fume Sylph)",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": -2,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Sylph (Lightning Sylph)",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": -2,
			"charisma": 2
		},
		{
			"name": "Tengu",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": -2,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Undine",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": -2,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Undine (Frost Undine)",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 2,
			"wisdom": 0,
			"charisma": -2
		},
		{
			"name": "Undine (Vapor Undine)",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": -2,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Wayang",
			"list": 2,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 2,
			"wisdom": -2,
			"charisma": 0
		},
		{
			"name": "Aasimar",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 2
		},
		{
			"name": "Aasimar (Agathion-Blooded)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Aasimar (Angel-Blooded)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Aasimar (Archon-Blooded)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Aasimar (Azata-Blooded)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Aasimar (Garuda-Blooded)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Aasimar (Peri-Blooded)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 2,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Aphorite",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": -2,
			"constitution": 0,
			"intelligence": 2,
			"wisdom": 0,
			"charisma": 0
		},
		{
			"name": "Aquatic Elf",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": -2,
			"intelligence": 2,
			"wisdom": 0,
			"charisma": 0
		},
		{
			"name": "Catfolk",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": -2,
			"charisma": 2
		},
		{
			"name": "Changeling",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": -2,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 2
		},
		{
			"name": "Changeling (Annis-Born)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": -2,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Changeling (Ash-Born)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": -2,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 2
		},
		{
			"name": "Changeling (Blood-Born)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": -2,
			"wisdom": 2,
			"charisma": 2
		},
		{
			"name": "Changeling (Dreamthief-Born)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": -2,
			"charisma": 2
		},
		{
			"name": "Changeling (Green-Born)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": -2,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 2
		},
		{
			"name": "Changeling (Mute-Born)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": -2,
			"intelligence": 2,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Changeling (Night-Born)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": -2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 2
		},
		{
			"name": "Changeling (Sea-Born)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": -2,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Changeling (Storm-Born)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": -2,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 2
		},
		{
			"name": "Changeling (Winter-Born)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": -2,
			"intelligence": 2,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Dhampir",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": -2,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Dhampir (Jiang-Shi Born)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 2,
			"wisdom": -2,
			"charisma": 0
		},
		{
			"name": "Dhampir (Moroi-Born)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": -2,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Dhampir (Nosferatu Born)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": -2,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Dhampir (Vetala Born)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": -2,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Duskwalker",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": -2,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Ganzi",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": -2,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Gillman",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": 0,
			"wisdom": -2,
			"charisma": 2
		},
		{
			"name": "Goblin",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": -2,
			"dexterity": 4,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": -2
		},
		{
			"name": "Grippli",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": -2,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Kobold",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": -4,
			"dexterity": 2,
			"constitution": -2,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 0
		},
		{
			"name": "Merfolk",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 2,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Naiad",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": -2,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Ratfolk",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": -2,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 2,
			"wisdom": 0,
			"charisma": 0
		},
		{
			"name": "Samsaran",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": -2,
			"intelligence": 2,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Skinwalker",
			"list": 3,
			"custom": 0,
			"note":"+2 to one physical ability score while shapechanged",
			"strength": 0,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": -2,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Skinwalker (Werebat-Kin)",
			"list": 3,
			"custom": 0,
			"note":"+2 Dexterity while shapechanged",
			"strength": 0,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 2,
			"wisdom": -2,
			"charisma": 0
		},
		{
			"name": "Skinwalker (Werebear-Kin)",
			"list": 3,
			"custom": 0,
			"note":"+2 Wisdom while shapechanged",
			"strength": 0,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": -2
		},
		{
			"name": "Skinwalker (Wereboar-Kin) (Blood of the Moon)",
			"list": 3,
			"custom": 0,
			"note":"+2 Constitution while shapechanged",
			"strength": 0,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": -2
		},
		{
			"name": "Skinwalker (Wereboar-Kin) (Inner Sea Races)",
			"list": 3,
			"custom": 0,
			"note":"+2 Constitution while shapechanged",
			"strength": 2,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": -2
		},
		{
			"name": "Skinwalker (Werecrocodile-Kin) (Blood of the Moon)",
			"list": 3,
			"custom": 0,
			"note":"+2 Strength while shapechanged",
			"strength": 0,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 2,
			"wisdom": -2,
			"charisma": 0
		},
		{
			"name": "Skinwalker (Werecrocodile-Kin) (Inner Sea Races)",
			"list": 3,
			"custom": 0,
			"note":"+2 Strength while shapechanged",
			"strength": 0,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": 0,
			"wisdom": -2,
			"charisma": 0
		},
		{
			"name": "Skinwalker (Wereraptor-Kin)",
			"list": 3,
			"custom": 0,
			"note":"+2 Dexterity while shapechanged",
			"strength": 0,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": -2
		},
		{
			"name": "Skinwalker (Wererat-Kin)",
			"list": 3,
			"custom": 0,
			"note":"+2 Dexterity while shapechanged",
			"strength": -2,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 2,
			"wisdom": 0,
			"charisma": 0
		},
		{
			"name": "Skinwalker (Wereshark-Kin)",
			"list": 3,
			"custom": 0,
			"note":"+2 Constitution while shapechanged",
			"strength": 0,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": -2,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Skinwalker (Weretiger-Kin)",
			"list": 3,
			"custom": 0,
			"note":"+2 Charisma while shapechanged",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": -2,
			"charisma": 0
		},
		{
			"name": "Skinwalker (Werewolf-Kin)",
			"list": 3,
			"custom": 0,
			"note":"+2 Wisdom while shapechanged",
			"strength": 0,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": -2,
			"wisdom": 0,
			"charisma": 0
		},
		{
			"name": "Suli",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": -2,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Tiefling",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 2,
			"wisdom": 0,
			"charisma": -2
		},
		{
			"name": "Tiefling (Asura-Spawn)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": -2,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Tiefling (Daemon-Spawn)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 2,
			"wisdom": -2,
			"charisma": 0
		},
		{
			"name": "Tiefling (Demodand-Spawn)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": -2,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Tiefling (Demon-Spawn)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": -2,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Tiefling (Devil-Spawn)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": -2
		},
		{
			"name": "Tiefling (Div-Spawn)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": -2,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Tiefling (Kyton-Spawn)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": 0,
			"wisdom": -2,
			"charisma": 2
		},
		{
			"name": "Tiefling (Oni-Spawn)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": -2
		},
		{
			"name": "Tiefling (Qlippoth-Spawn)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": -2,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Tiefling (Rakshasa-Spawn)",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": -2,
			"charisma": 2
		},
		{
			"name": "Vanara",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": -2
		},
		{
			"name": "Vine Leshy",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": -2,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Vishkanya",
			"list": 3,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": -2,
			"charisma": 2
		},
		{
			"name": "Adaro",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 2,
			"constitution": 2,
			"intelligence": -2,
			"wisdom": 0,
			"charisma": 0
		},
		{
			"name": "Android",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 2,
			"wisdom": 0,
			"charisma": -2
		},
		{
			"name": "Cecaelia",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": -2,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Drow",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": -2,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Drow Noble",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 4,
			"constitution": -2,
			"intelligence": 2,
			"wisdom": 2,
			"charisma": 2
		},
		{
			"name": "Duergar",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": -4
		},
		{
			"name": "Fetchling",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": -2,
			"charisma": 2
		},
		{
			"name": "Gathlain",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": -2,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Ghoran",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": -2,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Kasatha",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Kuru",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 2,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 0
		},
		{
			"name": "Lashunta (Female)",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": -2,
			"intelligence": 2,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Lashunta (Male)",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 2,
			"wisdom": -2,
			"charisma": 0
		},
		{
			"name": "Locathah",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": -2,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Monkey Goblin",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 4,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": -2,
			"charisma": -2
		},
		{
			"name": "Munavri",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": -2,
			"dexterity": 4,
			"constitution": 2,
			"intelligence": 2,
			"wisdom": 2,
			"charisma": 2
		},
		{
			"name": "Orc",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 4,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": -2,
			"wisdom": -2,
			"charisma": -2
		},
		{
			"name": "Sahuagin",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": -2
		},
		{
			"name": "Samsaran (Reborn)",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 2,
			"wisdom": 2,
			"charisma": -2
		},
		{
			"name": "Shabti",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": -2
		},
		{
			"name": "Strix",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": -2
		},
		{
			"name": "Svirfneblin",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": -2,
			"dexterity": 2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": -4
		},
		{
			"name": "Syrinx",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 0,
			"dexterity": -2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Triaxian",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": -2,
			"dexterity": 0,
			"constitution": 2,
			"intelligence": 0,
			"wisdom": 2,
			"charisma": 0
		},
		{
			"name": "Triton",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 2,
			"dexterity": -2,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 2
		},
		{
			"name": "Trox",
			"list": 4,
			"custom": 0,
			"note":"",
			"strength": 6,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": -2,
			"wisdom": -2,
			"charisma": -2
		},
		{
			"name": "Custom",
			"list": 1,
			"custom": 1,
			"note":"Choose your own modifiers.",
			"strength": 0,
			"dexterity": 0,
			"constitution": 0,
			"intelligence": 0,
			"wisdom": 0,
			"charisma": 0
		}
	];
	
	function private_updateTotalAbility(ability) {
		var abilityRow = document.getElementById(ability+"-row");
		var abilityPurchase = abilityRow.getElementsByClassName("purchase");
		abilityPurchase = parseInt(abilityPurchase[0].value);

		var racialMod = abilityRow.getElementsByClassName("racial-mod");
		racialMod = parseInt(racialMod[0].value);
		
		abilityRow.getElementsByClassName("calculated-stat")[0].innerHTML = abilityPurchase + racialMod;
		
		private_updateArrayBox();
	}
	
	function private_updateAllAbilities() {
		var abilities = document.querySelectorAll(".row .dropdown select");
		for (var i = 0, count = abilities.length; i < count; i++) {
			abilities[i].dispatchEvent(new Event('change'));
		}

	}
	
	function private_updateRaceList() {
		document.getElementById("race").innerHTML="";
		var selectedRaces = races.filter(race => race.list < lists[document.getElementById("race-list").value]);
		selectedRaces.map(function(race) {
			document.getElementById("race").innerHTML+= "<option value=\""+race["name"].toLowerCase()+"\">"+race["name"]+"</option>";
		});
		private_updateRaces();
	}
	
	function private_updateRaces() {
		var raceSelected = races.filter(race => race.name.toLowerCase() == document.getElementById("race").value);
		raceSelected = raceSelected[0];
		document.getElementById("race-note").innerHTML = raceSelected["note"];
		
		document.getElementById("strength-racial").value = raceSelected["strength"];
		document.getElementById("dexterity-racial").value = raceSelected["dexterity"];
		document.getElementById("constitution-racial").value = raceSelected["constitution"];
		document.getElementById("intelligence-racial").value = raceSelected["intelligence"];
		document.getElementById("wisdom-racial").value = raceSelected["wisdom"];
		document.getElementById("charisma-racial").value = raceSelected["charisma"];
		
		if(raceSelected.custom == 1) {
			private_unlockRacialMods();
		} else {
			private_lockRacialMods();
		}
		
		private_updateAllAbilities();
	}
	
	
	
	function private_unlockRacialMods() {
		var mods = document.querySelectorAll(".racial-mod");
		for (var i = 0, count = mods.length; i < count; i++) {
			mods[i].disabled = false;
		}
	}
	
	function private_lockRacialMods() {
		var mods = document.querySelectorAll(".racial-mod");
		for (var i = 0, count = mods.length; i < count; i++) {
			mods[i].disabled = true;
		}
	}
	
	function private_updateCost(targetID) {
		var target = document.getElementById(targetID);
		document.getElementById(targetID+"-cost").innerHTML = costs[target.value];
		private_updateTotalCost();
	}
	
	function private_updateTotalCost() {
		var costArrays = [].slice.call(document.querySelectorAll(".row.data .cost"));
		var costs = costArrays.map(function(x) {
			return parseInt(x.innerHTML);
		});
		var cost = costs.reduce(function(accumulator, currentValue) {
			return accumulator+currentValue;
		});
		document.getElementById("total-points").innerHTML = cost;
	}
	
	function private_updateArrayBox() {
		var strength = parseInt(document.getElementById("strength-calculated").innerHTML);
		var dexterity = parseInt(document.getElementById("dexterity-calculated").innerHTML);
		var constitution = parseInt(document.getElementById("constitution-calculated").innerHTML);
		var intelligence = parseInt(document.getElementById("intelligence-calculated").innerHTML);
		var wisdom = parseInt(document.getElementById("wisdom-calculated").innerHTML);
		var charisma = parseInt(document.getElementById("charisma-calculated").innerHTML);
		
		var arrayBox = document.getElementById("array-box");
		arrayBox.value = "STR " + strength + " / DEX " + dexterity + " / CON " + constitution + " / INT " + intelligence + " / WIS " + wisdom + " / CHA " + charisma;
	}
	
	function private_setAbilityCalculations() {
		var dropdowns = document.querySelectorAll(".row .dropdown select");
		for (var i = 0, dCount = dropdowns.length; i < dCount; i++) {
			dropdowns[i].addEventListener('change', function () {
				private_updateCost(this.id);
				private_updateTotalAbility(this.id);
			});
		}

		var modifiers = document.querySelectorAll(".racial-mod");
		var expression = new RegExp('^[^\-]+');
		for (var i = 0, count = modifiers.length; i < count; i++) {
			modifiers[i].addEventListener('change', function () {
				private_updateTotalAbility(this.id.match(expression)[0]);
			});
		}
	}

	function private_setRaceListUpdates() {
		document.getElementById("race-list").addEventListener('change', function () {
			private_updateRaceList();
		});
		document.getElementById("race").addEventListener('change', function () {
			private_updateRaces();
		});
	}
	
	function private_setCopyButton() {
		var button = document.getElementById("copy-array");
		button.addEventListener("click", function() {
			var text = document.getElementById("array-box");
			text.focus();
			text.select();
			document.execCommand("copy");
		});
	}

	function private_setup() {
		private_setAbilityCalculations();
		private_setRaceListUpdates()
		private_setCopyButton();
		
		private_updateRaceList();
		private_updateRaces();
	}

	return {
		setupConstructor: function() {
			private_setup();
		}
	}
}

var calculator = pointBuy();
calculator.setupConstructor();