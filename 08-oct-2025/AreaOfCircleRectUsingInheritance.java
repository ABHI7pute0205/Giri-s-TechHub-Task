/*
Q2. Write program to create class name Area with methods name as void setRadius(float   radius) and void setLengthWidth(int len,int wid) and two child classes name as Circle and Rectangle so you have to define float getCircleArea() method in Circle child class and calculate area of circle and return it and You have to define getRectArea() method in Rectangle class and calculate area of rectangle and return it
*/

class Area{
	float rad;
	int len , width;

	void setRadius(float rad){
	  this.rad=rad;
	}
	
	void setLenWidth(int len , int width){
	  this.len=len;
	  this.width=width;	
	}
}

class Circle extends Area{
	float getCircleArea(){
	  return 3.14f * rad * rad;
	}
}

class Rectangle extends Area{
	int getRectArea(){
	  return len * width;
	}
}

public class AreaOfCircleRectUsingInheritance{

	public static void main(String x[]){
	
	  Circle c = new Circle();
	  c.setRadius(5.0f);
	  System.out.println("Area Of The Circle : "+c.getCircleArea());

	  Rectangle r = new Rectangle();
	  r.setLenWidth(5,4);
	  System.out.println("Area Of The Rectange : "+r.getRectArea());
	}
}