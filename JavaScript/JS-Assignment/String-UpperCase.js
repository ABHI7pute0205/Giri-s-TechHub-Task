/*
8. Convert String to Uppercase / Lowercase
Description: Change all characters to uppercase or lowercase.
 Example: Input: "Hello" → Output uppercase: "HELLO"
*/

let str = "hello";
//console.log(str.toUpperCase());

let upper="";

for(let i=0;i<str.length;i++){
	let ch = str[i];		// point to current index character 
	let code = str.charCodeAt(i);	// get the ASCII code current char 

	if(code >=97 && code <=122){	// a-z 97-122 in between 
	  upper = upper + String.fromCharCode(code-32);  // Strign.fromCharCode(code-32) 97-32=65(A) 
	}
	else{
	  upper = upper + ch;
	}
}

console.log("String in Upper Case : ",upper);