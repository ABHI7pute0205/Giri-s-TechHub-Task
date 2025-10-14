/*
Q2. Write a java program to find missing & repeating number in array.
Example:
Input → {4, 3, 6, 2, 1, 1}
Output → Repeating = 1, Missing = 5
*/


import java.util.*;

public class MissingAndRepeatingNum{
	public static void main(String x[]){
	Scanner sc = new Scanner(System.in);

	int a[] = new int[6];

	System.out.println("Enter Array Elements : ");
	for(int i=0;i<a.length;i++){
	  a[i]=sc.nextInt();
	}

	
	int n=a.length;
	
	int expectedSum = n * (n+1) / 2;	// formula to find expected Sum of any given Sequencial series 

	int actualSum=0;
	for(int i=0;i<a.length;i++){		// here we find the Actual Sum of The Given Array 
	 actualSum = actualSum+a[i];
	}
	

// find repeating 

	int repeating=-1;
	for(int i=0;i<a.length;i++){
	  int cnt=0;
	   for(int j=0;j<a.length;j++){	// visit each array element and increase it's count every time when repeat found 
		if(a[i] == a[j]){
		  cnt++;
		}
	   }
	  if(cnt > 1){	// print those element have count > 1 means those are repeated 
		repeating = a[i];
		break;		// when once print then break the loop 
	  }
	}

	int missingNum = expectedSum - (actualSum - repeating);	// here we find the missingNum from the array we need to substract repeating element also to get a correct missing value 

	System.out.println("Missing = "+missingNum);
	System.out.println("Repeating = "+repeating);


	}
}