/*
6. Find Duplicate Characters
Description: Find characters that appear more than once.
 Example: Input: "programming" → Output: r, g, m
*/

let str = "programming";

let charCount = {};	// this is an Empty Object in JS to store data in a KEY , VALUE Pair   

for(let i=0;i<str.length;i++){

	let ch = str.charAt(i);

	if(charCount[ch] === undefined){	// check the given char is present already or not undefined means this char or num what ever we pass is  not present before in this object 
	  charCount[ch]=1;
	}
	else{
	  charCount[ch] += 1;
	}
}

// for...in loop, in JS to acces the key and value like in JAVA Collection the diff is that in java we use for(dataType var:collectionref){}
// and in JS we use for(let var in ObjectName){}

for(let ch in charCount){
	if(charCount[ch] >= 2){
	  console.log(ch);
	}
}