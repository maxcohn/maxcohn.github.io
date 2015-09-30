function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var playerClass = ["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Engineer", "Medic", "Sniper", "Spy"];
//Array #0
var scoutPrimary = ["Scatter Gun", "Force-A-Nature", "Shortstop", "Soda Popper", "Baby Face's Blaster", "Back Scatter"];
var scoutSecondary = ["Pistol", "Bonk! Atomic Punch", "Crit-a-Cola", "Mad Milk", "Winger", "Pretty Boy's Pocket Pistol", "Flying Guillotine"];
var scoutMelee = ["Bat", "Sandman", "Candy Cane", "Boston Basher", "Son-on-a-Stick", "Fan O'War", "Atomizer", "Wrap Assassin"];
//Array #1
var soldierPrimary = ["Rocket Launcher", "Direct Hit", "Black Box", "Rocket Jumper", "Liberty Launcher", "Cow Mangler 5000", "Beggar's Bazooka", "Air Strike"];
var soldierSecondary = ["Shotgun", "Buff Manner", "Gun Boats", "Battalion's Backup", "Concheror", "Mantreads", "Reserve Shooter", "Righteous Bison", "B.A.S.E Jumper"];
var soldierMelee = ["Shovel", "Equalizer", "Pain Train", "Half-Zatoichi", "Disciplinary Action", "Market Gardener", "Escape Plan"];
//Array #2
var pyroPrimary = ["Flame Thrower", "Backburner", "Degreaser", "Pholgistinator"];
var pyroSecondary = ["Shotgun", "Flare Gun", "Detonator", "Reserve Shooter", "Manmelter", "Scorch Shot"];
var pyroMelee = ["Fire Axe", "Axetinguisher", "Postal Pummeler", "Homewrecker", "Power Jack", "Back Scratcher", "Sharpened Volcano Fragment", "Third Degree", "Neon Annihilator"];
//Array #3
var demomanPrimary = ["Grenade Launcher", "Loch-n-Load", "Ali Baba's Wee Booties", "Bootlegger", "Loose Cannon", "B.A.S.E Jumper"];
var demomanSecondary = ["Sticky Bomb Launcher", "Chargin' Targe", "Scottish Resistance", "Sticky Jumper", "Splendid Screen", "Tide Turner"];
var demomanMelee = ["Bottle", "Eyelander", "Pain Train", "Scottman's Skullcutter", "Claidheamh Mor", "Ullapool Caber", "Half-Zatoichi", "Persian Persuader"];
//Array #4
var heavyPrimary = ["Minigun", "Iron Curtain", "Natascha", "Brass Beast", "Tomislav", "Huo-Long Heater"];
var heavySecondary = ["Shotgun", "Sandvich", "Dalokohs Bar", "Buffalo Steak Sandvich", "Family Business"];
var heavyMelee = ["Fists", "Killing Gloves of Boxing", "Gloves of Running Urgently", "Warrior's Spirit", "Fists of Steel", "Eviction Notice", "Holiday Punch"];
//Array #5
var engineerPrimary = ["Shotgun", "Frontier Justice", "Widowmaker", "Pomson 6000", "Rescue Ranger"];
var engineerSecondary = ["Pistol", "Wrangler", "Short Circuit"];
var engineerMelee = ["Wrench", "Gunslinger", "Southern Hospitality", "Jag", "Eureka Effect"];
var engineerConstructionPda = ["Construction PDA"];
var engineerDestructionPda = ["Destruction PDA"];
//Array #6
var medicPrimary = ["Syringe Gun", "Blutsauger", "Crusaders Crossbow", "Overdose"];
var medicSecondary = ["Medi Gun", "Kritzkrieg", "Quick-Fix", "Vaccinator"];
var medicMelee = ["Bonesaw", "Ubersaw", "Vita-Saw", "Amputator", "Solemn Vow"];
//Array #7
var sniperPrimary = ["Sniper Rifle", "Huntsman", "Sydney Sleeper", "Bazaar Bargain", "Machina", "Hitman's Heat Maker", "Classic"];
var sniperSecondary = ["Submachine Gun", "Jarate", "Razorback", "Darwin's Danger Shield", "Cozy Camper", "Cleaner's Carbine"];
var sniperMelee = ["Kukri", "Tribalman's Shiv", "Bushwacka", "Shahanshah"];
//Array #8
var spyPrimary = ["Revolver", "Ambassador", "L'Etranger", "Enforcer", "Diamondback"];
var spyMelee = ["Knife", "Your Eternal Reward", "Conniver's Kunai", "Big Earner", "Spy-cicle"];
var spyWatch = ["Invis Watch", "Cloak and Dagger", "Dead Ringer"];
var spySapper = ["Sapper", "Red-Tape Recorder"];
var spyPda = ["Disguise Kit"]


function getLoadout(classNum){
	if(classNum != 9){
		var playerClassNum = classNum;
		
	}else{
		var playerClassNum = getRandomInt(0,8);
	}
	
	var playerClassName = playerClass[playerClassNum];
	if (playerClassNum == 0){
		var scout1 = scoutPrimary[getRandomInt(0,scoutPrimary.length - 1)]
		var scout2 = scoutSecondary[getRandomInt(0,scoutSecondary.length - 1)]
		var scout3 = scoutMelee[getRandomInt(0,scoutMelee.length - 1)]	
		$(".items").append("<h1><b>" + playerClassName + "</b></h1>");
		$(".items").append("<h3>" + scout1 + "</h3>");
		$(".items").append("<h3>" + scout2 + "</h3>");
		$(".items").append("<h3>" + scout3 + "</h3>");
	}else if (playerClassNum == 1){
		var soldier1 = soldierPrimary[getRandomInt(0,soldierPrimary.length - 1)]
		var soldier2 = soldierSecondary[getRandomInt(0,soldierSecondary.length - 1)]
		var soldier3 = soldierMelee[getRandomInt(0,soldierMelee.length - 1)]		
		$(".items").append("<h1><b>" + playerClassName + "</b></h1>");	
		$(".items").append("<h3>" + soldier1 + "</h3>");
		$(".items").append("<h3>" + soldier2 + "</h3>");
		$(".items").append("<h3>" + soldier3 + "</h3>");
	}else if (playerClassNum == 2){
		var pyro1 = pyroPrimary[getRandomInt(0,pyroPrimary.length - 1)]
		var pyro2 = pyroSecondary[getRandomInt(0,pyroSecondary.length - 1)]
		var pyro3 = pyroMelee[getRandomInt(0,pyroMelee.length - 1)]
		$(".items").append("<h1><b>" + playerClassName + "</b></h1>");
		$(".items").append("<h3>" + pyro1 + "</h3>");
		$(".items").append("<h3>" + pyro2 + "</h3>");
		$(".items").append("<h3>" + pyro3 + "</h3>");
	}else if (playerClassNum == 3){
		var demoman1 = demomanPrimary[getRandomInt(0,demomanPrimary.length - 1)]
		var demoman2 = demomanSecondary[getRandomInt(0,demomanSecondary.length - 1)]
		var demoman3 = demomanMelee[getRandomInt(0,demomanMelee.length - 1)]
		$(".items").append("<h1><b>" + playerClassName + "</b></h1>");
		$(".items").append("<h3>" + demoman1 + "</h3>");
		$(".items").append("<h3>" + demoman2 + "</h3>");
		$(".items").append("<h3>" + demoman3 + "</h3>");
	}else if (playerClassNum == 4){
		var heavy1 = heavyPrimary[getRandomInt(0,heavyPrimary.length - 1)]
		var heavy2 = heavySecondary[getRandomInt(0,heavySecondary.length - 1)]
		var heavy3 = heavyMelee[getRandomInt(0,heavyMelee.length - 1)]
		$(".items").append("<h1><b>" + playerClassName + "</b></h1>");
		$(".items").append("<h3>" + heavy1 + "</h3>");
		$(".items").append("<h3>" + heavy2 + "</h3>");
		$(".items").append("<h3>" + heavy3 + "</h3>");
	}else if (playerClassNum == 5){
		var engineer1 = engineerPrimary[getRandomInt(0,engineerPrimary.length - 1)]
		var engineer2 = engineerSecondary[getRandomInt(0,engineerSecondary.length - 1)]
		var engineer3 = engineerMelee[getRandomInt(0,engineerMelee.length - 1)]
		var engineer4 = engineerConstructionPda[0]
		var engineer5 = engineerDestructionPda[0]
		$(".items").append("<h1><b>" + playerClassName + "</b></h1>");
		$(".items").append("<h3>" + engineer1 + "</h3>");
		$(".items").append("<h3>" + engineer2 + "</h3>");
		$(".items").append("<h3>" + engineer3 + "</h3>");
		$(".items").append("<h3>" + engineer4 + "</h3>");
		$(".items").append("<h3>" + engineer5 + "</h3>");
	}else if (playerClassNum == 6){
		var medic1 = medicPrimary[getRandomInt(0,medicPrimary.length - 1)]
		var medic2 = medicSecondary[getRandomInt(0,medicSecondary.length - 1)]
		var medic3 = medicMelee[getRandomInt(0,medicMelee.length - 1)]
		$(".items").append("<h1><b>" + playerClassName + "</b></h1>");
		$(".items").append("<h3>" + medic1 + "</h3>");
		$(".items").append("<h3>" + medic2 + "</h3>");
		$(".items").append("<h3>" + medic3 + "</h3>");
	}else if (playerClassNum == 7){
		var sniper1 = sniperPrimary[getRandomInt(0,sniperPrimary.length - 1)]
		var sniper2 = sniperSecondary[getRandomInt(0,sniperSecondary.length - 1)]
		var sniper3 = sniperMelee[getRandomInt(0,sniperMelee.length - 1)]
		$(".items").append("<h1><b>" + playerClassName + "</b></h1>");
		$(".items").append("<h3>" + sniper1 + "</h3>");
		$(".items").append("<h3>" + sniper2 + "</h3>");
		$(".items").append("<h3>" + sniper3 + "</h3>");
	}else if (playerClassNum == 8){
		var spy1 = spyPrimary[getRandomInt(0,spyPrimary.length - 1)]
		var spy2 = spyMelee[getRandomInt(0,spyMelee.length - 1)]
		var spy3 = spyWatch[getRandomInt(0,spyWatch.length - 1)]
		var spy4 = spySapper[getRandomInt(0,spySapper.length - 1)]
		var spy5 = spyPda[0]
		$(".items").append("<h1><b>" + playerClassName + "</b></h1>");
		$(".items").append("<h3>" + spy1 + "</h3>");
		$(".items").append("<h3>" + spy2 + "</h3>");
		$(".items").append("<h3>" + spy3 + "</h3>");
		$(".items").append("<h3>" + spy4 + "</h3>");
		$(".items").append("<h3>" + spy5 + "</h3>");
	}
}



$(document).ready(function(){
	//onload
	getLoadout(9);
	
	$("#new-loadout").click(function(){


		$(".items").remove();
		$(".loadout").prepend("<div class='items'></div>");

		//check #class-select
		if($('#class-select option:selected').val() == "scout"){
			getLoadout(0);
		}else if($('#class-select option:selected').val() == "soldier"){
			getLoadout(1);
		}else if($('#class-select option:selected').val() == "pyro"){
			getLoadout(2);
		}else if($('#class-select option:selected').val() == "demoman"){
			getLoadout(3);
		}else if($('#class-select option:selected').val() == "heavy"){
			getLoadout(4);
		}else if($('#class-select option:selected').val() == "engineer"){
			getLoadout(5);
		}else if($('#class-select option:selected').val() == "medic"){
			getLoadout(6);
		}else if($('#class-select option:selected').val() == "sniper"){
			getLoadout(7);
		}else if($('#class-select option:selected').val() == "spy"){
			getLoadout(8);
		}else{
			getLoadout(9);
		}
		
	});

	$("#class-select").change(function(){
		$("#new-loadout").click();
	});

});