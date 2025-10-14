//Write a function that generates the Fibonacci sequence up to n terms.


function Fibonacci(n){
	let fib = [];   // to store sequence
	
	if(n>=1){
	  fib[0]=0;	// initially we set 0 at index 0
	}

	if(n>=2){
	  fib[1]=1; 	// initially we set 1 at index 1
	}

	for(let i=2;i<n;i++){	// and loop start from 2 to < users num 
	   fib[i] = fib[i-1] + fib[i-2];	i=2 [2-1] + [2-2] = 1+0 = 1 |i=3 [3-1]+[3-2]= 2+1 =3
	}
	return fib;
}

let res = Fibonacci(10);
console.log(res);