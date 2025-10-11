/*
28. Find the Duplicate Number in a Series
Concept: Use a frequency map or mathematical formula.
Use Case: Debugging ID collisions or registration errors.
 Input: a = [1, 2, 3, 4, 2, 5]
Duplicate number is: 2
*/

let a = [1, 2, 3, 4, 2, 5];

let duplicate = false;	// take one flag is duplicate found then it will true 
let duplicateNum = 0;

for(let i =0;i<a.length;i++){ // loop traverse each element 

   for(let j = i+1;j<a.length;j++){	// loop traverse element after ith index i.e take elememt emediate after fist selected and check is it duplicate or not 
      
	if(a[i] === a[j]){
	   duplicate = true;
	   duplicateNum = a[i];

	   break;   // here we exit inner loop 
	}
      }
      if(duplicate)	// we need to break the outer loop either it will give the wrong o/p
	 break;		// break outer loop when duplicate found
}

console.log("Duplicate number is : ",duplicateNum);