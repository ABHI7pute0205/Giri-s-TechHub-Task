// Write a function to check if a given string is a palindrome.

function StringPalindrome(str){
	let reverse = "";

	for(let i=str.length-1;i>=0;i--){	// Reverse the Original String 
	  reverse = reverse + str.charAt(i);
	}

	if(str === reverse){			// Compaire the Original String And Reversed String is equal === equal to means Strictly Equal's means it check value as well as Data Type  if equal then palindrome if not then Not Palindrome 
	   return "String is Palindrome";
	}
	else{
	  return "String is Not Palindrome";
	}
}

let res = StringPalindrome("madam");
console.log(res);