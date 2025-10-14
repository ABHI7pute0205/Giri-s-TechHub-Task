/*
Static methods are not overridden, they are hidden — depends on reference type.
*/

// static method calling  madhe jya class cha refernece create kela tya ch class che method execute hote 

class Base {
 	// static method in parent class 

   public static void show() {  
     System.out.println("show From Base Class called [Parent] ");
   }
}

class Derived extends Base {
	  // static method in Child Class 

	public static void show() {
	 System.out.println("Show From Derrived Class called [Child] ");
	}
}

class StaticMethodOverridingORHidding {
	public static void main(String[] args) {

	Base b = new Derived();	// referneec of the parent class | object of the child class 

// using parent reference we called static method which is override  | when we override static methods in that case method overriding not Happens Method Hidding HAppens  || and it's calling depends on "reference Type"

	b.show();
	
	}
}
