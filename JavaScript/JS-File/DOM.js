// How To target Particular element in HTML
/* 
1. getElementByID
2. getElementByClassName
3. getElementByName
4. getElementByTagName
*/

//----------------------------------------
/*
 1. document   --> it points to the All document of the Html OR Our Whole Web Page 
 2. document.all --> array --> index -> using index target particular element
 3. document.images [fetch all image from out document]
 4. document.links -> to get all anchor's from you web page
 5. document.forms -> to get total forms inn web page 
 6. document.URL  --> links present OR what url we use 
*/
// ----------------getAttribute-----------------
/*
1. innerText
2. innerHTML
3. attributes -> return the array of the attribute & use .name & .value method get attribute name and its value
4. getAttribute  -> return the attributes of the particular id class
*/

// ---------------setAttribute-----------------here id has higher priority than class
/*
1. innerText  --> we change the inner text of particualr id dynamically after some time with help of timing fun
2. innerHTML  
3. setAttribute  ->  here we can set the custom attribute with passing attribute name it's value 
    syntax : .setAttribute("class","back-color");
4. removeAttribute  -> in this we can pass the attribute name which we want to remove  
*/

//---------------querySelector() and querySelectorAll()-------------
/* Note : yat aapn id class jar use kela tar tya sobat tya n che symbol pan use kara y che i.e #id , .class 

1. querySelector() -> it finds the First Match 
e.g 
document.querySelector("#id_name");   | same for class name

2. querySelectorAll() -> it finds all Matches
--> here we have multiple match same name attributes so we need to use the loop  here , we use forEach Loop to iterate through each single-single element 
e.g 
document.querySelectorAll(".class_name");
forEach((ele)=>{
  console.log(ele.setAttribute/getAttribute);
});
*/

// -----------DOM CSS Styling -------------
/*
1. style -> indivisually apply styling OR Direct pass style name single-single 
e.g document.querySelector("#id_name").style.border="3px solid red";

2. className ->  we write multiple property in a class and pass this class name  here to apply styling 
e.g  document.querySelector("#id_name").className="p-5 back-color";

here we pass diff class name in single " " quote 
   note : here we use Bootstrap classes as well as Custom classes to apply Styling by Using Particular class 

3. classList ->  it contains the some methods to change the style of the html element 
  a. add  ->
  e.g
  document.querySelector(".list").classList.add("change-border-color", "change-font-size"); 
// here we can pass multiple class name by seperating using , commas 

  b. remove ->
  document.querySelector(".list").classList.remove("change-border-color", "change-font-size");

  c. contains  -> is used to check the given class present in the document or not 
  document.querySelector(".list").classList.contains("change-border-color");

  d. length  ->  this is used to display the total number of classes present in the document 

  e. toggle  -> used to ON/OFF and OFF/ON 
 */

//---------------------------------------------------------------------------------------------------------
// var element;
// element = document.links[4];
// console.log(element);

// ---------------------------
// get Attribute methods

// let element;
//element = document.getElementById("header-text").innerText;
// element=document.getElementsByClassName("menu")
// class sobat innerText use hot nahi

// console.log(element);

// ----------------------
// set Attribute

// header text la target kel and tyat already text hot tya var ti new value set kele

// --------------set time out madhe he je html content ye te  auto change hoil

// setTimeout(() => {
//   element = document.getElementById("header-text").innerText = "Empty Mind";
// }, 3000);

// inner HTML------------------
setTimeout(() => {
  element = document.getElementById("header-text").innerHTML =
    "<h2>Empty Mind</h2>";
}, 3000);

// ----------3s natar ha class set hot back-color cha
//let element;
setTimeout(() => {
  document.getElementById("header").setAttribute("class", "back-color");

  // here we change background color as well change header name
  document.getElementById("header-text").innerText = "Empty Mind";
}, 3000);

// -----------to remove the previously set Attribute
setTimeout(() => {
  document.getElementById("header").removeAttribute("class");

  document.getElementById("header").setAttribute("class", "back-col");
}, 5000);
// console.log(element);

//----------29-Sept-2025-----------------
// QuerySelector

// var element = document.querySelector(".list").innerHTML;
// console.log(element);

//---------------- QuerySelectorAll()->

// var element = document.querySelectorAll(".list");
// if we have multiple element then use forEach Loop here we visit single - single element
// element.forEach((ele) => {
//   console.log(ele.innerHTML);
// });

// --------------------------------
// DOM CSS Styling
// 1. using style

setTimeout(() => {
  // document.querySelector(".list").style.border = "3px solid red";
  // document.querySelector("#menu").style.backgroundColor = "cyan";
}, 5000);

// 2. using className  --> here we use bootstrap class as well as Custom class

setTimeout(() => {
  document.querySelector("#header-text").className = "p-3 back-col";
}, 7000);

// btn display after some time  ---fst hide btn --------
document.querySelector("#read").style.display = "none";
// display btn after some time
setTimeout(() => {
  document.querySelector("#read").style.display = "block";
}, 9000);

// 3. classList --> use to add and remove styling
setTimeout(() => {
  // document
  //   .querySelector(".list")
  //   .classList.add("change-border-color", "change-font-size");
}, 8000);

// remove styling after some time using remove method of classList
setTimeout(() => {
  document
    .querySelector(".list")
    .classList.remove("change-border-color", "change-font-size");
}, 15000);

// to calculate Number of the classes use in class list like custom or BT classes

document
  .querySelector(".list")
  .classList.add("change-border-color", "change-font-size");

let ul_length = document.querySelector(".list");
// here we display total number of classes present
console.log(ul_length.classList.length);
// here we see each class seperately also from here we apply styling on particular element using this
console.log(ul_length.classList[0]);
console.log(ul_length.classList[1]);
console.log(ul_length.classList[2]);

// contains method of classList to check given class present or not if present then write next logic
console.log(ul_length.classList.contains("change-font-size"));
