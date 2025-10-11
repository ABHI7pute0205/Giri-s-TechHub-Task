/*
7. Remove Duplicate Characters
Description: Remove all duplicates, keep first occurrences.
 Example: Input: "banana" → Output: "ban"
*/

let str = "banana";
let seen = {};	// empty Object to store data in a Key-Value Pair 
let res="";

for(let i=0;i<str.length;i++){
	let ch = str[i];	// points to the character at given index 

	if(!seen[ch]){	 	// check char is already in a seen Object present or not if not then add it in a res 
	  res = res + ch;
	  seen[ch] = true;	// and mark it as a true measn this char visited already or present in a Empty Object already 
	}
}
console.log("String after Remove Duplicate : ",res);