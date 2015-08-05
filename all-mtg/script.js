//All MTG scripts

//variables
var leftLife = 20;
var rightLife = 20;

var leftName = "";
var rightName = "";

//misc methods
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//set names on start
function setNames(){
	leftName = prompt("Enter left player's name", "");
	rightName = prompt("Enter right player's name", "");
	
	document.getElementById("left-name").innerHTML = leftName;
	document.getElementById("right-name").innerHTML = rightName;
}

//set life method
function setLife(lifeTotal){
	//set life variables to requested integer
	leftLife = lifeTotal;
	rightLife = lifeTotal;
	
	//set left-life and right-right to life totals
	document.getElementById("left-life").innerHTML = leftLife;
	document.getElementById("right-life").innerHTML = rightLife;
}

//change left life
function changeLeftLife(life){
	leftLife = leftLife + life;
	document.getElementById("left-life").innerHTML = leftLife;
}

//change right life
function changeRightLife(life){
	rightLife = rightLife + life;
	document.getElementById("right-life").innerHTML = rightLife;
}

//preform actions
function preformAction(){
	if(document.getElementById("action-list").value == "roll-d6") {
		alert("Roll: " + getRandInt(1,6));
		
	}else if(document.getElementById("action-list").value == "roll-d20"){
		alert("Roll: " + getRandInt(1,20));
	
	}else if(document.getElementById("action-list").value == "set-life"){
		setLife(parseInt(prompt("Enter life","20")))
	
	}else if(document.getElementById("action-list").value == "goes-first"){
		var playerFirst = getRandInt(0,1); //0 = left, 1 = right
		
		if(playerFirst == 0){
			//left player first
			alert(leftName + " goes first");
		}else{
			//right player first
			alert(rightName + " goes first");
		}
		
	}else if(document.getElementById("action-list").value == "set-left"){
		leftLife = parseInt(prompt("Set " + leftName + "'s life","20"));

		document.getElementById("left-life").innerHTML = leftLife;
		
	}else if(document.getElementById("action-list").value == "set-right"){
		rightLife = parseInt(prompt("Set " + rightName + "'s life","20","20"));

		document.getElementById("right-life").innerHTML = rightLife;
		
	}
}
