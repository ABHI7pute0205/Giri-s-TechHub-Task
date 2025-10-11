/*
Insert Element at End
Without using push(), add a new element at the end of an array.
Example: [1, 2, 3] + insert 5 → [1, 2, 3, 5]
*/

let a = [1,2,3];
let insert=5;

a[a.length+1]=insert;

console.log(a);