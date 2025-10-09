/*
Q3. Write program to create class name as FindMax with two functions
       void setArray(int a[]): this function is used for accept array as parameter
       int getMax(): this function can find the max value from array and return it.
*/

import java.util.*;

class FindMax{
	int a[];

	void setArr(int a[]){
	  this.a=a;
	}

	int getMax(){	// changes from perform in the function definition reflect at function calling point
	  int max=-1;
	
	for(int i=0;i<a.length;i++){
	  if(a[i] > max){
		max=a[i];
	  }
	}
	return max;
	}
}

class FindMaxUsingClassFunction{
	public static void main(String x[]){
	 Scanner sc = new Scanner(System.in);

	int a[] = new int[5];

	System.out.println("Enter Elements in array :");
	for(int i=0;i<a.length;i++){
	  a[i]=sc.nextInt();
	}

	FindMax fm = new FindMax();

	fm.setArr(a);	// from here we pass the base address of the array 

	int res = fm.getMax();
	System.out.println("Max Element From the Array : "+res);

	}
}