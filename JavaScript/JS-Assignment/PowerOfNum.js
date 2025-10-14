// Q16. Write a java program to find power of a number.

let num = 5;
let pow = 3;    // power means 3rd value of num i.e 5*5*5 => 25
let res = 1;

while (pow > 0) { 
  res = res * num;
  pow--;
}
console.log("The Power of the Number ", num, " is : ", res);
