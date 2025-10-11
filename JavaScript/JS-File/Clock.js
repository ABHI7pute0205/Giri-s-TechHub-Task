// so this is just a boolean variable to apply the condition
let ColorChange = true;

setInterval(() => {
  // to get a Date
  //   document.getElementById("clk").innerText = new Date().toLocaleDateString();
  // to get a Time   | eka html tag la id dela and to eith get kela
  document.getElementById("clk").innerText = new Date().toLocaleTimeString();
  // document.getElementById("clk").setAttribute("id", "color-Change");

  //toggle color every second
  if (ColorChange) {
    clk.style.color = "crimson"; // here we pass the color name as per requirement
  } else {
    clk.style.color = "black";
  }
  //   flip the color state
  ColorChange = !ColorChange;
}, 1000);

// 1sec --> 1000 ms
