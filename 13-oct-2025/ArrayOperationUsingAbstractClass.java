/*
Q2.Create an abstract class ArrayOperation with an abstract method int calculate(int arr[]).
Create two subclasses:
 ArraySum → calculates and returns the sum of all array elements.
 ArrayProduct → calculates and returns the product of all array elements.
 In main(), call both implementations using ArrayOperation reference.
*/
import java.util.*;

abstract class ArrayOperation{			// this is a abstract class with one abstract method  
	public abstract int calculate(int a[]);
}

class ArraySum extends ArrayOperation{

	public int calculate(int a[]){		// override abstract method 
	  int sum=0;
	  for(int i : a){
		sum = sum + i;
	  }
	return sum;
	}

}

class ArrayProduct extends ArrayOperation{
	
	public int calculate(int a[]){
	  int product=1;
	  for(int i : a){
		product = product * i;
	  }
	return product;
	}
}

public class ArrayOperationUsingAbstractClass{
	public static void main(String x[]){
	Scanner sc = new Scanner(System.in);

	int a[] = new int[5];
	
	System.out.println("Enter Elements in Array : ");
	for(int i=0;i<a.length;i++){
	  a[i]=sc.nextInt();
	}

	ArraySum as = new ArraySum();	// method call depends on the object creation not on refernece 

	System.out.println("Sum of the Array Elements : "+as.calculate(a));

	ArrayProduct ap = new ArrayProduct();

	System.out.println("Product of the Array Elements : "+ap.calculate(a));

	}
}