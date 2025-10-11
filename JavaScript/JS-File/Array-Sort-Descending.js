/*
11. Sort Array in Descending Order
Concept: Same as ascending but change comparison direction.
Use Case: Rank from highest to lowest.
Example: arr = [3, 8, 5, 1, 9]
Sorted Array in Descending Order: [9, 8, 5, 3, 1]

*/

let a = [3,8,5,1,9];

for(let i=0;i<a.length;i++){
	for(let j=0;j<a.length;j++){
	  if(a[i] > a[j]){
		let temp = a[i];
		a[i] = a[j];
		a[j] = temp; 
	  }
	}
}
console.log("Array In Descending Order : ");
for(let i=0;i<a.length;i++){
	console.log(a[i]);
}