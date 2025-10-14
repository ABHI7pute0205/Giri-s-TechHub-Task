/*
8. Copy One Array to Another
Concept: Iterate and assign elements from one array to a second array.
Use Case: Useful in backup or undo operations.

source = [5, 10, 15, 20, 25]
destination = [5, 10, 15, 20, 25]
*/

let arr = [5,10,15,20,25];

let res = []; //  empty array to coiped another array element in it

let ind = 0;	// index to track the element count 

for(let i=0;i<arr.length;i++){
	res[ind++] = arr[i]; 
}

console.log("Array Copied in Another Array  : ");
for(let i=0;i<ind;i++){
	console.log(res[i]);
}