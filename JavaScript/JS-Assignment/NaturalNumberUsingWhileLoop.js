/*
Q1. Write a java program to print all natural numbers from 1 to n. using while loop
Natural number means only Positive Integer they do not include 0 and negative numbers
*/

/*
const num = 10;
let i = 1;

while (i <= num) {
  console.log(i);
  i++;
}
*/

/*Q2. Write a java program to print all natural numbers in reverse (from n to 1). using a while loop. */

/*
let num = 10;

while (num >= 1) {
  console.log(num);
  num--;
}
*/

/*Q3. Write a java program to print all alphabets from a to z. - using while loop*/

/*
let alphabets = "abcdefghijklmonpqurstuvwxyz";
let i = 0;

while (i < alphabets.length) {
  console.log(alphabets[i]);
  i++;
}
*/

//charCodeAt() --> ha single - single character cha unicode return kar to
//String.formCharCode() --> ha to unicode accept kar to and tya ch character return kar to yat string kel kar n JS madhe character DT nahi ye single character 'a' pan String mhanun ch treat kela jato

/*
let first = "a".charCodeAt(0);
let last = "z".charCodeAt(0);

while (first <= last) {
  console.log(String.fromCharCode(first));
  first++;
}
*/

/*Q4. Write a java program to print all even numbers between 1 to 100.- using while loop*/
/*
let range = 100;
let num = 1;

while (num <= range) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}
*/

//Q5. Write a java program to print all odd numbers between 1 to 100.

let range = 100;
let num = 1;

while (num <= range) {
  if (num % 2 != 0) {
    console.log(num);
  }
  num++;
}
