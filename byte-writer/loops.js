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
	
}, 1000);

//achievement loop (checks for new achievements every second)
window.setInterval(function(){
	
	checkTyper();
	
}, 1000);