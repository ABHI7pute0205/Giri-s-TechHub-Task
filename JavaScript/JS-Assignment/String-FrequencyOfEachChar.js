/*
4. Find Frequency of Characters
Description: Count the frequency of each character in a string.
 Example: Input: "hello" → h:1, e:1, l:2, o:1

The indexOf() method in JavaScript is used to determine the position of a specified value within a string or array. It returns:
The index (position) of the first occurrence of the specified value.
-1 if the value is not found.

*/

let str = "hello";

let visited="";  // this is to keeps track the Given char visited already or not 

for(let i=0;i<str.length;i++){
	let charCnt=0;
	let ch = str.charAt(i);

// indexOf determine the position of the specified character he method te give char ya chya aahe occur zale l aslya var tya che fst occurence che index return kar t and -1 return kar t given selected value jar ya chya aadhe yel nas li tar 
	if(visited.indexOf(ch) !== -1){ // here jo pan character yeil First time to !==-1 asla means 2,3, somthing kahi pan asla mhanje to char ya chya aadhe visit zala ye and to skip kara y cha  
	  continue;
	}

	for(let j=0;j<str.length;j++){

	  let ch1 = str.charAt(j);

	  if(ch === ch1){
	    charCnt++;
	  }

	}

	console.log(ch+":"+charCnt);
	visited = visited + ch;
}