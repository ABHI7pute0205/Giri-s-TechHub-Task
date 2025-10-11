/*
Check if Array is Sorted
Write a program to check if the array is sorted in ascending order.
Example: [1, 2, 3, 4, 5] → true
[3, 2, 5] → false
*/

let a = [1,2,3,4,5];

let flag = true;	// intitally Assume all array Elements are sorted 


for(let i=0;i<a.length-1;i++){	// this loop iterates upto last elememnt of the array 
	if(a[i] > a[i+1]){	// check if any condition i.e array first element is greater than second then not sorted break loop
	  flag = false;
	  break;
	}
}

if(flag){
  console.log("Array is sorted...");
}
else{
  console.log("Array is NOT sorted...");
}