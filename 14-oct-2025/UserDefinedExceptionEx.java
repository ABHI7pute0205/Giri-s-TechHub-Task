// 5.Write code for create user defined excetion?

/*
userdefined exception is a concept in a exception handling which is used to handle the exception's which are created by the programmer / developer and developer can create a userdefined exception because of the he has a some exception in a project but any langauage OR java can not provide any buit in exception class in thse case user can create own exception and throw it "throw"-->  keyword or clause is used to handle the userdefined exceptions 
*/

class VotingException extends RuntimeException{
	String VotingError(){
	  return "Invalid Voter...";
	}
}

class VotingMachine{
	void checkVoter(int age){
	   if(age > 18){
		System.out.println("You can vote...!");
	   }
	   else{
		VotingException ve = new VotingException();
		throw ve; 
	   }
	}
}

public class UserDefinedExceptionEx{
	public static void main(String x[]){

	try{
	  VotingMachine vm = new VotingMachine();
	  vm.checkVoter(19);
	}	
	catch(VotingException ve){
	  System.out.println("Error is : "+ ve.VotingError());
	}
	}
}

/*
E:\Giri's-Tech-Full-Stack-Java\Core-Java\Oct-Revision-Plan\14-oct-2025>java UserDefinedExceptionEx
Error is : Invalid Voter...

E:\Giri's-Tech-Full-Stack-Java\Core-Java\Oct-Revision-Plan\14-oct-2025>javac UserDefinedExceptionEx.java

E:\Giri's-Tech-Full-Stack-Java\Core-Java\Oct-Revision-Plan\14-oct-2025>java UserDefinedExceptionEx
You can vote...!

E:\Giri's-Tech-Full-Stack-Java\Core-Java\Oct-Revision-Plan\14-oct-2025>
*/