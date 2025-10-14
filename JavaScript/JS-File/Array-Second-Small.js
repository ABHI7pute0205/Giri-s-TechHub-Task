/*
13. Find Second Smallest Element
Concept: Track smallest and second smallest.
Use Case: Identify the next lowest cost or metric.
*/

let a = [15, 22, 22, 35, 40, 40, 5];

let small = a[0];
let ssmall = a[0];

for(let i=0;i<a.length;i++){
	if(a[i] < small && a[i] > ssmall){  // first condition check the smallest element from the array and second && consition check the element > then Second Smallest
	  ssmall = a[i];
	}
}
console.log("Second Small From the Array  : ",ssmall);