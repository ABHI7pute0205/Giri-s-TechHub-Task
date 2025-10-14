// Sort integer data using sort method 


let arr = [10,,85,20,1,2,60,9,10];

console.log("Before Sort:"+arr);

arr.sort(function(a,b){
	return a-b;	// previous value cha next value sobat difference kadht chalt 
});

console.log("After Sort:"+arr);
