/*
12. String Compression
Description: Compress consecutive repeated characters as char + count.
 Example: Input: "aaabbc" → Output: "a3b2c1"
*/

let str = "aaabbc";
let res="";
let cnt=1;

for(let i=0;i<str.length;i++){

	if(str[i] === str[i+1]){	// comparire current char with next char and increase the cnt 
	  cnt++;
	}
	else{
	  res = res + str[i] + cnt;	// store it in a res string 
	  cnt=1;			// and default cnt is 1 
	}
}
console.log(res);