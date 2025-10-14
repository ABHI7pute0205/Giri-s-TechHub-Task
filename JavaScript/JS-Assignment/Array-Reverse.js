/*

Reverse an Array
Reverse an array without using the reverse() function.
Example: [1, 2, 3, 4] → [4, 3, 2, 1]
*/



let a = [1,2,3,4,5];
console.log("Original Array : ",a);

console.log("Reversed Array :");
for(let i=a.length-1;i>=0;i--){
  console.log(a[i]);
}