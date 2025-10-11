/*
11. Find First Non-Repeating Character
Description: Identify first character that appears only once.
 Example: Input: "swiss" → Output: 'w'
*/

let str = "swiss";

let charOucc={};

for(let i=0;i<str.length;i++){
	let ch = str[i];

	if(charOucc[ch] === undefined){
	   charOucc[ch] = 1;
	}
	else{
	  charOucc[ch]++;
	}
}

for(let ch in charOucc){
	if(charOucc[ch] == 1){
	  console.log("first Non-Repeating Char : ",ch);
	  break;
	}
}