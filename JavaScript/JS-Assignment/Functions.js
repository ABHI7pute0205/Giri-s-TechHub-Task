// Named Function In JS -with arguments

function showMessage() {
  swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    button: "Aww yiss!",
  });
}

// Event on Html Elememt through out html file here showMessage Function la Parenthesis use nahi kara y che but HTML madhe Event function call kara y ch aslya var paren thesis use kara y che ()
// document.getElementById("btnSubmit").addEventListener("mouseover", showMessage);

// Add event on input field
// document.getElementById("txtname").addEventListener(input, showMessage);

// Arrow Function in JS
const loadCursor = () => {
  document.getElementById("txtname").focus();
};

// document.getElementById("body").addEventListener("load", loadCursor);

// hey function ek da ch call hoil 2 second natar part call nahi honar s
setTimeout(function () {
  console.log("Just Check Set Time Out ...");
}, 2000);


// hey function every 2 second la call hoil
// setInterval(function () {
//   console.log("Just Check Set Interval...");
// }, 2000);
