/*
16. Check if String Contains Only Digits
Description: Verify if string consists of digits only.
 Example: Input: "12345" → Output: True
*/


let str = "12345";

let onlyDigit = true;	// intitally we consider all are digits 

for(let i=0;i<str.length;i++){
	let ch = str[i];	// extract single char from string 

	if(ch<'0' || ch>'9'){	// check ch is greater than digit and less than dig then it is not a digit and break loop 
	  onlyDigit = false;
	  break;
	}
}
if(onlyDigit)
   console.log("String Contains Only Digit...");
else
   console.log("String Does Not Contains Any Digit...");
