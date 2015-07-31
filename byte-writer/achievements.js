//achievements.js is the script for Byte Writer that handles all methods related to achievements

//Typer: have 10 txt files
function checkTyper(){
	if(achievements[1] == 0){
		if(txt >= 10){
			achievements[1] = 1;
			console.log("Achievement (Typer) has been earned");
			document.getElementById("achievement-area").innerHTML = document.getElementById("achievement-area").innerHTML + "Typer";
		}		
	}
}
