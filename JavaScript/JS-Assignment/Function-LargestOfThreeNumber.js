// Write a function that returns the largest of three numbers.

function LargestOfThree(n1,n2,n3){
	let largest;

	if(n1 >= n2 && n1 >= n3){
	   largest = n1;
	}
	else if(n2 >= n1 && n2 >= n3){
	   largest = n2;
	}
	else{
	   largest = n3;
	}
	return largest;
}

let res = LargestOfThree(14,8,30);
console.log("Largest Number is ",res);