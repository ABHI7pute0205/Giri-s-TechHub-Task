// Write a function to find the maximum number in an array.

let a = [1,5,7,9,3,4];

function MaxFromArr(a){
	let max = a[0];

	for(let i=0;i<a.length;i++){
	   if(a[i] > max){
		max = a[i];
	   }
	}
	return max;
}

let res = MaxFromArr(a);
console.log("Max From Array : ",res);