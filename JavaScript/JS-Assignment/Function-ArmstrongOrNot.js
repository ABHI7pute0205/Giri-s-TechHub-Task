/* Write a function to check if a number is an Armstrong number or not.

A number is an Armstrong number if the sum of its digits each raised to the power of the number of digits equals the number itself.

*/
function ArmstrongCheck(num){
	let sum=0;
	let temp = num;
	let totalDig = 0;	

	let tempForCnt = num;
	while(tempForCnt > 0){

	  totalDig++;   // here just count total number of dig present in a number 
	  tempForCnt = parseInt(tempForCnt/10); 
	}

	console.log("Total Digits : ",totalDig);

	while(temp > 0){
	  let dig = temp % 10;
	  let pow = 1;

	 for(let i=1;i<=totalDig;i++){  i<=3 because total number of the digit in the number is 3 
	    pow = pow * dig;
	 }

	sum = sum + pow;	  // find the sum of the power of the each digit and compaire it to original num 
	temp = parseInt(temp/10);
	}

	if(sum === num){
	 return "Number is Armstrong...";
	}
	else{
	 return "Number is NOT Armstrong...";
	}

}

console.log(ArmstrongCheck(153));