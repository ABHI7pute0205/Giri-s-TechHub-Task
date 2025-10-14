// Write a function to check if two strings are anagrams



function Anagrams(str1,str2){

	if(str1.length !== str2.length){	
	   return "Not Anagrams...";
	}

	let count = {}; 		// this is a empty object in JS which store data in  a Key - value pair 

	for(let i=0;i<str1.length;i++){
	  let  ch = str1[i];

	  if(count[ch] === 0){
		count[ch]+1;  	// intial count =1 
	  }
	  else{
		count[ch] = count[ch]+1;  // if char already exist then increase the count 
	  }
	}
	
	// for each char of str2 decrease the count form count 

	for(let j=0;j<str2.length;j++){

	  let ch = str2[j];
/*
		0 means “we used up all instances”
		undefined --> means “that character never existed in the first string”
*/
	  if(count[ch] === 0 || count[ch] === undefined){
		return "Strings Not Anagram";
	  }
	  else{
	  	count[ch] = count[ch]-1;
	  }
	}
	return "Strings Are Anagrams...";
}

console.log(Anagrams("xisten","silent"));















/*
function Anagrams(str1,str2){

	if(str1.length !== str2.length){	// fst check its length are equal or not if ! equal then not anagram
	   return "Not Anagrams...";
	}

	let sort1 = str1.split("").sort().join();	// fst seperate each char of string using split then sort it and again convert it in a string using join 
	let sort2 = str2.split("").sort().join();

	if(sort1 === sort2)
	  return "Strings Are Anagrams...";
}

console.log(Anagrams("listen","silent"));

*/