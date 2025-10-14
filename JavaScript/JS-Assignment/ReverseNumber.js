// Q13. Write a java program to enter a number and print its reverse

let num = 12345;
let rev = 0;

while (num > 0) {
  let dig = num % 10;
  rev = rev * 10 + dig;
  num = parseInt(num / 10);
}
console.log("Given number in Reverse order : ", rev);
