
function addStream(){
	var stream = prompt("Enter the username of the stream you would like to add.");
	if(!(stream == null || stream.trim() == "")){
		//change 'embed' to 'hls' when html5 player embeding is working properly
		$(".stream").append("<iframe src='http://www.twitch.tv/" + stream + "/hls' frameborder='0' scrolling='no' height='378' width='620' style='margin: 10px;'></iframe>");
	}
}

$(document).ready(function(){
	//on #add-stream click
	$("#add-stream").click(function(){
		addStream();
	});
	
	//on keypress
	$("body").keypress(function(event){
		//on shift + N key press
		if(event.which == 78){
			addStream();
		}
	});
});