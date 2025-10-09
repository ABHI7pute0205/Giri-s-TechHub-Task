/*
Q5. Write program to create class name as MergeTwoArray with parameterized constructor
      MergeTwoArray(int [],int []): this constructor accept two array as parameter
      int [] getMergeArray(): this function merge two array in third array and return new merged    array
*/

import java.util.*;

class MergeArray{
	int a[];
	int b[];

	MergeArray(int a[],int b[]){	// create one constrctor which initialize the instace variable at the time of the object creation 
	  this.a=a;
	  this.b=b;
	}
	
	int [] getMergeArray(){

	   int merged[] = new int[a.length+b.length];
	  int ind=0;

	   for(int i=0;i<a.length;i++){		// copied the array 1 element into merged array
		merged[ind++]=a[i];
	   }

	   for(int i=0;i<b.length;i++){		// copied the array 2 element into merged array
		merged[ind++]=b[i];
	   }
   	return merged;
	}
}
class ArrayMergedUsingClassFunction{
	public static void main(String x[]){
	Scanner sc = new Scanner(System.in);

	int a[] = new int[5];
	int b[] = new int[5];

	System.out.println("Enter Element in Array 1 : ");
	for(int i=0;i<a.length;i++){
	  a[i]=sc.nextInt();
	}

	System.out.println("Enter Element in Array 2 : ");
	for(int i=0;i<b.length;i++){
	  b[i]=sc.nextInt();
	}

	MergeArray ma = new MergeArray(a,b);
	int res[] = ma.getMergeArray();

	System.out.println("Merged Array : ");
	for(int i=0;i<res.length;i++){
	  System.out.print("  "+res[i]);
	}

	}
}