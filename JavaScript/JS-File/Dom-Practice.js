//let element;

// using this we can change the HTML Content Dynamically


setTimeout(() => {
  document.getElementById("header").innerText = "DOM Implementaion";
}, 3000);

setTimeout(() => {
  document.getElementById("header").setAttribute("class", "back-color");
}, 5000);

// here jo ki custom class write karun setAttribute ne je value set kele ti after some time i.e after 6 sec te attribute remove hoils
setTimeout(() => {
  document.getElementById("header").removeAttribute("class");
}, 7000);


