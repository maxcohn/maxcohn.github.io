//loops.js contains all of the loops that trigger constantly during the game

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
	writeByte(html * 15);
	writeByte(css * 15);
	writeByte(js * 15);
	writeByte(xml * 15);
	writeByte(java * 20);
	writeByte(c * 23);
	writeByte(bat * 25);
	writeByte(py * 30);
	writeByte(cs * 35);
	writeByte(vb * 50);
	writeByte(zip * 75);
	writeByte(exe * 100);
	
}, 1000);

//achievement loop (checks for new achievements every second)
window.setInterval(function(){
	
	checkTyper(); //10 txt files
	checkSecretary(); //100 txt files
	checkAudiophile(); //1000 audio files (mp3, wav, flac)
	
}, 1000);

//make sure values are updated
window.setInterval(function(){
	
	document.getElementById("txt").innerHTML = txt;
	document.getElementById("tmp").innerHTML = tmp;
	document.getElementById("jpg").innerHTML = jpg;
	document.getElementById("png").innerHTML = png;
	document.getElementById("bmp").innerHTML = bmp;
	document.getElementById("gif").innerHTML = gif;
	document.getElementById("mp3").innerHTML = mp3;
	document.getElementById("wav").innerHTML = wav;
	document.getElementById("flac").innerHTML = flac;
	document.getElementById("mp4").innerHTML = mp4;
	document.getElementById("wmv").innerHTML = wmv;
	document.getElementById("avi").innerHTML = avi;
	document.getElementById("html").innerHTML = html;
	document.getElementById("css").innerHTML = css;
	document.getElementById("js").innerHTML = js;
	document.getElementById("xml").innerHTML = xml;
	document.getElementById("java").innerHTML = java;
	document.getElementById("c").innerHTML = c;
	document.getElementById("bat").innerHTML = bat;
	document.getElementById("py").innerHTML = py;
	document.getElementById("cs").innerHTML = cs;
	document.getElementById("vb").innerHTML = vb;
	document.getElementById("zip").innerHTML = zip;
	document.getElementById("exe").innerHTML = exe;
	
}, 1000);