/*
Q4. Write program to create class name as Area with constructor overloading
       Area(float radius): this function can accept radius as input and calculate circle Area
      Area(int len,int width): this function can accept len and width as input and calculate area of rectangle
*/

class Area{

// here we overload the constructor overloading means same name but different parameter list , different paramter sequence | constructor calling is depend on the values parameter pass at the time of the object creation 

	Area(float radius){
		System.out.println("Area of the Circle : "+ (3.14*radius*radius));
	}

	Area(int len,int width){
	  System.out.println("Area of the Rectange :"+(len*width));
	}
}
class AreaUsingConstructorOverloading{
	public static void main(String x[]){

	Area a1 = new Area(5.0f);	// means je value pass karu to constructor call hoil as per the rule of the constructor chaning 

	Area a2 = new Area(4,6);
		

	}
}