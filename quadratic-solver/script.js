var aTerm, bTerm, cTerm;
var roots = [0,0];

aTerm = 1;
bTerm = 0;
cTerm = -4;

function solveForRoots(a,b,c){
	var discriminant = b * b - 4 * a * c;
	var root1 = ((-1 * b) + Math.sqrt(discriminant)) / (2 * a);
	var root2 = ((-1 * b) - Math.sqrt(discriminant)) / (2 * a);
	
	if(discriminant > 0){
		return  root1 + " and " + root2; 
	}else if(discriminant === 0){
		return root1;
	}else{
		return "There are no real roots."
	}
}

console.log(solveForRoots(aTerm,bTerm,cTerm));

/*
	TODO

	Make simple gui
	import into android stuio
	ad adds
	make icon
	upload
	???
	profit
*/

$("document").ready(function(){
	alert("ased");
});