/*
5. Search for an Element (Linear Search)
Concept: Traverse array linearly and compare each value with the target.
 
arr = [10, 20, 30, 40, 50]
Enter search key  : 30 
Output: value found 
Enter search key: 300
Output: value not found 
*/

let arr = [10,20,30,40,50];

let skey = 40;

let found = false;

for(let i=0;i<arr.length;i++){
	if(arr[i] == skey){
	   found=true;
	   break;
	}
}
	if(found)
	  console.log("Element Found in Array : ",skey);
	else
	  console.log("Element Not Found In Array...");