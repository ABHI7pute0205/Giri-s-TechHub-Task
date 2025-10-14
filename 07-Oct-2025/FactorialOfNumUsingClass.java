/*
Q1. Write program to create class name as Factorial with two functions
       void setValue(int x): this function accept number as parameter
      int getFactorial(): this function can calculate factorial of number and return it.

*/


import java.util.*;
class Factorial{
	int n;
	void setValue(int x){
		n=x;
	}
	
	int getFactorial(){
	   int fact=1;
	  for(int i=1;i<=n;i++){
		fact = fact * i;
	  }
	return fact;
	}
}

class FactorialOfNumUsingClass{
	public static void main(String x[]){

	Scanner sc = new Scanner(System.in);
	
	System.out.println("Enter Number : ");
	int n=sc.nextInt();

	Factorial f = new Factorial();

	f.setValue(n);
	
	System.out.println("Factorial of the Number : "+f.getFactorial());

	}
}