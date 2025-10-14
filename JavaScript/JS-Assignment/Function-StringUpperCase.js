// Write a function that takes a string and returns it in uppercase.


function StringUpper(str){
   let res = "";
   for(let i=0;i<str.length;i++){
	let code = str.charCodeAt(i);

	if(code >=97 && code <= 122){
	  res = res + String.fromCharCode(code-32);
	}
	else{
	   res = res + str[i];
	}
   }
	return res;
}

let res = StringUpper("Abhishek");
console.log("String In Upper Case :",res);



/* Using Inbuild Function

function StringUpper(str){
	return str.toUpperCase();
}

let res = StringUpper("Abhishek");
console.log("String In Upper Case :",res);

*/