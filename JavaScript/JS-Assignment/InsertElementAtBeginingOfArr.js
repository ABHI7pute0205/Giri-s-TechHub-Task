/*

Insert Element at Beginning
Without using unshift(), add a new element at the beginning of an array.
Example: [2, 3, 4] + insert 1 → [1, 2, 3, 4]
*/

let a = [2,3,4];

let insert=1;

for(let i=a.length;i>0;i--){	// this loop shifts all elements at the right hand side 
	a[i]  = a[i-1];
}

a[0] = insert;

console.log(a);