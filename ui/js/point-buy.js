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
		console.log(selectedRaces);
	}
	
	function private_updateRaces() {
		console.log(document.getElementById("race").value);
		var raceSelected = races.filter(race => race.name.toLowerCase() == document.getElementById("race").value);
		raceSelected = raceSelected[0];
		console.log(document.getElementById("race-note"));
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

	function private_setup() {
		private_setAbilityCalculations();
		private_setRaceListUpdates()
		
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