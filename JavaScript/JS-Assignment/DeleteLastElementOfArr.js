/*
Delete Last Element
Without using pop(), remove the last element from an array.
Example: [10, 20, 30] → [10, 20]
*/


let a = [10,20,30];

/*
for(let i=0;i<a.length;i++){
	console.log(a[i]);
}
*/

// reduce the array size by 1

a.length = a.length-1;
console.log(a);
