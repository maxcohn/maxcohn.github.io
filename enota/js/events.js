
$(document).ready(function(){
	//on start
	(function(){
		//attempt to load local storage
		note.loadLocal();
		note.displayNotes();
		//hide all editing elements
		note.hideAllEditElements();
	})();

	//on .note-object class
	$(document).on("click",".note-container",function(e){
		if($(e.target).is(".note-option")){
			//set note.selectedNoteId to the selected note's id
			note.selectedNoteId = parseInt($(this).children(":first").attr('id'));
			return;
		}

		//if a note was selected
		if($(this).children(":first").hasClass("type-note")){
			note.openNote(parseInt($(this).children(":first").attr("id")));
		}
		//if a checklist was selected
		if($(this).children(":first").hasClass("type-checklist")){
			//TODO	
		}
		//if a bulletlist was selected
		if($(this).children(":first").hasClass("type-bulletlist")){
			//TODO	
		}
		//if a reminder was selected
		if($(this).children(":first").hasClass("type-reminder")){
			//TODO	
		}
		//scroll to top of page
		$("body").scrollTop(0);
	});

	//on .btn-rename
	$(document).on("click",".btn-rename",function(){
		note.renameNote(note.selectedNoteId, prompt("Enter new note name.",note.getNoteName(note.selectedNoteId)));
		$('#option-modal').modal("toggle");	
	});

	//on .btn-delete
	$(document).on("click",".btn-delete",function(){
		note.removeNote(note.selectedNoteId);
		$('#option-modal').modal("toggle");
	});

	//TODO on .edit-save click
	$(".edit-save").click(function(){
		//save current val of .note-edit-area into current note in "save"
		save[note.currentNoteIndex].contents = $(".note-edit-area").val();
		note.saveLocal();
	});

	//TODO on .edit-back click
	$(".edit-back").click(function(){
		//check if current value of .note-edit-are is the saved one
		if($(".note-edit-area").val() === save[note.currentNoteIndex].contents){
			//if note is up to date, exit to menu system
			note.hideAllEditElements();
			note.showMenuElements();
			//set note.currentNoteIndex to -1
			note.currentNoteIndex = -1;
			return;
		}

		if(confirm("You have made changes without saving. Do you want to discard any changes?")){
			//if user choose to exit without saving
			note.hideAllEditElements();
			note.showMenuElements();
			note.currentNoteIndex = -1;
		}
	});

	//on .new-note click
	$(".new-note").click(function(){
		//TODO prompt user with list of different notes to create
		//for now, the button will only create a new basic note

		//prompt user for note name
		var newNoteName = prompt("Enter the name of the new note.");
		//check if user entered a title
		if(newNoteName === null){
			alert("A valid note name was not entered.");
			return;
		}

		//TODO check note name length  (< 13 or 17, need to test)

		//add new note to "save"
		note.addNote(newNoteName,"");
		//save to localStorage
		note.saveLocal();
		//open new note
		note.openNote(note.getNewestNoteId());
	});

	$(window).on('beforeunload', function(){
		//save current val of the current note into current note in "save"

		//check the current note's noteType, and save acordingly to the note type
		switch(save[note.currentNoteIndex].noteType){
			case "note":
				save[note.currentNoteIndex].contents = $(".note-edit-area").val();
				newote.saveLocal();
				break;	
		}
		
		
    });

});