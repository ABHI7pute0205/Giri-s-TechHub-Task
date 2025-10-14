/*
12. Find Second Largest Element
Concept: Track both the largest and second largest while iterating.
Use Case: Find runner-up in a contest, second-highest scorer.
Input: arr = [15, 22, 22, 35, 40, 40, 5]
Second Largest Element: 35
*/

let a = [15, 22, 22, 35, 40, 40, 5];

let large = a[0];
let slarge = a[0];

for(let i=0;i<a.length;i++){
	if(a[i] > large){
	  large = a[i];
	}
}
console.log("First Large Element From Array : ",large);

for(let i=0;i<a.length;i++){
	if(a[i] < large && a[i] >slarge){
	  slarge = a[i];
	}
}
console.log("Second Large Element From Array : ",slarge);