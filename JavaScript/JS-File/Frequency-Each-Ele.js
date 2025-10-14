/*
6. Count Frequency of Each Element
Concept: Use nested loops or a hash map to count how often each number appears.
Example:  arr = [4, 5, 6, 4, 5, 7, 4]
Output:
Element 4 occurs 3 times  
Element 5 occurs 2 times  
Element 6 occurs 1 time  
Element 7 occurs 1 time  
*/

let  arr = [4,5,6,4,5,7,4];

for(let i=0;i<arr.length;i++){

	let cnt=1;
	let visited = false; // flag  for already visited elements 

	  for(let j=0;j<i;j++){		// this loop check the element is already visited or not  
		if(arr[i] == arr[j]){
		  visited = true;	// if already visited then mark it as a visited flag equal to true and break
		  break;
		}
	  }

	  if(visited)		// if already visited then skip it and move on the next element
		continue;

	 for(let k=i+1;k<arr.length;k++){	// this loop checks the elements which are not duplicated and increase the count 
	 	if(arr[i] == arr[k]){
		  cnt++;
		}
	 }
	console.log("Element : "+arr[i]+" Occurs : "+cnt+" Times");
}