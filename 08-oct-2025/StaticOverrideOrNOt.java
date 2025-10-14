

class A {
    static void display() {
        System.out.println("A's static display");
    }
}

class B extends A {
    static void display() { // hides A's method
        System.out.println("B's static display");
    }
}

public class StaticOverrideOrNOt{
    public static void main(String[] args) {

        A a = new B();   // parent class reference and child class reference called upcasting Technique 	

// in the case of the static method override try to call and overriden method then by default the parent's logic get executed here method hidding happens 

        a.display(); // Calls A's static method
       
	// B.display(); // static method belongs to the class not object of class / instance using class name we can directly call static methods
    }
}
