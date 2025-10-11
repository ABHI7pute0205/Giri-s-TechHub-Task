/* JS 
Array Program 
Program Based on Array 
___________________________________________________
1. Find Maximum Element in an Array
Concept: Traverse the array and keep track of the maximum value found so far.

Example: arr = [12, 45, 2, 67, 33, 89, 21]
Output: 89
*/


let arr =  [12,45,2,67,33,89,21];
let max=-1;
for(let i=0;i<arr.length;i++){
	if(arr[i] > max){
	   max=arr[i];
	}  
}

console.log("Max Element From JS Array : ",max);