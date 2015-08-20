//Text Adventure Test

//This game was made as a test to see if HTML is a good platform for text adventure games


//on enter key pressed, preform action
$("body").keypress(function(){
	if(event.which === 13){
		prefAction();
	}
});

//"#send" click event
$("#send").click(function(){
	prefAction();
	
});

function prefAction(){
	var userInput = $("#ui").val().toLowerCase();

	addText(userInput);
	addText(""); //new line
	
	//if userInput = "north", "south", "east", or "west"
	if(userInput == "north" ||userInput == "south" || userInput == "east" || userInput == "west"){
		//check current room
		move(userInput);
	}
}

//on start
$(document).ready(function(){
	//set current room to 0
	rooms[0] = true;
	//print intro | does not use addText() because a new line would result
	$("#log").val("You have just arrived home and you need to get to your computer as fast as possible. Why? You know.");
});
