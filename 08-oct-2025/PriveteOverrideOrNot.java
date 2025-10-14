class A {
    private void show() {
        System.out.println("A's private show");
    }
}

class B extends A {
    void show() {		 // This is NOT overriding
        System.out.println("B's show");
    }
}

public class PriveteOverrideOrNot {
    public static void main(String[] args) {
        B b = new B();
        b.show(); // Calls B's show
    }
}

