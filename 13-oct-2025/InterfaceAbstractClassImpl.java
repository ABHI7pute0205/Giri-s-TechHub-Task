/*
Q1.Create an interface Shape with methods area() and perimeter().
 Create an abstract class Polygon that implements Shape and has a variable numSides.
 Then create two subclasses Rectangle and Triangle that implement the abstract methods
*/

import java.util.*;

// interface with 2 public abstract methods 

interface Shape{
	 double area();
	 double perimeter();
}

// abstract class which implements interface means it points to the interface methods and it contain one variable 

abstract class Polygon implements Shape{
	int numSides;
}

// child class which extends abstract class 
class Rectangle extends Polygon{
	double len  , wid ;

// parameterise constructor to initialise instance variable at the time of the object creation 
	public Rectangle(double len , double wid){
	  this.len=len;	
	  this.wid=wid;
	  this.numSides=4;
	}

// here we override the abstract methods 
	public double area(){
	  return len * wid;
	}
	
	public double perimeter(){
	  return 2 * (len + wid);
	}
}

class Triangle extends Polygon{

	double s1 , s2 , s3;

// parameterise constructor 
	public Triangle(double s1 , double s2 ,double s3 ){
	   this.s1=s1;
	   this.s2=s2;
	   this.s3=s3;
	   this.numSides=3;
	}

// override abstract methods 
	public double area(){
		double s = (s1 + s2 + s3)/2;
		return Math.sqrt(s* (s-s1) * (s - s2) * (s - s3));
	}
	
	public double perimeter(){
		return s1 + s2 + s3;
	}
}

public class InterfaceAbstractClassImpl{
	public static void main(String x[]){
	Scanner sc = new Scanner(System.in);

// we accept i/p from user at run time 
	System.out.println("Enter Length Width of Rectangle AND Sides of Triangle : ");
	int len=sc.nextInt();
	int wid=sc.nextInt();
	int s1=sc.nextInt();
	int s2=sc.nextInt();
	int s3=sc.nextInt();

// create the object of the first child class 
	Rectangle r = new Rectangle(len,wid);
	System.out.println("Area of the Rectangle : "+r.area());
	System.out.println("Perimeter of the Rectangle : "+r.perimeter());

// object of the 2 nd child class 
	Triangle t = new Triangle(s1,s2,s3);
	System.out.println("Area of the Triangle : "+t.area());
	System.out.println("Perimeter of the Triangle : "+t.perimeter());

	}
}