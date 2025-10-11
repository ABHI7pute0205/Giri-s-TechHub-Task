/*
15. Count Number of Palindromic Substrings
Description: Count all substrings that are palindrome.
 Example: Input: "aaa" → Output: 6 (a, a, a, aa, aa, aaa)
*/

let str = "aaa";

let cnt=0;

for(let i=0;i<str.length;i++){	// loop goes upto str.length

	for(let j=i;j<str.length;j++){  // this loop start from ith index of outer loop 

	  let palindrome=true;		// initially we consider all char are palindromic 
	
	  let left=i;		// we assign outer loop inder i.e i to left 
	  let right=j;		// and inner loop index j to right 

	 while(left < right){	// and check here left < right i.e i<j true 

		if(str.charAt(left) != str.charAt(right)){	// and char at index i is NOT equal to char at index j then false not palindrome 
		   palindrome=false;
		   break;  			// and break the loop 
	  	}
	   left++;	// increasing ith index value to check next element 
	   right--;	// decreasing jth index to check each char 
	 }
	 if(palindrome){	// if palindrome equal true then increase the cnt 
	   cnt++;
	 }
	}
}
console.log("Total Palindromic SubString : ",cnt);