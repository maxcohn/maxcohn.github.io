/**
 * Byte Writer
 * Copyright (C) 2015 Maxwell Cohn <maxc1234@hotmail.com>
 
 * Byte Writer is a personal project and will not see constant updates or balancing.

 * If you're reading this, thanks for taking an interest in the source code!
 
 * Thanks to David Stark (http://dhmstark.co.uk/) for a great tutorial for the basic ideas of building an incremental game
 */
 
var version = 5; //Base game finished!
console.log("running"); //shows game is running in console

//file variables are in files.js

//bytes are the main currency of the game
var bytes = 0;

//0 means the achievement is not obtained, while 1 means the achievement has been earned | the first element of achievements
var achievements = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//increase bytes by num
function writeByte(num){
	bytes = bytes + num;
	document.getElementById("bytes").innerHTML = bytes;
}
