// 2.Write code for handle ArithmeticException?


import java.util.*;

public class ArithmeticExceptionEg{

	public static void main(String x[]){
	Scanner sc = new Scanner(System.in);
	System.out.println("Enter Values of a And b");
	int a=sc.nextInt();
	int b=sc.nextInt();

	int c;

	try{
	 c = a/b;
	  System.out.println("Division : "+c);
	}
	catch(ArithmeticException e){
	  System.out.println("Error is : "+e);
	}

	}
}
  // ArithmeticException occur when we divide any number by 0 
/*
Enter Values of a And b
10
0
Error is : java.lang.ArithmeticException: / by zero
*/