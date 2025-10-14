/*
Q3.Create an abstract class ArrayProcess with abstract method void process(int arr[]).
Create subclass ArrayReverse that implements process() to print elements in reverse order.
Create another subclass ArraySort that sorts and displays the array in ascending order.
*/

import java.util.*;

abstract class ArrayProcess{
	public abstract void process(int a[]);
}
class ArrayReverse extends ArrayProcess{

	public void process(int a[]){
	  System.out.println("Array in Reverse Order : ");

	  for(int i= a.length-1;i>=0;i--){
		System.out.print(a[i]+"  ");
	  }
	System.out.println();   // new Line 
	}
}

class ArraySort extends ArrayProcess{
	
	public void process(int a[]){
	  System.out.println("Array Sort in Ascending Order : ");
	  for(int i=0;i<a.length;i++){
		for(int j=0;j<a.length;j++){
		  if(a[i] > a[j]){
		    int temp = a[i];
		    a[i] = a[j];
		    a[j] = temp;
		  }
		}
	  }
	 for(int i=0;i<a.length;i++){
		System.out.print(a[i]+"  ");
	 }
	}
}

public class ArrayProcessUsingAbstractClassImpl{
	public static void main(String x[]){

	Scanner sc = new Scanner(System.in);

	int a[] = new int[5];
	
	System.out.println("Enter Elements in Array : ");
	for(int i=0;i<a.length;i++){
	  a[i]=sc.nextInt();
	}

	ArrayReverse ar = new ArrayReverse();
	ar.process(a);

	ArraySort as = new ArraySort();
	as.process(a);
	}
}