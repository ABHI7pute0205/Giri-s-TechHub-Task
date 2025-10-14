/*
9. Check if String is a Substring
Description: Determine if one string is contained within another.
 Example: Input: "hello world", "world" → Output: True
*/

let str = "hello word";
let substr="word";
let isSubstring = false;

for(let i=0;i<= str.length - substr.length;i++){
	let match = true;

	for(let j=0;j<substr.length;j++){
	   if(str[i+j] !== substr[j]){   // original String madhl i+j i.e 0+0 !== 0 j!==w [T]| h!=o [T]| h != r [T]| h!=d[T] 6+0=6 w !== 0 w False   
		match = false;		// here match eqaul false and break
		break;
	   }
	}
	if(match){		// tikd var ti loop false zal ki eith yet and match eqaul true 
	  isSubstring = true;
	  break;
	}
}

if(isSubstring)
   console.log("String contain Substring");
else
   console.log("String NOT a Substring");
