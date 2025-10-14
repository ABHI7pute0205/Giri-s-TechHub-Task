/*
27. Find the Missing Number in a Series (1 to N)
Concept: Sum of 1 to N minus the actual sum of array gives the missing number.
Use Case: Identify lost entries, IDs, etc.
N = 5
Input : a = [1, 2, 4, 5]
Calculation:
•	Sum of numbers from 1 to 5 = 5×62=15\frac{5 \times 6}{2} = 1525×6=15
•	Sum of array elements = 1+2+4+5=121 + 2 + 4 + 5 = 121+2+4+5=12
•	Missing number = 15−12=315 - 12 = 315−12=3
Output: Missing number is: 3
--------------------------------------------------------
Pair the numbers from ends: (1 + N), (2 + (N-1)), (3 + (N-2)) ...
Each pair sums to (N+1)
There are N/2 such pairs → total sum = (N*(N+1))/2
*/

let a = [1, 2, 4, 5];

let n=a.length+1;	// here we take +1 because of the our number series contain +1 numbers in array but 1 is missing 

let expectedSum = (n*(n+1))/2;	// this formula can only work on a continous no. sereis 
let actualSum=0;

for(let i=0;i<a.length;i++){
	actualSum += a[i];
}

let missingNum = expectedSum - actualSum;

console.log("Actual Sum of the array :",missingNum);