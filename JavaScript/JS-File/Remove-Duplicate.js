/*
14. Remove Duplicate Elements
Concept: Compare each element with others and remove if already seen.
Use Case: Eliminate duplicate entries in a list.
Input : arr = [2, 5, 3, 2, 8, 5, 6]
Array after removing duplicates: [2, 5, 3, 8, 6]
*/

let a = [2, 5, 3, 2, 8, 5, 6];

let res = [];	// result array to store unique elements 
let ind = 0;

for(let i=0;i<a.length;i++){
	let duplicate = false;

	for(let j=0;j<res.length;j++){
	  if(a[i] == res[j]){
	    duplicate = true;		// if duplicate found stop loop 
	    break;
	  }
	}

	if(!duplicate)		// if element not duplicate then added it to res array  
	   res[ind++] = a[i];
 		 
}

console.log("Array After Duplicate Remove :");
for(let i=0;i<ind;i++){
   console.log(res[i]);
}