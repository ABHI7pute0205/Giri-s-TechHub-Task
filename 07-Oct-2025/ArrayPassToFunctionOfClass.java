class ABC{
// only one array in the memory with 2 diffrent references

	void acceptArray(int arr[]){
	  System.out.println("arr points to the Base address of a : "+System.identityHashCode(arr));

	  arr[1]=100;	// changes perform in the function are affected on original array  / or at a function calling point 
	}
}

public class ArrayPassToFunctionOfClass{
	public static void  main(String x[]){

	  int a[] = new int[]{10,20,30,40};

	System.out.println("Base Address of a : "+System.identityHashCode(a));

	ABC ref = new ABC();	// object of the class 

// from here we pass the base address of the array 
	ref.acceptArray(a);	// call the method of class ABC and pass array as a reference 


	System.out.println("Array Element :");
	for(int i:a){
	  System.out.println(i);	// base address + index * size 
	}
	}
}

// means when we have the more than one reference of the single object OR a array or anything that is created by using new keyword when ever we perform the changes using any reference then the changes actually perform on the main memory or the changes perform on the all over the application basically we perform the changes on the main memory space 

//---------------------------------------------

/*
call by value :
	means when we pass the duplicate value from the function calling to the function definition called as call by value 
if we pass anu variable in a function definition which is NOT ALLOCATED BY A NEW KEYWORD then it is know as call by value 
- means we pass primitive types of values like int , float without  a new called ...
 	

call by reference :
	means we pass the base address of the  memory from function calling to the function definition called as call by reference.
- means here we can pass the variables which are allocated or created by using new keyword called as....
- and the changes perform in the function definition are reflect on function calling point  
	
*/