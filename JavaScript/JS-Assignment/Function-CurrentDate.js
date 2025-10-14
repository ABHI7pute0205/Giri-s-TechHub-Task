//Write a function that returns the current date in DD-MM-YYYY format.

function getCurrentDate(){
	
   const date = new Date();// get the current date and time 

	let day = date.getDate(); // day od the month
	let month = date.getMonth()+1; // gives month from 0 to 11 so we need to satr it from +1
	let year = date.getFullYear(); // gives the 4 digit year 

	return day+"-"+month+"-"+year;
}

console.log(getCurrentDate());