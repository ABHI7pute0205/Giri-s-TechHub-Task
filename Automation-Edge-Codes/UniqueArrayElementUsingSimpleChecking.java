/*
Q1. Write a java program to find the unique value from array.
Input array elements: 1, 2, 3, 5, 1, 5, 20, 2, 12, 10
All unique elements in the array are: 3, 20, 12, 10
*/

import java.util.*;

public class UniqueArrayElementUsingSimpleChecking{
	public static void main(String x[]){
	Scanner sc = new Scanner(System.in);

	int a[] = new int[10];

	System.out.println("Enter Array Elements : ");
	for(int i=0;i<a.length;i++){
	  a[i]=sc.nextInt();
	}

// check unique values from the Array 

	System.out.println("Unique Elements From the Array : ");

	for(int i=0;i<a.length;i++){
	  int count=0;
	    for(int j=0;j<a.length;j++){

		if(a[i] == a[j]){	// using nested check the how many time particular element occur 
		  count++;	// increase the count 
		}

	    }
	  if(count == 1){	// and print those element whose count is 1 
		System.out.print(a[i]+"  ");
	  }
	}



	}
}