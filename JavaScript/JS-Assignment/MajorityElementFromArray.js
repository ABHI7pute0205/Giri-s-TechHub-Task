/*
25. Find Majority Element (Occurs > n/2 Times)
Concept: Use count method or Boyer-Moore Voting Algorithm.
Use Case: Identify the dominating product, preference, etc.
Inut : a = [2, 2, 1, 1, 2, 2, 2]
Size (n) = 7
Majority element is: 2
*/

let a = [2, 2, 1, 1, 2, 2, 2];

let majorityElement=a[0];

for(let i=0;i<a.length;i++){
	let cnt=0;		// count always reset after one element check successfully

	for(let j=i+1;j<a.length;j++){
 	  if(a[i] === a[j]){
		cnt++;
	  }
	}   
	if(cnt > a.length/2)
	   majorityElement=a[i];
	   break;
}
console.log("Majority Element : ",majorityElement);