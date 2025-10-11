/*
20. Insert an Element at a Specific Position
Concept: Shift elements from the target index to the right and place the new value.
Use Case: Insert student records, product, etc.
Input: arr = [10, 20, 30, 40, 50]
Size = 5
Array after insertion: [10, 20, 25, 30, 40, 50]
*/

// so in JS when ever we need to insert an element on a given locatin in a array so we do not need to exceed array size manually because of the JS array's are internally Dynamic Typed Array OR JS is also a Dynamic Typed Lanaguage so we do not need to maually define the array size it automatically increase as per we insert the values in the array  


let a = [10, 20, 30, 40, 50];

let InsertVal = 25;
let index = 2;

for(let i=a.length;i>index;i--){	// using this loop we shift the all values at the Right hand hand side 
	a[i] = a[i-1];		
// just override the next element on Previous one and at middle also copy of element on given inserted index element here just simply we overide our new inseted element 
}

a[index] = InsertVal;		// Store the given inserted value at the given index 

console.log("Array After Value Inserted : ",a);