// Write a function to calculate the factorial of a number.

function Factorial(n){
	let fact = 1;

	for(let i=1;i<=n;i++){
	  fact = fact * i; 
// multiply each number from 1 to n means that given number from user 
	}
	return fact;
}

let res = Factorial(5);
console.log("Factorial of the Number is :",res);