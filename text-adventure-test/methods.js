//add text to next line of log
function addText(s){
	$("#log").val($("#log").val() + "\n" + s);
}

//print "invalid direction"
function invDir(){
	addText("Invalid direction.");
}

//handles moving of rooms
function move(dir){
	if(rooms[0] == true){
		//in start
		if(dir == "north"){
			//going to dining room
			addText(diningIntro);
			rooms[2] = true;
			rooms[0] = false;
		}else{
			invDir();
		}
	}else if(rooms[1] == true){
		//in kitchen
		if(dir == "east"){
			//going to dining room
			addText(diningIntro);
			rooms[2] = true;
			rooms[1] = false;
		}else{
			invDir();
		}
	}else if(rooms[2] == true){
		//in dining
		if(dir == "north"){
			//going to hall
			addText(hallIntro);
			rooms[4] = true;
			rooms[2] = false;
		}else if(dir == "south"){
			//going to start
			addText(startIntro);
			rooms[0] = true;
			rooms[2] = false;
		}else if(dir == "east"){
			//going to bathroom (1 of 2)
			addText(bath1Intro);
			rooms[3] = true;
			rooms[2] = false;
		}else if(dir == "west"){
			//going to kitchen
			addText(kitchenIntro);
			rooms[1] = true;
			rooms[2] = false;
		}
	}else if(rooms[3] == true){
		//in bathroom (1 of 2)
		if(dir == "west"){
			//going to hall
			addText(diningIntro);
			rooms[2] = true;
			rooms[3] = false;
		}else{
			invDir();
		}
	}else if(rooms[4] == true){
		//in hall
		if(dir == "north"){
			//going to living room
			addText(livingIntro);
			rooms[6] = true;
			rooms[4] = false;
		}else if(dir == "south"){
			//going to dining room
			addText(diningIntro);
			rooms[2] = true;
			rooms[4] = false;
		}else{
			invDir();
		}
	}else if(rooms[5] == true){
		//in bathroom (2 of 2)
		if(dir == "east"){
			//going to living room
			addText(diningIntro);
			rooms[6] = true;
			rooms[5] = false;
		}else{
			invDir();
		}
	}else if(rooms[6] == true){
		//in living
		if(dir == "south"){
			//going to hall
			addText(hallIntro);
			rooms[4] = true;
			rooms[6] = false;
		}else if(dir == "east"){
			//going to win
			addText(winIntro);
			rooms[7] = true;
			rooms[6] = false;
		}else if(dir == "west"){
			//going to bath (2 of 2)
			addText(bath2Intro);
			rooms[5] = true;
			rooms[6] = false;
		}else{
			invDir();
		}
		
	}
	//room[7]/win is not needed because game has ended
}
















