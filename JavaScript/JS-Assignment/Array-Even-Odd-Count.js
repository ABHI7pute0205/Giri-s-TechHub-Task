/*
17. Count Even and Odd Elements
Concept: Use modulo operator and count each category.
Use Case: Statistical breakdowns.
Input: arr = [10, 21, 32, 43, 54, 65, 76]
Total Even Numbers: 4
Total Odd Numbers: 3
*/

let a = [10, 21, 32, 43, 54, 65, 76]

let EvenCnt = 0;
let OddCnt = 0;

for(let i=0;i<a.length;i++){
	if(a[i] % 2 == 0){
	  EvenCnt++;
	}
	else{
	  OddCnt++;
	}
}

console.log("Even Count / Total Even Numbers : ",EvenCnt);
console.log("Odd count / Total Odd Numbers : ",OddCnt);
