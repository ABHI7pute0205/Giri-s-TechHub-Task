// Q12. Write a java program to calculate the product of digits of a number

let num = 234;
let product = 1;

while (num > 0) {
  let dig = num % 10;
  product = product * dig;
  num = parseInt(num / 10);
}
console.log("Product of the Digit of the Number is :", product);
