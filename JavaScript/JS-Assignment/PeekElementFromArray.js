/*
30. Find Peak Element
Concept: A peak is greater than its neighbors. Traverse and check this condition.
Use Case: Find local maximum in signal processing or profit tracking.
Input: arr = [1, 3, 20, 4, 1, 0]
Output: Peak element found: 20
------------------------------------
a = [1, 3, 20, 4, 1, 0]

-i = 0 → a[0] = 1
left neighbor नाही (skip)

-right neighbor = 3 → 1 <= 3 → isPeak = false
i = 1 → a[1] = 3

-left neighbor = 1 → OK (3 > 1)
right neighbor = 20 → 3 <= 20 → isPeak = false

-i = 2 → a[2] = 20
left neighbor = 3 → OK (20 > 3)
right neighbor = 4 → OK (20 > 4)

So isPeak stays true → peak found = 20 → break → output = 20
--------------------------------------------------------------------
a[i] <= a[i + 1] → याचा अर्थ a[i] हे आपल्या right neighbor पेक्षा लहान किंवा बरोबर आहे → तर ते peak नाहिये.

a[i] <= a[i - 1] → याचा अर्थ a[i] हे आपल्या left neighbor पेक्षा लहान किंवा बरोबर आहे → ते देखील peak नाहिये.
*/



let a = [1, 3, 20, 4, 1, 0];

let  peekEle = 0;

for(let i=0;i<a.length;i++){

    let isPeek = true;	// initially we assume current element is peek element means yat 20 aala ki to aadhe peek aahe asa consider kela jato 
	

// current element cha LEFT neighbour check kar to jevha ith index Greater than 0 asel tevha ch 

	if(i>0 && a[i]<=a[i-1]){	// 1 chya left side la element nahi to skip hoil | 20<=3F	eith false zala mhanje to aajun pan peek aahe ek test pass zala 
	   isPeek = false;
	}

// Current element chya lage ch cha right element check kar to
 
	if(i<a.length-1 && a[i] <= a[i+1]){   First iteration array madhl -> 1<=3 False | 20<=4F	eith pan check kela eith pan false zala means to aajun pan peek element aahe 
	   isPeek  = false;
	}

	if(isPeek){	 // and here assign this true element as a peek element 
	  peekEle = a[i];
	  break;
	}
}
console.log("Peek Element is : ",peekEle);