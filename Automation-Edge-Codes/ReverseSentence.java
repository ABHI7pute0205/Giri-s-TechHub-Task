/*
Q1. Reverse Each Word in a Sentence but Keep Word Order.
Example:
Input → "Java is fun"
Output → "avaJ si nuf"
______________________________________________
The split() method in Java divides a string into substrings based on a delimiter (separator) and returns them as a String array.
String str = "Java is fun";
String[] words = str.split(" ");

-- Output array:
["Java", "is", "fun"]

You’re telling Java:
“Split this string wherever you find a space character.”
-------------------------------------------------------------
split() → scans the string, finds the delimiter pattern, cuts the string wherever it appears, and puts the pieces into a String array.

*/

import java.util.*;

public class ReverseSentence{
	public static void main(String x[]){

	String str = "Java is fun";

	String words[] = str.split(" ");	
// we create String words array and split method is used to split a senetence into words means it break the word when ever it found any space  
	
	String finalResult = "";

	for(int i=0;i<words.length;i++){	// this loop starts upto num of words found in that array 

	   String word = words[i];	// we get a first word from the words array 

	   String rev = "";

	   for(int j=word.length()-1;j>=0;j--){		// reverse the given selected word 
		rev = rev + word.charAt(j);
	   }
	 finalResult = finalResult + rev + " ";		// add this word in finalres and give one space becase to seperate each reverse word 
	}	

	System.out.println("Reverse String : "+finalResult.trim());	// use trim to remove extra white space from the end 
	}
}