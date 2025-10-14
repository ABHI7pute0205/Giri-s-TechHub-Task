// Write a function that takes a number and returns the sum of its digits.

function SumOfDig(num){
	let sum=0;

	while(num>0){
	  let dig = num%10;   // extract the last digit from the number 
	  sum = sum+dig;      // add it in a sum
	  num = parseInt(num/10); // remove the Last digit from the number 
// here we need to conversion becase in JS type of the data we can not specify so it will consider it in  a float OR a decimal point so we need to keeps it only a Integer Part after removing last digit [parseInt(12.3) → keeps only the integer part (12).]
	}
	return sum;
}

let res = SumOfDig(1234);
console.log("Sum of the Digit is : ",res);