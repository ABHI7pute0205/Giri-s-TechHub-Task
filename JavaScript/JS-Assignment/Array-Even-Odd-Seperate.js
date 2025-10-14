/*
16. Separate Even and Odd Numbers
Concept: Iterate and store evens in one array, odds in another.
Use Case: Categorize numbers or IDs based on properties.
Input: arr = [12, 17, 70, 15, 22, 65, 21, 90]
Even Numbers: [12, 70, 22, 90]
Odd Numbers: [17, 15, 65, 21]
*/

let  a = [12, 17, 70, 15, 22, 65, 21, 90];

let even = [];
let odd = [];

let Eind = 0;
let Oind = 0;

for(let i=0;i<a.length;i++){
	if(a[i] % 2 == 0){
	  even[Eind++] = a[i];
	}
	else{
	  odd[Oind++] = a[i];
	}
}

console.log("Even Numbers : ",even);
console.log("Odd Numbers : ",odd);
