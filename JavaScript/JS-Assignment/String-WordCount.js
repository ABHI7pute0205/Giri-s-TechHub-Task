/*
10. Count Words in a String
Description: Count the number of words separated by spaces.
 Example: Input: "I love programming" → Output: 3
*/

let str = "I Love Programming";

let word = false;	// ek word complete zalya var tya la mark kar nya sathi 

let wordCnt=0;

for(let i=0;i<str.length;i++){
	let ch = str[i];

	if(ch ===' ' || ch ==="\n" || ch ==="\t"){	// jar space new line tab aala tar word nahi false hot nasla tar 
	   word = false;
	}
	else{
	  if(!word){		// !word asla ki cnt++ and word = true means each character word ture set asto jo parent space , newLine,Tab yet nahi to parent 
		wordCnt++;
		word = true;
	  }
	}
}
console.log("Total Number of Words : ",wordCnt);