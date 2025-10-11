// Write a function to add two numbers and return the result.

//in Function we can not pass let n1 , let n2 inside the function

// this is a Named Function in JS 

function Add(n1,n2){
	return n1+n2;
}
let res = Add(10,20);
console.log("Addition of the Numbers : ",res);



/*
Function Expression  
const Add = function(n1, n2) {
    return n1 + n2;
};
console.log("Addition of the Numbers:", Add(10, 20));
----------------------------
Arrow Function 

const Add = (n1, n2) => n1 + n2;

console.log("Addition of the Numbers:", Add(10, 20));

*/