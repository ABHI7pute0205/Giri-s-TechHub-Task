class ABC{
	static{
	 System.out.println("I am Static From ABC Class");
	}
}
public class StaticTest{
	static{
	 System.out.println("I am Static From StaticTest Class");
	}
	public static void main(String x[]){

	new ABC();

	   System.out.println("I am Main Method Block");
	  
	}
}