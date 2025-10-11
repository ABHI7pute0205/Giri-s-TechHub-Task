// Write a function to find the least common multiple (LCM) of two numbers

function findLCM(a,b){
	let max = (a>b) ? a : b;	// kar n ki 2  n he num la divisible cha number ha max number chya next ch asnar ye mhanu yatun max number find karun tya chya pudh che number check kele 
	let lcm = max;

	while(true){ // this loop till in execution when ever we not find number which is Divisible by both

	  if(lcm % a === 0 && lcm % b ===0){   // max num ne each number la divide karun bhag y che jith pan 2 n he true asle tevha exit hot loop 
		return lcm;
	  }
	 lcm = lcm + 1;
	}
}

console.log("LCM  is :",findLCM(12,18));




/*  मोठ्या संख्येपासून सुरु करतो आणि प्रत्येक number check करतो की दोन्ही संख्यांनी divide होते का.
जेव्हा पहिल्या वेळी divisible number सापडतो, तो LCM आहे.

a = 12, b = 18
12 चे multiples: 12, 24, 36, 48, 60 …
18 चे multiples: 18, 36, 54, 72 …
LCM = 36 ✅ (सर्वात लहान common multiple)
*/