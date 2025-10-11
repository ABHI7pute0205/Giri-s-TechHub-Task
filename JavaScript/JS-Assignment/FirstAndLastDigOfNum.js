// Q18. Write a java program to find the first and last digit of a number

/*
let num = 714526;
let first = 0;
let last = num % 10;

while (num >= 10) {
  // number jo parent double digit madhe aahe or tya chya equal aahe to parent last che sagle digit remove kele jatat
  num = parseInt(num / 10);
}
first = num;
console.log("First digit of the Number : ", first);
console.log("Last Digit of the Number : ", last);
*/

// Q19. Write a java program to find the sum of the first and last digit of a number.

let num = 123;
let first = 0;
let last = num % 10;

while (num >= 10) {
  num = parseInt(num / 10);
}
first = num;

let sumOfFstLst = first + last;

console.log("The sum of the First and Last Digit : ", sumOfFstLst);
