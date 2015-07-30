/**
 * Byte Writer
 * Copyright (C) 2015 Maxwell Cohn <maxc1234@hotmail.com>

 * If you're reading this, thanks for taking an interest in the source code!
 
 * Thanks to David Stark (http://dhmstark.co.uk/) for a great tutorial for the basic ideas of building an incremental game
 */
 
var version = 2;
console.log("running"); //shows game is running in console

//file variables are in files.js
var bytes = 0;

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

//buy gif (5/s)
function buyGif(){
	var gifCost = Math.floor(250 * Math.pow(1.1,gif));
    if(bytes >= gifCost){
        gif = gif + 1;
    	bytes = bytes - gifCost;
        document.getElementById('gif').innerHTML = gif;
        document.getElementById('bytes').innerHTML = bytes;
    };
    var nextCost = Math.floor(250 * Math.pow(1.1,gif));
    document.getElementById('gifCost').innerHTML = nextCost;	
}

//buy mp3 (7/s)
function buyMp3(){
	var mp3Cost = Math.floor(400 * Math.pow(1.1,mp3));
    if(bytes >= mp3Cost){
        mp3 = mp3 + 1;
    	bytes = bytes - mp3Cost;
        document.getElementById('mp3').innerHTML = mp3;
        document.getElementById('bytes').innerHTML = bytes;
    };
    var nextCost = Math.floor(400 * Math.pow(1.1,mp3));
    document.getElementById('mp3Cost').innerHTML = nextCost;	
}

//buy wav (7/s)
function buyWav(){
	var wavCost = Math.floor(400 * Math.pow(1.1,wav));
    if(bytes >= wavCost){
        wav = wav + 1;
    	bytes = bytes - wavCost;
        document.getElementById('wav').innerHTML = wav;
        document.getElementById('bytes').innerHTML = bytes;
    };
    var nextCost = Math.floor(400 * Math.pow(1.1,wav));
    document.getElementById('wavCost').innerHTML = nextCost;	
}

//Starting at upgrade-area3, buy methods are now buy_"name of format" instead of buy"name of format, capitalized"

//buy flac (9/s)
function buy_flac(){
	var flacCost = Math.floor(800 * Math.pow(1.1,flac));
    if(bytes >= flacCost){
        flac = flac + 1;
    	bytes = bytes - flacCost;
        document.getElementById('flac').innerHTML = flac;
        document.getElementById('bytes').innerHTML = bytes;
    };
    var nextCost = Math.floor(800 * Math.pow(1.1,flac));
    document.getElementById('flacCost').innerHTML = nextCost;
}

//buy mp4 (12/s)
function buy_mp4(){
	var mp4Cost = Math.floor(1000 * Math.pow(1.1,mp4));
    if(bytes >= mp4Cost){
        mp4 = mp4 + 1;
    	bytes = bytes - mp4Cost;
        document.getElementById('mp4').innerHTML = mp4;
        document.getElementById('bytes').innerHTML = bytes;
    };
    var nextCost = Math.floor(1000 * Math.pow(1.1,mp4));
    document.getElementById('mp4Cost').innerHTML = nextCost;
}

//buy wmv (12/s)
function buy_wmv(){
	var wmvCost = Math.floor(1000 * Math.pow(1.1,wmv));
    if(bytes >= wmvCost){
        wmv = wmv + 1;
    	bytes = bytes - wmvCost;
        document.getElementById('wmv').innerHTML = wmv;
        document.getElementById('bytes').innerHTML = bytes;
    };
    var nextCost = Math.floor(1000 * Math.pow(1.1,wmv));
    document.getElementById('wmvCost').innerHTML = nextCost;
}

//buy avi (12/s)
function buy_avi(){
	var aviCost = Math.floor(1000 * Math.pow(1.1,avi));
    if(bytes >= aviCost){
        avi = avi + 1;
    	bytes = bytes - aviCost;
        document.getElementById('avi').innerHTML = avi;
        document.getElementById('bytes').innerHTML = bytes;
    };
    var nextCost = Math.floor(1000 * Math.pow(1.1,avi));
    document.getElementById('aviCost').innerHTML = nextCost;
}


//add bytes earned by upgrades every second
window.setInterval(function(){
	
	writeByte(txt);
	writeByte(tmp);
	writeByte(jpg * 3);
	writeByte(png * 3);
	writeByte(bmp * 3);
	writeByte(gif * 5);
	writeByte(mp3 * 7);
	writeByte(wav * 7);
	writeByte(flac * 9);
	writeByte(mp4 * 12);
	writeByte(wmv * 12);
	writeByte(avi * 12);
	
}, 1000);