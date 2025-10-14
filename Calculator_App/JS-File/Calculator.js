// he sagl id var ti work hot html chya   | .value checks the current i/p field is empty or not
function clearFields() {
  document.getElementById("num1").value = "";
  // document.getElementById("num1").style.borderColor = "none";

  document.getElementById("num2").value = "";
  document.getElementById("operation").value = "select";
  document.getElementById("res").value = "";
  // used to blink the cursor on fst i/p field after page load OR Reload
  document.getElementById("num1").focus();
}

// add event on clear Button  | using JS here we do not need to pass parenthesis to a function
document.getElementById("btn_clear").addEventListener("click", clearFields);

// load the cursor when page will load in first textBox [focus -> page load kelya var ti OR do Task Var ti click kel lya var to cursor fstTxt box madhe jato]
function loadCursor() {
  // num1 is the id of the fst i/p field
  document.getElementById("num1").focus();
}

// perform validations
function checkEmptyField() {
  // here we check jar num1 id asele field jar empty asle tar
  if (document.getElementById("num1").value === "") {
    // .focus means blink the cursor on that field
    document.getElementById("num1").focus();
    Swal.fire({
      title: "Please enter an First number ",
      icon: "info",
      draggable: true,
    });
  } else if (document.getElementById("num2").value === "") {
    document.getElementById("num1").focus();
    Swal.fire({
      title: "Please enter an Second number  ",
      icon: "info",
      draggable: true,
    });
  } else if (document.getElementById("operation").value === "select") {
    Swal.fire({
      title: "Please Select one option",
      icon: "info",
      draggable: true,
    });
  }
}

function do_task() {
  checkEmptyField();
  // i/p box madhe jya value taku tya eith const declared kel leya variable madhe yeil |directly points the values which we are enter in a text field
  const txtfirst = document.getElementById("num1").value;
  const txtsecond = document.getElementById("num2").value;
  const selectOp = document.getElementById("operation").value;

  switch (selectOp) {
    case "+":
      var txtresult = parseInt(txtfirst) + parseInt(txtsecond);
      document.getElementById("res").value = txtresult.toString();
      // it pointes to the result text field convert result in toString
      break;

    case "-":
      var txtresult = parseInt(txtfirst) - parseInt(txtsecond);
      document.getElementById("res").value = txtresult.toString();
      break;

    case "*":
      var txtresult = parseInt(txtfirst) * parseInt(txtsecond);
      document.getElementById("res").value = txtresult.toString();
      break;

    case "/":
      try {
        var txtresult = parseInt(txtfirst) / parseInt(txtsecond);
        document.getElementById("res").value = txtresult.toString();
      } catch (error) {
        console.error(error);
      }
      break;
    default:
      alert("Please enter Correct input");
  }
}

// the following code perform the operations | when we click on dotask this fun will call and perform operation
document.getElementById("btn_doTask").addEventListener("click", do_task);

// Input Event use here to change the border of the I/P field
document.getElementById("num1").addEventListener("input", () => {
  if (document.getElementById("num1").value === "") {
    document.getElementById("num1").style.borderColor = "red";
    document.getElementById("num1").style.border = "2px solod red";
  } else {
    document.getElementById("num1").style.borderColor = "black";
  }
});
// same for second i/p field

document.getElementById("num2").addEventListener("input", () => {
  if (document.getElementById("num2").value === "") {
    document.getElementById("num2").style.borderColor = "red";
    document.getElementById("num2").style.border = "2px solod red";
  } else {
    document.getElementById("num2").style.borderColor = "black";
  }
});

document.getElementById("operation").addEventListener("change", () => {
  if (document.getElementById("operation").value === "select") {
    document.getElementById("operation").style.outline = "none";
    document.getElementById("operation").style.border = "3px solid green";
  } else {
    document.getElementById("operation").style.outline = "none";
    document.getElementById("operation").style.border = "3px solid black";
  }
});

// Key Event 13-> ASCII code OF Enter
document.onkeydown = function (e) {
  // Enter key cha ASCII 13 ye mang Enter Key Press kelya var result bhetn
  if (e.keyCode == 13) {
    do_task();
  }
  if (e.ctrlKey && e.keyCode === "99") {
    clearFields();
  }
};
