class Parent {
    int num = 10;
}

class Child extends Parent {
    int num = 20;
}

public class ParentAndChildHaveSameFieldName{
    public static void main(String[] args) {

// Access depends on reference type, not the object type
// fields can not be override only hides

        Parent p = new Child();	// parent class ref child class object 

        Child c = new Child();

        System.out.println(p.num); // (1)

        System.out.println(c.num); // (2)
    }
}
Explanation:

1️⃣ p is a Parent reference pointing to a Child object,
but since fields are not polymorphic, Java looks at the reference type (Parent),
so → p.num uses Parent’s num = 10

2️⃣ c is a Child reference,
so → c.num uses Child’s num = 20