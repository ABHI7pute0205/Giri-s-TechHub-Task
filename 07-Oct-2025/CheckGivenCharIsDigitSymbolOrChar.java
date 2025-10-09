/*
Q2. Write program to create class name as CheckChar with two functions
        void setChar(char ch): this function accept single character as input
      boolean checkChar(): this function can check character is alphabet or digit of special    symbol if
     character is alphabet or digit return true if character is digit then return false.
*/

import java.util.*;

class CheckChar{
	char ch;
	void setChar(char c){
 	  ch=c;
	}

	boolean checkChar(){
		if((ch >= 'A' && ch<='Z') || (ch>='a' && ch<='z')){
		  return true;
		}
		else if(ch >='0' && ch<='9'){
		  return false;
		}
		else{
		  return false;
		}
	}
}
class CheckGivenCharIsDigitSymbolOrChar{
	public static void main(String x[]){


	CheckChar cc = new CheckChar();
	cc.setChar('a');
	
	boolean b = cc.checkChar();
	if(b)
	  System.out.println("character is Alphabet...");
	else
	  System.out.println("character is Other then Alphabet...");


	}
}