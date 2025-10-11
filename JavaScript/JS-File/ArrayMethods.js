/* array methods in js 
_____________________________________
1. Array Length : Used for Calculate the Length of the Array

2. Array toString() : Convert array to String 

3. Array at() : this method can fetch the array data by using a SPECIFIED INDEX.

4. Array join() : this method can CONCATENATE specified character OR String in Array Elements 

5. Array Push() : this method can push the Element in Array OR INSERT ELEMENT in Array

6. Array pop() : remove the top most element from the Array.

7. Array shift : REMOVE THE element or REMOVE THE FIRST ELEMENT from array and move all other elements to an array at LOWER INDEX.

8. unshift() : Add a new Element to an Array At BEGINNING AND UNSHIFT OLDER ELEMENTS

9. concat() : this method can merge two array or more than teo array and return new array.

10. flat() : this method can create a new array with SUB-ARRAY  elements concatenated to a specified depth 

11. splice() : used to add an NEW ITEMS to an Array 

12. slice() : this method slice out a piece of an array into a new Array 

13. indexOf() : can search the element in array and return its index and if element not found return -1 and this method return first occurence of index.

14. lastIndexOf() : this method can search the element in an array and if same element occur multiple time then return its last Occurence if not found then return -1.

15. find() : this method return the value of the  firt array element that passes to a test function
This method can take three parameters 
a. item value
b. item index
c. the array itself

16. sort() : sort the array data by alphabetically or numeric array also

17. reverse() : this method can reverse array  and if we want to array in decending order then sort() and reverse() method at same time 

18. forEach() : this method call a function [a callback function] once for every array element 

19. map() : this method create a new array by performing a function on each array element MEANS in sort can fetch a single single element from the array and perform operation on it.

20. flatMap() : first map all elements of an array and then create a new array by flating the array

21. filter() : this method create a new array with array elements that pass the test.(internally uses a predicate interface means test the consition and then create a new array).

22. reduce() : this method can perform the operation on array and generate short result (like sum of the all array element , avg , etc).

23. keys() : this method can return keys of array. 
*/


let arr  =[10,20,30,40,50];

let len = arr.length;
console.log("The Length of the Arry is : ",len);

let str = arr.toString();
console.log("Array in String Format : "+str);


// array at(i) can fetch the data in -ve index also 
for(let i=-1;i>=-5;i--){
	console.log(arr.at(i));
}

// join -> 
let newArr = arr.join(" * ");
console.log(newArr);

console.log("Before push : ");
for(let i=0;i<len;i++){
	console.log(arr[i]);
}
arr.push(6);
arr.push(7);

len = arr.length;
console.log("After Push : ");
for(let i=0;i<len;i++){
	console.log(arr[i]);
}
let val = arr.pop();
console.log("Remove Value is :",val);

// shift 

console.log("Before SHIFT : ");
for(let i=0;i<len;i++){
	console.log(arr[i]);
}
arr.shift();

len = arr.length;
console.log("After SHIFT : ");
for(let i=0;i<len;i++){
	console.log(arr[i]);
}













