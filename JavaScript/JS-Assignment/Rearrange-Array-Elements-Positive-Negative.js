/*
26. Rearrange Array in Alternate Positive and Negative Items
Concept: Use auxiliary arrays or index manipulation to interleave.
Use Case: Alternate scheduling, balancing data flow.
Input: a = [2, 3, -4, -1, 6, -9]

Separate positives: [2, 3, 6]
Separate negatives: [-4, -1, -9]
Rearranged array: [2, -4, 3, -1, 6, -9]
*/

let a = [2, 3, -4, -1, 6, -9];

let positive = [];
let pind=0;
let negative = [];
let nind=0;

for(let i=0;i<a.length;i++){
	if(a[i] > 0){
	  positive[pind++]=a[i];
	}
	else{
	  negative[nind++]=a[i];
	}
}
console.log("Positive Array Elements : ",positive);
console.log("Negative Array Elements : ",negative);

let pIndex=0;
let nIndex=0;

for(let i=0;i<a.length;i++){
	if(i%2==0){
	  a[i] = positive[pIndex++];
	}
	else if(i%2===1){
	  a[i] = negative[nIndex++];
	}
}
console.log("Array After Rearrange : ",a);
