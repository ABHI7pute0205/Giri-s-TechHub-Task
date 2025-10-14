/*
3. Sum of All Elements
Concept: Use a loop to add each element to a running total.
 Example: arr = [1,2,3,4,5]
 Output: 15

*/

let arr = [1,2,3,4,5];

let sum = 0;

for(let i=0;i<arr.length;i++){
	sum = sum + arr[i];
}

console.log("Sum of the Array Element : ",sum);