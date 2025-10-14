// Write a function that counts the number of vowels in a string.

function VowelCount(str){
	let cnt=0;

	for(let i=0;i<str.length;i++){
	  let ch = str.charAt(i);

	   if(ch === 'a' ||ch === 'e' ||ch === 'i' ||ch === 'o' ||ch === 'u' ||ch === 'A' ||ch === 'E'||ch === 'I'||ch === 'O'||ch === 'U'){
		cnt++;
	   }
	}	
	return cnt;
}

let res = VowelCount("Hello Word");
console.log("Total Vowel Count : ",res);