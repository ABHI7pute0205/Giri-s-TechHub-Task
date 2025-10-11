/*
7. Reverse an Array
Concept: Swap elements from both ends moving toward the center.
Use Case: Invert order of operations or list of commands.
Example: arr = [10, 20, 30, 40, 50]
Reversed array: [50, 40, 30, 20, 10]
*/

let arr = [10,20,30,40,50];

console.log("Original Array : ");
for(let i=0;i<arr.length;i++){
	console.log(arr[i]);
}

let start = 0;		// points to the 0th index element in a array 
let end = arr.length-1; // points to the last index element in array

while(start < end){	// loop executes untill elements meet from left and right

	let temp = arr[start];
	arr[start] = arr[end];
	arr[end] = temp;

   start++;	// increase the start by 1 in each iteration 
   end--;	// decrease the end by 1 in every iteration
}
console.log("Array In Reversed Order : ");

for(let i=0;i<arr.length;i++){
	console.log(arr[i]);
}