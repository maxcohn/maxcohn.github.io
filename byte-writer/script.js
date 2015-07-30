/**
 * Byte Writer
 * Copyright (C) 2015 Maxwell Cohn <maxc1234@hotmail.com>

 * If you're reading this, thanks for taking an interest in the source code!
 
 * Thanks to David Stark (http://dhmstark.co.uk/) for a great tutorial for the basic ideas of building an incremental game
 */
 
var version = 1;
console.log("running"); //shows game is running in console

//file variables are in files.js
var bytes = 0

//increase bytes by num
function writeByte(num){
	bytes = bytes + num;
	document.getElementById("bytes").innerHTML = bytes;
}

//buy upgrade methods
//buy txt (1/s)
function buyTxt(){
    var txtCost = Math.floor(10 * Math.pow(1.1,txt));
    if(bytes >= txtCost){
        txt = txt + 1;
    	bytes = bytes - txtCost;
        document.getElementById('txt').innerHTML = txt;
        document.getElementById('bytes').innerHTML = bytes;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,txt));
    document.getElementById('txtCost').innerHTML = nextCost;
};

//buy tmp (1/s)
function buyTmp(){
    var tmpCost = Math.floor(10 * Math.pow(1.1,tmp));
    if(bytes >= tmpCost){
        tmp = tmp + 1;
    	bytes = bytes - tmpCost;
        document.getElementById('tmp').innerHTML = tmp;
        document.getElementById('bytes').innerHTML = bytes;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,tmp));
    document.getElementById('tmpCost').innerHTML = nextCost;
};

//buy jpg (3/s)
function buyJpg(){
    var jpgCost = Math.floor(100 * Math.pow(1.1,jpg));
    if(bytes >= jpgCost){
        jpg = jpg + 1;
    	bytes = bytes - jpgCost;
        document.getElementById('jpg').innerHTML = jpg;
        document.getElementById('bytes').innerHTML = bytes;
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,jpg));
    document.getElementById('jpgCost').innerHTML = nextCost;
};

//buy png (3/s)
function buyPng(){
    var pngCost = Math.floor(100 * Math.pow(1.1,png));
    if(bytes >= pngCost){
        png = png + 1;
    	bytes = bytes - pngCost;
        document.getElementById('png').innerHTML = png;
        document.getElementById('bytes').innerHTML = bytes;
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,png));
    document.getElementById('pngCost').innerHTML = nextCost;
};

//buy bmp (3/s)
function buyBmp(){
    var bmpCost = Math.floor(100 * Math.pow(1.1,bmp));
    if(bytes >= bmpCost){
        bmp = bmp + 1;
    	bytes = bytes - bmpCost;
        document.getElementById('bmp').innerHTML = bmp;
        document.getElementById('bytes').innerHTML = bytes;
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,bmp));
    document.getElementById('bmpCost').innerHTML = nextCost;
};

//add bytes earned by upgrades every second
window.setInterval(function(){
	
	writeByte(txt);
	writeByte(tmp);
	writeByte(jpg * 3);
	writeByte(png * 3);
	writeByte(bmp * 3);
	
}, 1000);