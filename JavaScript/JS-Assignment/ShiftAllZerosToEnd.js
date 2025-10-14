/*
Shift All Zeros to End
Move all zeroes in the array to the end while keeping non-zero elements in order.
Example: [0, 1, 0, 3, 12] → [1, 3, 12, 0, 0]

*/

let a = [0,1,0,3,12];

let ind=0;	// index to track the each element 

for(let i=0;i<a.length;i++){
	if(a[i] !== 0){		// check array element is zero or not if not zero
	  a[ind++] =a[i]; 	// then add it in a original arra again and increase the index 
	}

}

while(ind < a.length){	// check the index length is leass than array length if not then add remaing  element as a 0 
	a[ind++] = 0;
}
	
console.log("After Shifting All Zero to End : ",a);