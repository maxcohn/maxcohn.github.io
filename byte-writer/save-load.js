//save-load.js contains the import, export, save, and load methods for Byte Writer
//the import and export methods give/take (respectively) data format he user to load
//the save and load methods save and load data from HTML5 local storage

//format of save "txt tmp jpg png bmp gif mp3 ...". Save is all variables in order with spaces in between

//TODO: add rest of variables to export save

function exportSave(){
	//print out save that will work through import
	document.getElementById("import-export").value = txt + " " + tmp + " " + jpg + " " + png + " " + bmp + " " + gif + " " + mp3 + " " +
		wav + " " + flac + " " + mp4 + " " + wmv + " " + avi + " " + html + " " + css + " " + js + " " + xml + " " + java + " " + c +
		" " + bat + " " + py + " " + cs + " " + vb + " " + zip + " " + exe;
		
	console.log("finished exporting");
}

function importSave(){
	var nums = [];
	var userSave = document.getElementById("import-export").value;
		
	if(userSave.length != ""){
		
		userSave = userSave + " "; //add space to the end of userSave
		//console.log(userSave); //make sure input was taken
		
		while(userSave.length > 1){
			var quant; //quantity of item to load
			
			quant = userSave.substring(0, userSave.search(" "));
			
			userSave = userSave.substring(userSave.search(" ") + 1, userSave.length);
			
			nums.push(parseInt(quant)); //add quant to array of numbers
		}
		
		//change value of variables
		txt = nums[0];
		tmp = nums[1];
		jpg = nums[2];
		png = nums[3];
		bmp = nums[4];
		gif = nums[5];
		mp3 = nums[6];
		wav = nums[7];
		flac = nums[8];
		mp4 = nums[9];
		wmv = nums[10];
		avi = nums[11];
		html = nums[12];
		css = nums[13];
		js = nums[14];
		xml = nums[15];
		java = nums[16];
		c = nums[17];
		bat = nums[18];
		py = nums[19];
		cs = nums[20];
		vb = nums[21];
		zip = nums[22];
		exe = nums[23];
		
		console.log("finished importing");
	}else{
		console.log("save invalid");
	}
}

function saveToLocal(){
	
}

function loadFromLocal(){
	
}