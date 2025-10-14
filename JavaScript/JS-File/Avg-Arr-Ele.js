/*
4. Average of Elements
Concept: First compute the sum, then divide by the number of elements.
 
arr = [10, 20, 30, 40, 50]
Average of array elements: 30.0

*/

let arr = [10,20,30,40,50];

let avg = 0;
let sum = 0;

for(let i=0;i<arr.length;i++){
	sum  = sum + arr[i];
}

avg = sum / arr.length;

console.log("Average of the Array Element : ",avg);