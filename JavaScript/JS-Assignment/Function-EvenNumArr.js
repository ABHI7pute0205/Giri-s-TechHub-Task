// Write a function that accepts an array and returns a new array with only even numbers.

let a = [1,2,5,4,9,8,6];

function EvenNumArr(a){
	let even = [];
	let ind=0;

	for(let i=0;i<a.length;i++){
	   if(a[i] % 2 === 0){
		even[ind++] = a[i];
	   }
	}
	return even;
}
console.log("Even Number Array : ",EvenNumArr(a));