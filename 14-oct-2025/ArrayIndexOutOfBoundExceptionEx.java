// 3.Write code for handle ArrayIndexOutOfBoundsException?

// ArrayIndexOutOfBoundsException occur when we try to fetch array data using index more than its length or equal 

import java.util.*;

public class ArrayIndexOutOfBoundExceptionEx{
	public static void main(String x[]){

	int a[] = {10,20};
	
	try{
	   System.out.println(a[2]);
	}	
	catch(Exception e){
	  System.out.println("Error is : "+e);
	}
	}
}

// Error is : java.lang.ArrayIndexOutOfBoundsException: Index 2 out of bounds for length 2