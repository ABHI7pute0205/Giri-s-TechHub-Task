/*
19. Right Rotate an Array by 1 or K Positions
Concept: Shift elements to the right and bring the last to front.
Use Case: Buffer manipulation.
Input: arr = [10, 20, 30, 40, 50]
Right rotated array by 2 positions: [40, 50, 10, 20, 30]
*/

let a = [10, 20, 30, 40, 50];

let k=2;

for(let i=0;i<k;i++){	 

	let last = a[a.length-1];   // get the last element of the array 

	for(let j=a.length-1;j>0;j--){  // shift all elements to the right side of the array 
	  a[j] = a[j-1];   // this is just override the next value on previous value 
	}
	
	a[0]= last;	// store the last element at the fst position  
}

console.log("RIGHT Rotted Array By Kth position :",a);