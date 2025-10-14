//create an HTML Element Dynamically - pass element name which we want to create .
let paragraph = document.createElement("p");

// two ways to add  content- text in an HTML Element

// way-1
// paragraph.textContent="hey this is a paragrap using textContent";

// way-2
let text = document.createTextNode("hey this is using textNode");

// add data at the end of the paragraph
paragraph.appendChild(text);

console.log(paragraph);

// add paragraph in a div after 5s
setTimeout(() => {
  //--- here we pass the   div id
  let divP = document.getElementById("box");
  // -- add content or dynamically created element in a div at the end
  divP.appendChild(paragraph);
  //------------------append - add the content at the end in a div tya mul heading paragraph chya var ti jat nav t
  //divP.appendChild(heading);
  // no. of child of parent div
  let boxChild = document.getElementById("box").children[0];
  //
  divP.insertBefore(heading, boxChild);
  console.log(boxChild);
}, 5000);

// add CSS Styling class Dynamically
paragraph.setAttribute("class", "text");

//---------------------------------create another html elememt dynamically

let heading = document.createElement("h1");
heading.textContent = "paragraph";
console.log(heading);
