// Write a function to calculate the simple interest.


function CalSimpleInterest(principal , rate , time){

	let interest = (principal*rate*time)/100;
	return interest;	
}

console.log("Interest : ",CalSimpleInterest(1000,5,2));