/* Write a function to sort an array in ascending order.   चढता क्रम  ->1, 2, 3, 4, 5


*/
let a =[2,5,4,6,1,8];

function AscendingSort(a){

	for(let i=0;i<a.length;i++){
 	  for(let j=0;j<a.length;j++){
		if(a[i] < a[j]){
		  let temp = a[i];
		  a[i]  = a[j];
		  a[j]  = temp;
		}
	  }
	}
	return a;	
}

let res = AscendingSort(a);
console.log("Array Sorting In Ascending Order : ",res);