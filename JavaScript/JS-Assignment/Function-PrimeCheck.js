// Write a function that checks if a given number is prime

function Prime(n){
	if(n <=1 ){
	  console.log("Number is not Prime");
	  return false; // 0 and 1 not Prime numbers
	}

	for(let i=2;i<=n-1;i++){
	  if(n % i === 0){
	  	console.log("Number is not Prime");
		return false;  // if divisible by any number then not prime
	  }
	}
	console.log("Number is Prime");
	return true;
}

let res = Prime(17);

//console.log("Return value :",res);