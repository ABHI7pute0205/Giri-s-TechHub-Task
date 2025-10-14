/*
5. Check Anagram
Description: Check if two strings are anagrams (contain same characters in any order).
 Example: Input: "listen", "silent" → Output: True
*/

let str1="listen";
let str2="silent";

let count = {};  //[Empty Object]it is object array in JS which stores data in a Key and Value pair 

if(str1.length != str2.length){
	console.log("Strings Are Not Anagram");
}

// add each character in a count and also increase it's count when ever it occur multiple time 

for(let i=0;i<str1.length;i++){
	let ch = str1.charAt(i);

	if(count[ch] === undefined || char[ch] ===0){
 	  count[ch] = 1;
	}
	else{
	  count[ch] = count[ch]+1;
	}
}

// decrease the count of that char from count Object
 
for(let j=0;j<str2.length;j++){
 	let ch = str2.charAt(j);

	if(!count[ch]){		// string madhl char jar count madhe nas l ch tar te not anagram 
	  console.log("Strings are not anagram");
	  return;
	}
	else{	// string 2 madhl char count object array  madhe present asl tar tya cha count decrease kela jato 
	  count[ch]--;
	}
}

for(let char in count){
	if(count[char] !== 0){	// jar ekhad char present asl or sagle char remove zale le nasle tar not Anagram 
	  console.log("Strings are not anagrams");
	  return;
	}
}
// otherwise string is anagram 
console.log("String are Anagram");	