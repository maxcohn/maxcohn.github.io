$(document).ready(function(){
	$("#btn-yes").click(function(){
		//show #world
		//$("#world").css("visibility", "visible");
		
		//get rid of all other elements
		$(".content").fadeOut("slow", function(){
			
			//remove .header and .buttons
			$(".header").remove();
			$(".buttons").remove();
			
			//$(".content").append("<h1></h1>");
			
			//show #world
			$("#world").css("visibility", "visible");
			$("#canvas-label").css("visibility", "visible");
			
			//show new text and play audio
		});
		
	});
});