/*
Q4.
Create an abstract class Statistics with abstract method double compute(int arr[]).
 Implement subclasses:
Average → to calculate average
Variance → to calculate variance
 Call both methods using abstract class reference.
*/
import java.util.*;

abstract class Statistics{
	public abstract double compute(int a[]);
}

class Average extends Statistics{

	public double compute(int a[]){
	  int sum=0;
	  for(int i : a){
	 	sum = sum + i;
	  }
	return (double) sum / a.length;
	}
}


class Variance extends Statistics{

  public double compute(int[] arr) {
        double mean = new Average().compute(arr);
        double temp = 0;
        for (int num : arr) {
            temp += (num - mean) * (num - mean);
        }
        return temp / arr.length;
    }
}

public class AvgVariUsingAbstractClassImplementation{
	public static void main(String x[]){

	Scanner sc = new Scanner(System.in);

	int a[] = new int[5];
	
	System.out.println("Enter Elements in Array : ");
	for(int i=0;i<a.length;i++){
	  a[i]=sc.nextInt();
	}

	Average av = new Average();
	System.out.println("Average of the Array Element's : "+av.compute(a));	

	Variance va = new Variance();
	System.out.println("Variance of the Array Element's : "+va.compute(a));	

	}
}