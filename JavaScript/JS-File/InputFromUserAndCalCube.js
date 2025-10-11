
/*
Take i/p from user and calculate cube of the Number 
*/

let readline = require("readline"); // module in JS 


let r1=readline.createInterface({
	input:process.stdin,	// inbuilt objects 
	output:process.stdout
});

r1.question("Enter Number : \n",function(no){
	let res = no*no*no;
	console.log("Cube is : "+res);
	r1.close();
});


// question -> ask user for values OR i/p 
// function() -> pass number of variables you want like   function(n1,n2,....n) : pass multiple variables 