/*
21. Delete an Element from a Specific Position
Concept: Shift elements to the left to overwrite the removed value.
Use Case: Remove items from a list, logs, etc.
Input: arr = [10, 20, 30, 40, 50]
Size = 5
Array after deletion: [10, 20, 40, 50]
*/

let a = [10, 20, 30, 40, 50];

let deleteVal = 30;

for(let i=0;i<a.length;i++){	// loop traverse through each element 

	if(a[i] === deleteVal){	// check each element with deleted element	if Found at what position after that shift next element on that index 

	  for(let j = i;j<a.length-1;j++){	// then shift all elements to the Left Hand Side loop Always start from ith element 
		a[j]  = a[j+1];
	  }

	a.length = a.length-1;		// reduce the size of the array by 1
	break;		// break the loop 

	}
}

console.log("Array After deletion : ",a);