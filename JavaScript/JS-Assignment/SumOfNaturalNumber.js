// Q6. Write a java program to find the sum of all natural numbers between 1 to n

/*
let range = 10;
let n = 1;
let sum = 0;

while (n <= range) {
  sum = sum + n;
  n++;
}
console.log("Sum of the Natural Number Up To  Given Range : ", sum);
*/

// Q7. Write a java program to find the sum of all even numbers between 1 to n

/*
let range = 10;
let n = 0;
let sum = 0;

while (n <= range) {
  if (n % 2 === 0) {
    sum = sum + n;
  }
  n++;
}
console.log("Sum of the Even Number upto Given range :", sum);
*/

// Q8. Write a java program to find the sum of all odd numbers between 1 to n.

/*
let range = 10;
let sum = 0;

for (let i = 0; i <= range; i++) {
  if (i % 2 != 0) {
    sum += i;
  }
}
console.log("Sum of the ODD Number upto Given range :", sum);
*/

// Q9. Write a java program to print a multiplication table of any number

let num = 17;

for (let i = 1; i <= 10; i++) {
  console.log(i, "*", num, "=", i * num);
}

