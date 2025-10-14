/*
Q3. Write Program create class name as ArrSum with method void setValue(int arr[]) you have to create child class name as GetSum with method int getArrSum() you have to accept array values from ArrSum and calculate its sum and return it
*/

import java.util.*;

class ArrSum{		// parent class 
	int a[];
	
	void setVal(int a[]){
	 this.a=a;
	}
}
class GetSum extends ArrSum{	// child class 
	int getArrSum(){
	int sum=0;
	  for(int i=0;i<a.length;i++){		// changes perform in the function definition are reflect on function calling 
	 	sum = sum + a[i];
	  }
	return sum;
	}
}

public class ArraySumUsingClassObject{
	public static void main(String x[]){
	Scanner sc = new Scanner(System.in);

	int a[] = new int[5];	// create a array of size 5

	System.out.println("Enter Elements in Array :");
	for(int i=0;i<a.length;i++){
	  a[i] = sc.nextInt();
	}

	GetSum gs = new GetSum();	// create object of the class 
	gs.setVal(a);	// pass the base address of the array 

	System.out.println("Sum of the Array Elements : "+gs.getArrSum());	 

	}
}