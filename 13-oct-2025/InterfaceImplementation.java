/*
Q5.Create an interface ArrayTasks with methods:
int countEven(int arr[])
int countOdd(int arr[])
 Implement this interface in a class EvenOddCounter to count even and odd numbers in the given array.
*/

import java.util.*;

// thses is a user-defined interface 
 
interface ArrayTask{
				// declared 2 abstract methods in thses interface and thsese are public abstract methods internally 
	int countEven(int a[]);
	int countOdd(int a[]);
}

class EvenOddCounter implements ArrayTask{	// here we implement thse interface 

// and override it's public abstract methods 
	
	public int countEven(int a[]){
	  int evenCnt=0;
	   for(int i=0;i<a.length;i++){
		if(a[i] % 2 == 0){
		  evenCnt++;
		}
	   }
	  return evenCnt;
	}	


	public int countOdd(int a[]){
	  int oddCnt=0;
	   for(int i=0;i<a.length;i++){
		if(a[i] % 2 != 0){
		  oddCnt++;
		}
	   }
	  return oddCnt;
	}
}

class InterfaceImplementation{
	public static void main(String x[]){
	 Scanner sc = new Scanner(System.in);

	int a[] = new int[5];
	System.out.println("Enter Elements in Array : ");
	for(int i=0;i<a.length;i++){
	  a[i]=sc.nextInt();
	}

	EvenOddCounter ec = new EvenOddCounter();

// in the case of the overriding childs logic get executed 

	int res1 = ec.countEven(a);
	int res2 = ec.countOdd(a);

	System.out.println("Even Count in Array : "+res1);
	System.out.println("Odd Count in Array : "+res2);

	}
}