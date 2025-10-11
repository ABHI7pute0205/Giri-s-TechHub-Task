/*
9. Merge Two Arrays
Concept: Append elements of the second array to the first or create a new array to store all.
Use Case: Combine product lists, user logs, etc.
Input Array 
___________________________________________________________
array1 = [1, 3, 5]
array2 = [2, 4, 6, 8]
Merged Array: [1, 3, 5, 2, 4, 6, 8]

*/


let arr1 = [1,3,5];
let arr2 = [2,4,6,8];

let ind = 0;
let res = [arr1.length + arr2.length];	// create a result array of length arr1 + arr2

for(let i=0;i<arr1.length;i++){		// cp[ied the element from array 1
	res[ind++] = arr1[i];
}

for(let i=0;i<arr2.length;i++){		// copied the element from arrray 2 
	res[ind++] = arr2[i];
}

console.log("Merged array  : ");
for(let i=0;i<ind;i++){
	console.log(res[i]);
}