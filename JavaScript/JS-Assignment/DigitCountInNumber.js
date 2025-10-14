/* Q10. Write a java program to count the number of digits in a number.

parseInt -->  ne last cha digit cut kelya natar jo float madhe value yete ti tyatun fakt integer part ghetla jato and point pasun cha part skip hoto paseInt is a built in function in JS which convert string to integer means take only integer value from any string and when we have any deciamal point value then ski the decial part i.e digit after the point e.g 10.23 here skip the .23 
*/
/*
let num = 123;
let count = 0;

while (num > 0) {  // check num > 0 i.e 123 >0 yet count++ , remove last dig and again check condition 
  count++;
  num = parseInt(num / 10);
}
console.log(count);
*/

// Q11. Write a java program to calculate the sum of digits of a number.

let num = 123;
let sum = 0;

while (num > 0) {
  let dig = num % 10; // extract the last digit
  sum = sum + dig; // add it in sum
  num = parseInt(num / 10); // remove the last digit
}
console.log("The sum of the digit of the Number is : " + sum);
