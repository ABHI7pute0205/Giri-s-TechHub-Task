/*
22. Check if Array is Sorted (Ascending or Descending)
Concept: Compare each element with the next and verify order.
Use Case: Check data integrity or sort status.
Input: arr = [10, 20, 30, 40, 50]
Output: Array is sorted in ascending order.
*/

let a = [1,2,3,4,5];

let sorted =  true;

for(let i=0;i<a.length;i++){
	  if(a[i] > a[i+1]){
		sorted = false;
		break;
	}
}
	if(sorted)
	  console.log("Array is in Sorted Order...");
	else
	  console.log("Array is NOT  In Sorted Order...");
