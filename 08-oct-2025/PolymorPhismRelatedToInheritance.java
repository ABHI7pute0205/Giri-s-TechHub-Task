class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    void sound() {
        System.out.println("Cat meows");
    }
}

public class PolymorPhismRelatedToInheritance {
    public static void main(String[] args) {

        Animal a;	// create a reference of the parent class 

        a = new Dog();	// use this reference with dog class then dog's version get executed 
        a.sound();  

// use same parent class refenrece with cat class then cat's version get executed  this is called polymorphism here one method can behave differnt in different situations
        a = new Cat();	 
        a.sound();   
    }
}
