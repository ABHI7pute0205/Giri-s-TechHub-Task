// index of method 

let a = [10,20,30,50,40,60,80,90];

let index = a.indexOf(2);

if(index != -1)
	console.log("Value found on :",index);
else
	console.log("Value Not Found on :",index);
































/*
/*
Q3. We are asked to find the smallest element to the right of every element in the array.
* If a smaller element exists on the right, store that.
* If no element is smaller, store -1.
*/

import java.util.*;
public class Q3 {
    public static void main(String[] args) {

	Scanner sc=new Scanner(System.in);
	System.out.println("Enter size of array");
        int n=sc.nextInt();
	int arr[]=new int[n];
	System.out.println("Enter element in array");
	for(int i=0;i<n;i++)
	{
	  arr[i]=sc.nextInt();
	}

        int res[]= new int[n];
        for (int i = 0; i < n; i++) {
            int min = -1;  // Default value if no smaller element found

            for (int j = i + 1; j < n; j++) {
		 if(arr[i]<arr[j]){
                if (min ==-1 || arr[j] < min) {   
                    min=arr[j]; // store smallest found so far
                }
		}
            }
            res[i]=min; 
        }
	System.out.println("Output");
	for(int i=0;i<n;i++)
	{
	System.out.print(res[i]);
	}
    }
}
*/