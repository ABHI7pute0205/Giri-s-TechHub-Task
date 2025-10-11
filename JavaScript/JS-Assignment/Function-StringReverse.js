// Write a function to reverse a string.


function StringReverse(str){
    let res ="";
    
    for(let i=str.length-1;i>=0;i--){
	res = res + str.charAt(i);	
    }
   return res;
}

let res = StringReverse("Abhishek");
console.log("String In Reverse Order : "+res);



/*
function StringReverse(str){

	return str.split("").reverse().join("");
	// here we fst split the given string and internally it consider as a char array then reverse each char from array and then join means again consider / convert it in a string 
}

let res = StringReverse("Abhishek");
console.log("String In Reverse Order : "+res);

*/