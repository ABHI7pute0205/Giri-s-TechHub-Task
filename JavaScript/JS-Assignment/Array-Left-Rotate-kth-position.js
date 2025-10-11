/*
18. Left Rotate an Array by 1 or K Positions
Concept: Shift elements to the left and move the first elements to the end.
Use Case: Circular queues, scheduling algorithms.

Input: arr = [10, 20, 30, 40, 50]
Left rotated array by 2 positions: [30, 40, 50, 10, 20]
*/

let a = [10, 20, 30, 40, 50];

let k=2;

for(let i=0;i<k;i++){	// loop up to kth position 

	let fst = a[0];   // stores fst element of the array in it

	for(let j=0;j<a.length-1;j++){ // loop goes to .length-1 element 
	  a[j] = a[j+1];  // shift every element to one position to left
	}
	
	a[a.length-1]= fst;	// add fst selected element at the last 
}

console.log("Left Rotted Array By Kth position :",a);