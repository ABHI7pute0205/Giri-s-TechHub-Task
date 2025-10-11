// Write a function to convert Fahrenheit to Celsius.



function FahrenheitToCelsius(far){
	
	let cel = (far - 32)*5/9;
	return cel;
}

console.log("Faherenhit To Celsus: ",FahrenheitToCelsius(42));