//Maxwell Cohn		7/28/2015 (1 in the morning)
//
//Prints random copy pastas onto the screen from an array
//inspired by Forsen's chat



//pastas in pastas.js

//get random int in range
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//paste pasta to #pasta
function pastePasta(){
	var pastaToPaste = pastas[randInt(0, pastas.length - 1)];
	document.getElementById("pasta").innerHTML = pastaToPaste;
}