//1. ParentElement =>  only return parent if present else error :  using this property we find parent of current id

/*
setTimeout(() => {
  document.getElementById("inner").parentElement.style.backgroundColor = "#000";
}, 5000);
*/

// var target = document.getElementById("inner").parentElement;
// console.log(target);
//--------------------------------------------
//2.  ParentNode => at least reaturn  sothing if parent present or not

// var target = document.getElementById("inner").parentNode;
// console.log(target);

//---------------------------------------------
//3.  Childern => we see the all childrens of specified parent div and  target particular child of the parent
/*
setTimeout(()=>{
    document.getElementById("boxes").children[2].style.backgroundColor = "green";
},5000)

var target = document.getElementById("outer").children;
console.log(target);
*/
//------------------------------------------
//4. childNodes => we see the enter pree and comments also

// var target = document.getElementById("outer").childNodes;
// console.log(target);

//---------------------------------------
//5. FirstChild => always see the text

// var target = document.getElementById("outer").firstChild;
// console.log(target);

// ---------------------------
//6. LastChild => 

    // var target = document.getElementById("outer").lastChild;
    // console.log(target);

//------------------------------------
//7. firstElementChild => 

    // var target = document.getElementById("outer").firstElementChild;
    // console.log(target);

//-----------------------------------
//8. lastElementChild =>

    // var target = document.getElementById("outer").lastElementChild;
    // console.log(target);

//-------------------------------------
/*
9. nextSibling
10. previousSibling
11. nextElementSibling
12. previousElementSibling
 
*/
