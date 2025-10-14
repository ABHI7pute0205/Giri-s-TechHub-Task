// Q17. Write a java program to find all factors of a number.
// factor means -> ashe number jya number ne divide kelya natar remainder he 0 yete purn divide hona re num

let num = 10;
let i = 1;

while (i <= num) {
  if (num % i === 0) {
    console.log(i);
  }
  i++;
}
