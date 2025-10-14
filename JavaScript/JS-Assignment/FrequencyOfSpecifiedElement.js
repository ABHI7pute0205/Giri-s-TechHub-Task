/*
23. Find the Frequency of a Specific Element
Concept: Count how many times a given value appears in the array.
Use Case: Count votes, survey results, repeated entries.
Input:  arr = [4, 5, 6, 4, 7, 4, 8]
Target element = 4
Frequency of element 4 is: 3
*/

let a = [4, 5, 6, 4, 7, 4, 8];

let targetElement=4;
let cnt=0;

for(let i=0;i<a.length;i++){
	if(a[i] == targetElement){
	  cnt++;
	}
}
console.log("Target Element Occur : ",cnt);