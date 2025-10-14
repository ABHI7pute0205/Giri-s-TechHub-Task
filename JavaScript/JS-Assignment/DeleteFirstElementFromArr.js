/*
Delete First Element
Without using shift(), remove the first element from an array.
Example: [5, 6, 7, 8] → [6, 7, 8]
*/

let a = [5,6,7,8];

for(let i=0;i<a.length-1;i++){	// this loop goes till last element of the array 
	a[i] = a[i+1];		// move all elements at left hand side 
}

a.length = a.length-1;		// decrese the array size by 1

console.log(a);