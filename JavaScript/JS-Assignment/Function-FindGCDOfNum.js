// Write a function to find the greatest common divisor (GCD) of two numbers

function findGCD(n1,n2){

	let gcd = 1;
	let min = (n1 < n2) ? n1 : n2;  // this will find the smaller number because GCD can not be LARGER than SMALLER number 

	for(let i=1;i<=min;i++){
// i represents the possible num of divisers of the BOTH numbers 
	  if(n1 % i === 0 && n2 % i === 0){  // i is divisible by both then it is a GCD of the BOTH numbers 
		gcd = i;
	  }
	}
	return gcd;
}
let res = findGCD(48,18);
console.log("GCD of the Number is :",res);



/*  1 passun tar don he n madhly min number parent divide kar t jato i.e 12 parent and tya tun greatest diviser kon ta te 
a = 12, b = 18
12 चे factors: 1, 2, 3, 4, 6, 12
18 चे factors: 1, 2, 3, 6, 9, 18
दोन्हीमध्ये common factors = 1, 2, 3, 6
GCD = 6 ✅
*/