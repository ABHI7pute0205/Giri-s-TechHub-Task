// Write a function to find the sum of all numbers in an array.


function SumOfArrayElement(a){
	let sum = 0;

	for(let i=0;i<a.length;i++){	// iterate through each single element of the array 
	  sum = sum + a[i];
	}
	return sum;
}

let a = [1,2,3,4,5];

let res = SumOfArrayElement(a);	//  here we pass the Array ref 

console.log("Sum of the Array Element : ",res);