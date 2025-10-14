// map() : is use to fetch single - single element from the array and perform operation each element of the array [here we get 2 arrays ]



let arr = [10,20,30,40,50];

let res = arr.map((val)=>{
	return val*2;
});
console.log(res);



/* Method chaning Technique 

arr.map((val)=>val*2).forEach((v)=>console.log(v));

*/