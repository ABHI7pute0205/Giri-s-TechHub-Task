/*
I/p two values from use and swap them without using third variable 
*/

let readline = require("readline");

let r1 = readline.createInterface({
	input:process.stdin,
	output:process.stdout
}); 

r1.question("Enter Two Values : \n",function(inval){	// Java Sarkh String madhe I/P ghet JS-sagl kahi string mhanun consider hot

	console.log("Before Swapping");
	
	if(inval.length>1){	

	let strArr = inval.split(" ");

	let a=parseInt(strArr[0]);
	let b=parseInt(strArr[1]);

	  console.log("Before Swapp ");
	  console.log("A = "+a+"\tB= "+b);

	 a = a+b;
	 b = a-b;
	 a = a-b;

	  console.log("After Swapp ");
	  console.log("A = "+a+"\tB= "+b);
	
	}
	else{
	  console.log("invalid Input")
	}
	r1.close();
});