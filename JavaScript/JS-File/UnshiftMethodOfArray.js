let a = [1,2,3,4,5];

let len = a.length;

console.log("Array length : ",len);

console.log("Before Shifting : ");
for(let i=0;i<len;i++){
	console.log((i)+"----->"+a[i]);
}

a.unshift(100);

len = a.length;

console.log("AFTER  Shifting : ");
for(let i=0;i<len;i++){
	console.log((i)+"----->"+a[i]);
}
