/*
2. Check Palindrome
Description: Check if a string reads the same backward and forward.
 Example: Input: "madam" → Output: True
*/

let str = "madam";

let start = 0;  // start index of the stirng 

let end = str.length-1; // end index of the string 

let palindrome=true;

while(start < end){	// loop till in execution upto start_index < end_index 
	
	if(str[start] !== str[end]){	// compaire the characters of the string which are present on those indices if any one missmatch then not palindrome and break loop 
		palindrome=false;
		break;
	}	
	start++;
	end--;
	
}
if(palindrome)
  console.log("String is Palindrome...");
else
  console.log("String is NOT Palindrome...");