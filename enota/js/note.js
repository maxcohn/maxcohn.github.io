//Note organization app
//Created by: Maxwell Cohn
//Started on 2/16/16

var note = {}; //base object in which most methods and variable pretaining to this project will reside
note.testing = {}; //holds all variables and methods used for testing
var save = []; //contains all data on all notes

note.consts = {}; //holds contants for the note object

note.selectedNoteId = -1; //holds the id of the current note with options open
note.currentNoteIndex = -1; //holds the id of the current note that is opened

/*
note.addFolder = function(folName){
	save.push({name:folName,contents:[]});
}
*/

//saves "save" to localStorage
note.saveLocal = function(){
	localStorage.setItem("noteSave",JSON.stringify(save));
}
//loads localStorage key of "save" into the "save" object, if there is an object
note.loadLocal = function(){
	if(localStorage.getItem("noteSave") !== null){
		save = JSON.parse(localStorage.getItem("noteSave"));
	}
}
//returns a usable noteId for an object
note.getUsableNoteId = function(){
	var max = 0;
	if(save.length > 0){
		for(var i = 0; i < save.length; i++){
			if(save[i].noteId > max){
				max = save[i].noteId;
			}
		}
	}
	//return usable noteId
	return max + 1;
	
}
//returns the index of the note with the entered id
note.getNoteSaveIndex = function(noteId){
	var indexOfId;
	for(var i = 0; i < save.length; i++){
		if(save[i].noteId === noteId){
			indexOfId = i;
		}
	}
	return indexOfId
}

//returns the name of the note with the entered id
note.getNoteName = function(noteId){
	
	return save[note.getNoteSaveIndex(noteId)].name;
}
//adds a note object to the save object
note.addNote = function(noteName, noteContents){
	//pushes onject with note data into "save"
	save.push({noteId:note.getUsableNoteId(),noteType:"note",name:noteName,contents:noteContents});
}
//adds a checklist object to the save object
note.addChecklist = function(noteName, noteContents){
	//pushes onject with note data into "save"
	save.push({noteId:note.getUsableNoteId(),noteType:"checklist",name:noteName,contents:noteContents});
}

//adds a bulletlist object to the save object
note.addBulletlist = function(noteName, noteContents){
	//pushes onject with note data into "save"

	//TODO add noteId
	save.push({noteType:"bulletlist",name:noteName,contents:noteContents});
}
//adds a reminder object to the save object
note.addReminder = function(noteName, noteDate){
	//pushes object with note data into "save"

	//TODO add noteId
	save.push({noteType:"reminder",name:noteName,date:noteDate});
}
//displays the notes to the page
note.displayNotes = function(){
	//empty .note-list
	$(".note-list").empty();
	//loop through and add notes to their respective place
	if(save.length > 0){
		for(var i = 0; i < save.length; i++){
			//get noteType
			var noteType = save[i].noteType;
			//determine which glyphicon to use for each note
			var glyphiconName;
			switch(noteType){
				case "note":
					glyphiconName = "glyphicon-pencil";
					break;
				default:
					glyphiconName = ""; //on default, set the icon to empty, so no icon appears
			}
			//TODO add more note type's glyphicon classes
			
			$(".note-list").append("<div class='note-container'><span id='" + save[i].noteId + "' class='note-object type-" + noteType + "'><span class='glyphicon " + glyphiconName + "'></span>&nbsp " + save[i].name + "</span><span class='note-option glyphicon glyphicon-option-vertical' data-toggle='modal' data-target='#option-modal'></span></div>");
		}
	}
}
//hides all the elements that have to do with editing notes
note.hideAllEditElements = function(){
	//TODO add more class as new editors are added
	$(".note-edit").hide();
}
//hides all elements that pertain to the main menu system
note.hideMenuElements = function(){
	$(".note-list").hide();
	$(".new-note").hide();
}
//show all elements that perntain to the main menu system
note.showMenuElements = function(){
	//show neccessary elements
	$(".note-list").show();
	$(".new-note").show();
	//re-display the elements
	note.displayNotes();
}
//returns the id of the most recently created note created
note.getNewestNoteId = function(){
	//returns the note with the highest id, which will always be the most recent
	var max = 0;
	if(save.length > 0){
		for(var i = 0; i < save.length; i++){
			if(save[i].noteId > max){
				max = save[i].noteId;
			}
		}
	}
	//return most recent noteId
	return max;
}
//opens a note by loading contents into the edit area, and reveals the proper elemtns, whiling hiding uneccesary ones
note.openNote = function(idToFind){
	//get the index of the note with the inputted id
	var indexOfId = note.getNoteSaveIndex(idToFind);

	//TODO make switch that selects based on noteType
	//hide any elements that aren't related to note editing
	$(".note-list").hide();
	$(".new-note").hide();
	//show .note-edit
	$(".note-edit").show();
	//add note contents to .note-edit-area
	$(".note-edit-area").val(save[indexOfId].contents);
	//set .note-name to be the name of the opened note
	$(".note-name").text(save[indexOfId].name);
	//set note.currentNoteIndex to indexOfId
	note.currentNoteIndex = indexOfId;
}
//delete the note with the note id that was chosen
note.removeNote = function(id){
	//get the index of the id in the "save" object
	var index;
	for(var i = 0; i < save.length; i++){
		if(save[i].noteId === id){
			index = i;
		}
	}
	save.splice(index,1);
	//re-display to show updated menu
	note.displayNotes();
	//save the new "save" object to localStorage
	note.saveLocal();
}
//renames the chosen note to a new name
note.renameNote = function(idToFind, newName){
	//get the id of the note in the "save" object
	var indexOfId = note.getNoteSaveIndex(idToFind);
	//change name of note in "save" object
	save[indexOfId].name = newName;
	//save to localStorage
	note.saveLocal();
	//update display
	note.displayNotes();
}

//----------------------------------------------------------
//TESTING METHODS
//----------------------------------------------------------
note.testing.addBasicNotes = function(noteAmount){
	//arrays of note titles and content
	var noteArr1 = ["Hello World","Apology","Heisen-note"];
	var noteArr2 = ["That's right, I used a programming cliche, what of it?","I'm sorry about the aggression in the last note, I hope you can find it in your heart to forgive me.","I'm the note that knocks."];
	//add notes to save
	for(var i = 0; i < noteAmount; i++){
		note.addNote(noteArr1[i],noteArr2[i]);
	}
	//save notes
	note.saveLocal();
	//display new notes
	note.displayNotes();
}