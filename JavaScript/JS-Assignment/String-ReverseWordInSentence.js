/*
17. Reverse Words in a Sentence
Description: Reverse the order of words but not characters.
 Example: Input: "I love coding" → Output: "coding love I"
*/


let str = "I Love Coding";

let res = "";
let word = "";

for (let i = str.length - 1; i >= 0; i--) {	// this loop start from ending of the sentence 

    if (str[i] === " ") {	// check char at i is equal to equal space   
        if (word !== "") {	// check word !== space 
            // reverse collected word to restore original order
            for (let k = word.length - 1; k >= 0; k--) {  // loop start from ending and add each char of word in res 
                res += word[k];
            }
            res += " ";   // add space after completing each word 
            word = "";
        }
    } else {
        word += str[i];
    }
}

for (let k = word.length - 1; k >= 0; k--) {
    res += word[k];
}

console.log(res); 