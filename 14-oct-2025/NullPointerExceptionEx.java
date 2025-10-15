/*
1.Write a code for handle NullPointerException?

*/

import java.util.*;

public class NullPointerExceptionEx{

	static 	int a[] ;  // static variable allocate memory before object creation 

	public static void main(String x[]){

	try{
	  System.out.println(a[0]+" ");
	}
	catch(Exception e){
	  System.out.println("Error is : "+e);
	}

	}
}

// NullPointerException is an Exception which occur when we use any reference without memory allocation OR used without new keyword 

/*
Error is : java.lang.NullPointerException: Cannot load from int array because "NullPointerExceptionEx.a" is null

*/