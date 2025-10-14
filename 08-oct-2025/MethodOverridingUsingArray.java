/*
Q5. Write Program to perform method overriding you have to create class name as ArrParent with method
void setValue(int arr[]): this method can accept array as parameter
void arrangeSeq(): this method can display array as per user input sequence
You have to create two child class name as ArrangeAscendingOrder and you have to inherit ArrParent class in it and override 
arrangeSeq() method in ArrangeAscendingOrder and sort array and display in ascending order and you have to create one more class name ReverseArray and override 
arrangeSeq() method from ArrParent and reverse array and display it.
*/


import java.util.*;
class ArrParent{

	int a[];

	void setVal(int a[]){
	  this.a=a;
	}
	
	void arrangeSeq(){	// this is a parent class method 

	  System.out.println("Original Array : ");
	   for(int i=0;i<a.length;i++){
		System.out.print("  "+a[i]);
	   }
	  System.out.println();

	}
}
// in the case of the overriding always child class logic get executed overriding is beneficiall because child can customize the logic as per the requirement  | method overriding run time polymorphism 

class ArrangeAscendingOrder extends ArrParent{

	void arrangeSeq(){	// here we override parent class method 

	   for(int i=0;i<a.length;i++){
		for(int j=0;j<a.length;j++){
		  if(a[i] > a[j]){
			int temp = a[i];
			a[i] = a[j];
			a[j] = temp;
		  }
		}
	   }
	   System.out.println("Array In Ascending Order : ");
	   for(int i=0;i<a.length;i++){
		System.out.print("  "+a[i]);
	   }
	  System.out.println();
	}

}

class ReverseArraySequence extends ArrParent{

	void arrangeSeq(){	// here also we override parent class method

	  System.out.println("Array In Reverse Order : ");
	   for(int i=a.length-1;i>=0;i--){
		System.out.print("  "+a[i]);
	   }
	  System.out.println();
	}

}

public class MethodOverridingUsingArray{
	public static void main(String x[]){
	Scanner sc = new Scanner(System.in);

	System.out.println("Enter Size of the Array : ");
	int size=sc.nextInt();

	int a[] = new int[size];

	System.out.println("Enter Array Elements : ");
	for(int i=0;i<a.length;i++){
		a[i]=sc.nextInt();
	}

// in the case of the method override when ever we create an object of the child class and  try to call an override method then by default child's logic get Executed  | here we also create an reference of the parent class and object of it's child class this technique known as upcasting whihc is helpfull for to achieve polymorphism 

	ArrangeAscendingOrder ao = new ArrangeAscendingOrder();
	ao.setVal(a);
	ao.arrangeSeq();


	
	ReverseArraySequence ra = new ReverseArraySequence();
	ra.setVal(a);
	ra.arrangeSeq();
	}
}