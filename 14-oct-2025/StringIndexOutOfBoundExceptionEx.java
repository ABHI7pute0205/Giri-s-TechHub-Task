//  4.Write code for handle StringIndexOutOfBoundsException?


import java.util.*;

public class StringIndexOutOfBoundExceptionEx{
	public static void main(String x[]){

	String str = "JayShreeRam";
	
	try{
	   System.out.println(str.charAt(15));
	}	
	catch(Exception e){
	  System.out.println("Error is : "+e);
	}
	}
}

// StringIndexOutOfBoundException is same like as ArrayIndexOutOfBoundException in which we try to access the character from the index > greater than it's length [means tya string chya length pekhsha jast length ch character access kar nya ch try kelya var ti he exception yet ]

// Error is : java.lang.StringIndexOutOfBoundsException: Index 15 out of bounds for length 11