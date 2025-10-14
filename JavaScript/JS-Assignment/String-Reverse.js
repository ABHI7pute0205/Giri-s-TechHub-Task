/*
1. Reverse a String
Description: Reverse the characters in a string.
 Example: Input: "hello" → Output: "olleh"
*/


let str = "hello"; // original string 

let rev = "";	// variable to store reversed string 

for(let i=str.length-1;i>=0;i--){	// loop start from ending of the string to start  
	rev = rev + str[i];		// store the single single extracted char in a rev string 
}

console.log("String in Reversed Order : ",rev);