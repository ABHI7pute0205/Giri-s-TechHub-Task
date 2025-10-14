/*
Q4. Write program to Create class name as PersonalInfo with parameterized constructor
PersonalInfo(String name, String middlename, String lastname) and you have to create class name as ProfessionalInfo with parameterized constructor like as ProfessionalInfo(int id,String des,int salary,String skillset) and you have to inherit PersonalInfo class in ProfessionalInfo and pass parameter from ProfessionalInfo class to PersonalInfo using super() constructor and you have to define void show() method in ProfessionalInfo and you have to show the all data in show() method
*/

/*
as per the rule of the constructor chaning when ever we creat the the object of the child class and at that point parent class constructor get executed [first calling constructor get executed very last and last calling constructor get executed first by stack based rule ] when we have parameterized constructor then we need to pass the parameter from the child class constructor to the parent constructor and 
- super is use to pass paramter to the parent class from child
- super must call only parent not a parent of parent or Grandparent 
- super must be the first line in the child class constructor 
- it is a function  , constructor call of another class so we need to use it at a first line 
*/

class PersonalInfo{
	String FName , MName , LName;
 
// parameterize constructor  from parent class 

	PersonalInfo(String FName , String MName , String LName){
		this.FName=FName;
		this.MName=MName;
		this.LName=LName;	
	}
}

class ProfessionalInfo extends PersonalInfo{	// child class 

	int id , salary;
	String  des , skillset;

// parameterise constructor of the child class 
	ProfessionalInfo(String FName , String MName , String LName , int id, String des , int salary , String skillset){
	    super(FName , MName , LName);	// super used to pass parameter to the parent class constructor 
		this.id=id;
		this.des=des;
		this.salary=salary;
		this.skillset=skillset;
	}	

	void show(){
	  System.out.println("Name : "+FName+" "+MName+" "+LName);
	  System.out.println("ID : "+id);
	  System.out.println("Designation : "+des);
	  System.out.println("Salary : "+salary);
	  System.out.println("SkillSet : "+skillset);
	
	}
}
public class PassingValuesToParentConstructorFromChild{
	public static void main(String x[]){

// when ever we create an object of the child class then the child's constructor get call and at point we placed super , and super call parent class constructor 

	ProfessionalInfo pi = new ProfessionalInfo("Abhishek","Annasaheb","Satpute",101,"Devloper",50000,"Java"); 
	pi.show();	

	}
}