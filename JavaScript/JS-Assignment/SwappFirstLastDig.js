// Q20. Write a java program to swap first and last digits of a number.

let num=123;
let first=0;
let last=num%10;

while(num>=10){
    num=parseInt(num/10);
}
first=num;

