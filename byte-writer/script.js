/**
 * Byte Writer
 * Copyright (C) 2015 Maxwell Cohn <maxc1234@hotmail.com>
 
 * Byte Writer is a personal project and will not see constant updates or balancing.

 * If you're reading this, thanks for taking an interest in the source code!
 
 * Thanks to David Stark (http://dhmstark.co.uk/) for a great tutorial for the basic ideas of building an incremental game
 */
 
var version = 7; //Added more achievements and touch ups, only occasional updates now
console.log("running"); //shows game is running in console

var bytes = 0; //bytes are the main currency of the game

//0 means the achievement is not obtained, while 1 means the achievement has been earned | the first element of achievements
var achievements = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//increase bytes by num
function writeByte(num){
	bytes = bytes + num;
	document.getElementById("bytes").innerHTML = bytes;
}

//folds the import/export area to conserve space
function foldImportExport(){
	$(".import-export-area").toggle("fold");
}

/*
	Testing methods
*/
//add bytes to total num of bytes
function testingAddBytes(bytesToAdd){
	writeByte(bytesToAdd);
}

//set number of bytes
function testingSetBytes(totalBytes){
	bytes = totalBytes; //set bytes to totalBytes
}