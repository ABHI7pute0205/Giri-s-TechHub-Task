// Write a function to merge two arrays.


let a1 = [1,2,3,4];
let a2 = [5,6,7,8];

function MergeArr(a1,a2){

	let res = [];
	let ind=0;

	for(let i=0;i<a1.length;i++){	// fst  copied the element of the array1 in Res array 
	  res[ind++] = a1[i];
	}

	for(let j=0;j<a2.length;j++){	// then add the element of Array2 in Res array 
	  res[ind++] = a2[j]
	}

	return res;	// here simply return the Res array  
}

let res = MergeArr(a1,a2);

console.log("Array After Merging : ",res);