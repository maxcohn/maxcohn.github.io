//achievements.js is the script for Byte Writer that handles all methods related to achievements

//1: Typer: have 10 txt files
function checkTyper(){
	if(achievements[1] == 0){
		if(txt >= 10){
			achievements[1] = 1;
			console.log("Achievement (Typer) has been earned");
			document.getElementById("achievement-area").innerHTML = document.getElementById("achievement-area").innerHTML + " |Typer| ";
		}		
	}
}

//2: Secretary: have 100 txt files
function checkSecretary(){
	if(achievements[2] == 0){
		if(txt >= 100){
			achievements[2] = 1;
			console.log("Achievement (Secretary) has been earned");
			document.getElementById("achievement-area").innerHTML = document.getElementById("achievement-area").innerHTML + " |Secretary| ";
		}
	}
}

//3: Audiophile: have 1000 audio files (mp3, wav, flac)
function checkAudiophile(){
	if(achievements[3] == 0){
		if((mp3 + wav + flac) >= 1000){
			achievements[3] = 1;
			console.log("Achievement (Audiophile) has been earned");
			document.getElementById("achievement-area").innerHTML = document.getElementById("achievement-area").innerHTML + " |Audiophile| ";
		}
	}
}