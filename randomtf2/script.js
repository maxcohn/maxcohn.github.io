function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function refreshPage() {
	window.location.reload()
}
var playerClass = ["Scout", "Solider", "Pyro", "Demoman", "Heavy", "Engineer", "Medic", "Sniper", "Spy"]
//Array #0
var scoutPrimary = ["Scatter Gun", "Force-A-Nature", "Shortstop", "Soda Popper", "Baby Face's Blaster", "Back Scratcher"]
var scoutSecondary = ["Pistol", "Bonk! Atomic Punch", "Crit-a-Cola", "Mad Milk", "Winger", "Pretty Boy's Pocket Pistol", "Flying Guillotine"]
var scoutMelee = ["Bat", "Sandman", "Candy Cane", "Boston Basher", "Son-on-a-Stick", "Fan O'War", "Atomizer", "Wrap Assassin"]
//Array #1
var soliderPrimary = ["Rocket Launcher", "Direct Hit", "Black Box", "Rocket Jumper", "Liberty Launcher", "Cow Mangler 5000", "Beggar's Bazooka", "Air Strike"]
var soliderSecondary = ["Shotgun", "Buff Manner", "Gun Boats", "Battalion's Backup", "Concheror", "Mantreads", "Reserve Shooter", "Righteous Bison", "B.A.S.E Jumper"]
var soliderMelee = ["Shovel", "Equalizer", "Pain Train", "Half-Zatoichi", "Disciplinary Action", "Market Gardener", "Escape Plan"]
//Array #2
var pyroPrimary = ["Flame Thrower", "Backburner", "Degreaser", "Pholgistinator"]
var pyroSecondary = ["Shotgun", "Flare Gun", "Detonator", "Reserve Shooter", "Manmelter", "Scorch Shot"]
var pyroMelee = ["Fire Axe", "Axetinguisher", "Postal Pummeler", "Homewrecker", "Power Jack", "Back Scratcher", "Sharpened Volcano Fragment", "Third Degree", "Neon Annihilator",]
//Array #3
var demomanPrimary = ["Grenade Launcher", "Loch-n-Load", "Ali Baba's Wee Booties", "Bootlegger", "Loose Cannon", "B.A.S.E Jumper"]
var demomanSecondary = ["Sticky Bomb Launcher", "Chargin' Targe", "Scottish Resistance", "Sticky Jumper", "Splendid Screen", "Tide Turner"]
var demomanMelee = ["Bottle", "Eyelander", "Pain Train", "Scottman's Skullcutter", "Claidheamh Mor", "Ullapool Caber", "Half-Zatoichi", "Persian Persuader"]
//Array #4
var heavyPrimary = ["Minigun", "Iron Curtain", "Natascha", "Brass Beast", "Tomislav", "Huo-Long Heater"]
var heavySecondary = ["Shotgun", "Sandvich", "Dalokohs Bar", "Buffalo Steak Sandvich", "Family Business"]
var heavyMelee = ["Fists", "Killing Gloves of Boxing", "Gloves of Running Urgently", "Warrior's Spirit", "Fists of Steel", "Eviction Notice", "Holiday Punch"]
//Array #5
var engineerPrimary = ["Shotgun", "Frontier Justice", "Widowmaker", "Pomson 6000", "Rescue Ranger"]
var engineerSecondary = ["Pistol", "Wrangler", "Short Circuit"]
var engineerMelee = ["Wrench", "Gunslinger", "Southern Hospitality", "Jag", "Eureka Effect"]
var engineerConstructiionPda = ["Construction PDA"]
var engineerDestructionPda = ["Destruction PDA"]
//Array #6
var medicPrimary = ["Syringe Gun", "Blutsauger", "Crusaders Crossbow", "Overdose"]
var medicSecondary = ["Medi Gun", "Kritzkrieg", "Quick-Fix", "Vaccinator"]
var medicMelee = ["Bonesaw", "Ubersaw", "Vita-Saw", "Amputator", "Solemn Vow"]
//Array #7
var sniperPrimary = ["Sniper Rifle", "Huntsman", "Sydney Sleeper", "Bazaar Bargain", "Machina", "Hitman's Heat Maker", "Classic"]
var sniperSecondary = ["Submachine Gun", "Jarate", "Razorback", "Darwin's Danger Shield", "Cozy Camper", "Cleaner's Carbine"]
var sniperMelee = ["Kukri", "Tribalman's Shiv", "Bushwacka", "Shahanshah"]
//Array #8
var spyPrimary = ["Revolver", "Ambassador", "L'Etranger", "Enforcer", "Diamondback"]
var spyMelee = ["Knife", "Your Eternal Reward", "Conniver's Kunai", "Big Earner", "Spy-cicle"]
var spyWatch = ["Invis Watch", "Cloak and Dagger", "Dead Ringer"]
var spySapper = ["Sapper", "Red-Tape Recorder"]
var spyPda = ["Disguise Kit"]

var playerClassNum = getRandomInt(0,8)
var playerClassName = playerClass[playerClassNum]

if (playerClassNum == 0){
	var scout1 = scoutPrimary[getRandomInt(0,5)]
	var scout2 = scoutSecondary[getRandomInt(0,6)]
	var scout3 = scoutMelee[getRandomInt(0,7)]
	document.write(playerClassName)
	document.write("<br />")
	document.write("<br />")
	document.write("<br />")
	document.write(scout1)
	document.write("<br />")
	document.write("<br />")
	document.write(scout2)
	document.write("<br />")
	document.write("<br />")
	document.write(scout3)
}
else if (playerClassNum == 1){
	var solider1 = soliderPrimary[getRandomInt(0,7)]
	var solider2 = soliderSecondary[getRandomInt(0,8)]
	var solider3 = soliderMelee[getRandomInt(0,6)]
	document.write(playerClassName)
	document.write("<br />")
	document.write("<br />")
	document.write("<br />")
	document.write(solider1)
	document.write("<br />")
	document.write("<br />")
	document.write(solider2)
	document.write("<br />")
	document.write("<br />")
	document.write(solider3)
}
else if (playerClassNum == 2){
	var pyro1 = pyroPrimary[getRandomInt(0,3)]
	var pyro2 = pyroSecondary[getRandomInt(0,5)]
	var pyro3 = pyroMelee[getRandomInt(0,8)]
	document.write(playerClassName)
	document.write("<br />")
	document.write("<br />")
	document.write("<br />")
	document.write(pyro1)
	document.write("<br />")
	document.write("<br />")
	document.write(pyro2)
	document.write("<br />")
	document.write("<br />")
	document.write(pyro3)
}
else if (playerClassNum == 3){
	var demoman1 = demomanPrimary[getRandomInt(0,5)]
	var demoman2 = demomanSecondary[getRandomInt(0,5)]
	var demoman3 = demomanMelee[getRandomInt(0,7)]
	document.write(playerClassName)
	document.write("<br />")
	document.write("<br />")
	document.write("<br />")
	document.write(demoman1)
	document.write("<br />")
	document.write("<br />")
	document.write(demoman2)
	document.write("<br />")
	document.write("<br />")
	document.write(demoman3)
}
else if (playerClassNum == 4){
	var heavy1 = heavyPrimary[getRandomInt(0,5)]
	var heavy2 = heavySecondary[getRandomInt(0,4)]
	var heavy3 = heavyMelee[getRandomInt(0,6)]
	document.write(playerClassName)
	document.write("<br />")
	document.write("<br />")
	document.write("<br />")
	document.write(heavy1)
	document.write("<br />")
	document.write("<br />")
	document.write(heavy2)
	document.write("<br />")
	document.write("<br />")
	document.write(heavy3)
}
else if (playerClassNum == 5){
	var engineer1 = engineerPrimary[getRandomInt(0,4)]
	var engineer2 = engineerSecondary[getRandomInt(0,2)]
	var engineer3 = engineerMelee[getRandomInt(0,4)]
	document.write(playerClassName)
	document.write("<br />")
	document.write("<br />")
	document.write("<br />")
	document.write(engineer1)
	document.write("<br />")
	document.write("<br />")
	document.write(engineer2)
	document.write("<br />")
	document.write("<br />")
	document.write(engineer3)
}
else if (playerClassNum == 6){
	var medic1 = medicPrimary[getRandomInt(0,3)]
	var medic2 = medicSecondary[getRandomInt(0,3)]
	var medic3 = medicMelee[getRandomInt(0,4)]
	document.write(playerClassName)
	document.write("<br />")
	document.write("<br />")
	document.write("<br />")
	document.write(medic1)
	document.write("<br />")
	document.write("<br />")
	document.write(medic2)
	document.write("<br />")
	document.write("<br />")
	document.write(medic3)
}
else if (playerClassNum == 7){
	var sniper1 = sniperPrimary[getRandomInt(0,6)]
	var sniper2 = sniperSecondary[getRandomInt(0,5)]
	var sniper3 = sniperMelee[getRandomInt(0,3)]
	document.write(playerClassName)
	document.write("<br />")
	document.write("<br />")
	document.write("<br />")
	document.write(sniper1)
	document.write("<br />")
	document.write("<br />")
	document.write(sniper2)
	document.write("<br />")
	document.write("<br />")
	document.write(sniper3)
}
else if (playerClassNum == 8){
	var spy1 = spyPrimary[getRandomInt(0,4)]
	var spy2 = spyMelee[getRandomInt(0,4)]
	var spy3 = spyWatch[getRandomInt(0,2)]
	var spy4 = spySapper[getRandomInt(0,1)]
	document.write(playerClassName)
	document.write("<br />")
	document.write("<br />")
	document.write("<br />")
	document.write(spy1)
	document.write("<br />")
	document.write("<br />")
	document.write(spy2)
	document.write("<br />")
	document.write("<br />")
	document.write(spy3)
	document.write("<br />")
	document.write("<br />")
	document.write(spy4)
}