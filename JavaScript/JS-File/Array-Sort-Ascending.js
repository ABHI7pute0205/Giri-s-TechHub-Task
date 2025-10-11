/*
10. Sort Array in Ascending Order
Concept: Implement a sorting algorithm like bubble sort, selection sort, or use built-in sort.
Use Case: Sort names, scores, ranks, etc.
Input: arr = [7, 2, 9, 4, 1]
Output:  [1,2,4,7,9]
*/

let arr = [7,2,9,4,1];

for(let i=0;i<arr.length;i++){
   for(let j=0;j<arr.length;j++){
	if(arr[i] < arr[j]){
	  let temp = arr[i];
	  arr[i] = arr[j];
	  arr[j] = temp;
	}
   }
}
console.log("Array Sorted in Ascending Order : ")
for(let i=0;i<arr.length;i++){
   console.log(arr[i]);
}