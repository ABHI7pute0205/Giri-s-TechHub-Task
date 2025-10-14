
class Animal {		// only one parent class  and more than one child class 
    void eat() {
        System.out.println("All animals eat food");
    }
}

class Dog extends Animal {	// dog is a child of the Animal class
    void bark() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {	// cat also child 
    void meow() {
        System.out.println("Cat meows");
    }
}

public class HirarchicalInheritanceEg {
    public static void main(String[] args) {

        Dog d = new Dog();		// child can inherit the property from parent class  
        d.eat();   // from Animal
        d.bark();  // from Dog

        Cat c = new Cat();
        c.eat();   // from Animal
        c.meow();  // from Cat
    }
}
