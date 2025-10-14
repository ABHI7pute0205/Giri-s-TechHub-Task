/*
3. Count Vowels and Consonants
Description: Count the number of vowels and consonants in a string.
 Example: Input: "apple" → Vowels: 2, Consonants: 3
*/

let str = "apple";

let vowel=0;
let conso=0;

for(let i=0;i<str.length;i++){
	let ch = str.charAt(i);

	if(ch ==='a'||ch ==='e'||ch ==='i'||ch ==='o'||ch ==='u'){
	   vowel++;
	}
	else{
	  conso++;
	}
}

console.log("Vowel Count : ",vowel);
console.log("Consonants Count : ",conso);
