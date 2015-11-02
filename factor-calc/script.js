//factor calc

//returns array of factors of number
function getFactors(integer){
	var factors = [],
	quotient = 0;

	for(var i = 1; i <= integer; i++){
		quotient = integer/i;

		if(quotient == Math.floor(quotient)){
		factors.push(i); 
		}
	}
	return factors;
}

$(document).ready(function(){
	$("#calculate").click(function(){
		//one line version of the code below (for fun)
		$("#factors").val(getFactors(Math.abs(parseInt($("#factored-num").val()))));
		////parseInt #factored-num to get an integer
		//var num = parseInt($("#factored-num").val());
		////get absolute value of num
		//num = Math.abs(num);
		////set text of #factors to be getFactors(num)
		//$("#factors").val(getFactors(num));
	});
});