/*
2. Find Minimum Element in an Array
Concept: Similar to maximum, but track the smallest element.

 Example: arr = [12, 45, 2, 67, 33, 89, 21]
 Output: 2

*/

let arr = [12,45,2,67,33,89,21];

let min=arr[0];		// Assign 0th index element as a small and compaire remaingn 

for(let i=0;i<arr.length;i++){
	if(arr[i] < min){
	  min = arr[i];
	}
}
console.log("Min Element From Array : ",min);