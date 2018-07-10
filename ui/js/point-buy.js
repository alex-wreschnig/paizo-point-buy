var pointBuy = function () {

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
	
	function private_updateRaceList() {
		
	}
	
	function private_updateRaces() {
	}
	
	function private_unlockRacialMods() {
	}
	
	function private_lockRacialMods() {
	}
	
	function private_updateCost(targetID) {
		var target = document.getElementById(targetID);
		document.getElementById(targetID+"-cost").innerHTML = costs[target.value];
	}
	
	function private_updateTotalCost() {
	}
	
	function private_updateArrayBox() {
	}
	
	function private_setCostCalculations() {
		var dropdowns = document.querySelectorAll(".row .dropdown select");
		for (var i = 0, dCount = dropdowns.length; i < dCount; i++) {
			dropdowns[i].addEventListener('change', function () {
				private_updateCost(this.id);
			});
		}
	}


	function private_setup() {
		private_setCostCalculations();
	}

	return {
		setupConstructor: function() {
			private_setup();
		}
	}
}

var calculator = pointBuy();
calculator.setupConstructor();