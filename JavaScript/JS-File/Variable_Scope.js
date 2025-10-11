// function Declaration function keyword and function_name()
var num = 10; // global declaration kelya varti same varibale function chya aata pan and function chya baher pan call kar ta yet
function test() {
  // but same variable jar function madhe jar delcared kel tar function chya baher call nahi kar ta yet
  console.log(num);
}
// function call
test();
console.log(num);
//_________Hoisting______________________

// function test1() {
//   console.log(num1);
//   const num1 = 10;
//   console.log(num1);
// }
// test1();

//_______________________________

let n1 = 10;
let n2 = 20;

function getSum() {
  let res = n1 + n2;
  return res;
}
console.log("Sum is : " + getSum());
