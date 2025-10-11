// Write a function to remove duplicates from an array.

let a = [1,2,3,2,5,7,3];

function DuplicateRemove(a){
	let res=[];	// to store result array OR Only Store Unique array Elements

	for(let i=0;i<a.length;i++){
	  let isDuplicate = false;
	  
	  for(let j=0;j<a.length;j++){

	 	if(a[i] === res[j]){	// check element of Original Array Present in Result Array or Not if yes then skip and break if not then add it in a res array 
		  isDuplicate = true;
		  break;

		}
	  }
	  if(!isDuplicate)
		res[res.length]=a[i];
	}
	return res;
}

let resArr = DuplicateRemove(a);
console.log("Array after Remove Duplicates :",resArr);