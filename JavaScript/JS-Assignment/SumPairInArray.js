/*
24. Find All Pairs with Given Sum
Concept: Use nested loops or two-pointer technique to check sums.
Use Case: Match contributors, tasks, etc., that add up to a budget.
arr = [1, 5, 7, -1, 5]
Target sum (S) = 6
*/

let = a = [1, 5, 7, -1, 5];

let targetSum = 6;

for(let i=0;i<a.length;i++){
	for(let j=i+1;j<a.length;j++){
	   if(a[i] + a[j] == targetSum){
		console.log(a[i]+ " , "+a[j]);
	   }
	}
}