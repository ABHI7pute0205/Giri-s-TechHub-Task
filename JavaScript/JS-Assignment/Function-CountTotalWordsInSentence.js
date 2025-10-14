// Write a function to count the number of words in a sentence


function CountWordInSentence(str){
	let cnt=0;

	let inWord = false;	// intitally we are not in word means aapn senetence chya kon tya ch character la hit kel nahi 

	for(let i=0;i<str.length;i++){

	  let ch = str.charAt(i);	// extract single single character from the string 

		if(ch !==" " && ch!=="\t" && ch!=="\n"){	// check it is not a space,new line , tab and also in !inword then this is a compelete one single word and increment the count
		  if(!inWord){		//   means eith aapn word chya starting word madhe enter zalo ya cha Arth asa hoto 
		    inWord = true;
		    cnt++;
		  }
		}
		else{	// means word chya baher aalo 
		  inWord = false;
		}
	}
	return cnt;
}

console.log("Total Word Count :",CountWordInSentence("Hey i my name is Abhi "));


























/*
function CountWordInSentence(str){
	let cnt=0;

	for(let i=0;i<str.length;i++){
	  let ch = str.charAt(i);
		if(ch == " "){
		  cnt++;
		}
	}
	return cnt;
}

console.log("Total Word Count :",CountWordInSentence("Hey i my name is Abhi "));

*/