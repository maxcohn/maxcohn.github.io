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

//3: Audiophile: have 100 audio files (mp3, wav, flac)
function checkAudiophile(){
	if(achievements[3] == 0){
		if((mp3 + wav + flac) >= 100){
			achievements[3] = 1;
			console.log("Achievement (Audiophile) has been earned");
			document.getElementById("achievement-area").innerHTML = document.getElementById("achievement-area").innerHTML + " |Audiophile| ";
		}
	}
}

//4: Redditor: have 100 image files (jpg, png, bmp, gif)
function checkRedditor(){
	if(achievements[4] == 0){
		if((jpg + png + bmp + gif) >= 100){
			achievements[4] = 1;
			console.log("Achievement (Redditor) has been earned");
			document.getElementById("achievement-area").innerHTML = document.getElementById("achievement-area").innerHTML + " |Redditor| ";
		}
	}
}

//5: Cinephile: have 100 video files (mp4, wmv, avi)
function checkCinephile(){
	if(achievements[5] == 0){
		if((mp4 + wmv + avi) >= 100){
			achievements[5] = 1;
			console.log("Achievement (Cinephile) has been earned");
			document.getElementById("achievement-area").innerHTML = document.getElementById("achievement-area").innerHTML + " |Cinephile| ";
		}
	}
}