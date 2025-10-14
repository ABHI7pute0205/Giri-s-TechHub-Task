/*
15. Count Total Number of Duplicates
Concept: Track frequency of elements and count those with more than one occurrence.
Use Case: Analyze redundancy or repeat errors.
Input: arr = [1, 2, 2, 3, 4, 4, 4, 5]
Total number of duplicate elements: 3
*/


let a = [1, 2, 2, 3, 4, 4, 4, 5]

let cnt=0;

for(let i=0;i<a.length;i++){
	let duplicate=false;


	for(let j = i+1;j<a.length;j++){
	  if(a[i] === a[j]){
		duplicate = true;
		break;
	  }
	}

	let alreadycnt = false;
	for(let k = 0;k<i;k++){
	  if(a[i] === a[k]){
	    alreadycnt = true;
	    break;
	  }
	}
	if(duplicate && !alreadycnt){
	  cnt++;
	}
}
console.log("Total Number of duplicate elements :",cnt);
