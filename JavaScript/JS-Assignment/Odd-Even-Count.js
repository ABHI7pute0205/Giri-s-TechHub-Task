/*
Count Even and Odd Numbers
Count how many even and odd numbers are present in an array.
Example: [2, 5, 6, 7, 8] → Evens: 3, Odds: 2

*/

let a = [2,5,6,7,8];

let cntE = 0;
let cntO = 0;

for(let i=0;i<a.length;i++){
	if(a[i] % 2 == 0){
	   cntE++;
	}
	else{
	  cntO++;
	}
}

console.log("Even Count : ",cntE);
console.log("Odd Count : ",cntO);
