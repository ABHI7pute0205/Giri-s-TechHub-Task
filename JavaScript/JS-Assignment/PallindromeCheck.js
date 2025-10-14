// Q14. Write a java program to check whether a number is palindrome or not

let num = 121;
let temp = num; // store original num in to temp to perform operation on it
let reverse = 0;

while (temp > 0) {
  let dig = temp % 10;
  reverse = reverse * 10 + dig;
  temp = parseInt(temp / 10);
}

// console.log("Reversed Number is : ", reverse);

if (num === reverse) {
  console.log("The Given Number is Pallindrome....", num);
} else {
  console.log("The given number is NOT a Pallindrome...");
}
