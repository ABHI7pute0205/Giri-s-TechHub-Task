/*
Q1. Write a program to crate class name as Value with single function name as setValue(int,int) and we have to create three child classes name as Add with function int getAdd() , Mul with function getMul() and Div with function getDiv() and getAdd() function return addition of two value which is inherited from Value class , getMul() function return multiplication of two values which is inherited from Value class and gitDiv() function return division of two values which Is inherited from Value class
*/

// this is a Hirarchical Inheritance Implementation --> only one parent class and More than one CHild class called... 

class Value{
	int x,y;

	void setValue(int a, int b){
	  x=a;
	  y=b;
	}	
}
class Add extends Value{	// child can use the property's of the parent or inherit parent property 
	int getAdd(){
	 return x+y;
	}
}

class Mul extends Value{
	int getMul(){
	 return x*y;
	}
}

class Div extends Value{
	int getDiv(){
	  return x/y;
	}
}

public class HirarchicalInheritanceImplementation{
 	public static void main(String x[]){

	Add ad = new Add();	// create object of the child class 
	ad.setValue(10,20);	// use parent class method 
	System.out.println("Addition is : "+ad.getAdd());	

	Mul ml = new Mul();
	ml.setValue(5,3);
	System.out.println("Multiplication is : "+ml.getMul());	


	Div dv = new Div();
	dv.setValue(10,5);
	System.out.println("Division is : "+dv.getDiv());	

	}
}