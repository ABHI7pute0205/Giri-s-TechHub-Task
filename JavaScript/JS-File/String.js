// check fields empty or not
function checkEmptyFields() {
  if (document.getElementById("input_text").value === "") {
    document.getElementById("input_text").focus();
    swal("Please Enter Valid input Fields");
  }
}

// String Operation Function
function stringOperation(type) {
  // input text madhe je pan text yeil te eka variable madhe ghetl i.e input_text nava chya .value ne ti value copy hoil
  let input_text = document.getElementById("input_text").value;
  // output box madhe display honar
  let output_text = "";

  switch (type) {
    case "upper":
      checkEmptyFields();
      output_text = input_text.toUpperCase();
      break;

    case "lower":
      checkEmptyFields();
      output_text = input_text.toLowerCase();
      break;

    case "startWith":
      checkEmptyFields();
      start_with = prompt("Enter text to check starts with ");
      output_text = input_text.startsWith(start_with);
      break;

    case "endsWith":
      checkEmptyFields();
      ends_with = prompt("Enter text to check Ends with");
      output_text = input_text.endsWith(ends_with);
      break;

    case "length":
      checkEmptyFields();
      output_text = "Total Length = " + input_text.length;
      break;

    case "reverse":
      checkEmptyFields();
      // fst string ka split kel meas single single character seperate  kel and then reverse kel each string char and then again join means again convert it into string after reverse
      output_text = input_text.split("").reverse().join("");
      break;

    case "trim":
      checkEmptyFields();
      output_text = input_text.trim();
      break;

    case "trimStart":
      checkEmptyFields();
      output_text = input_text.trimStart();
      break;

    case "trimEnd":
      checkEmptyFields();
      output_text = input_text.trimEnd();
      break;

    case "replace":
      checkEmptyFields();
      // here we take promt box and get old new text and put it in a .replace
      old_text = prompt("Enter Old Text");
      new_text = prompt("Enter New Text");
      output_text = input_text.replace(old_text, new_text);
      break;
  }

  // output_text madhe je pan kahi o/p yeil te .value ne res madhe display hoil
  document.getElementById("output_text").value = output_text;

  //   html tag madhe jo audion add kela to eith call  kela tya chya id ne
  let audio = document.getElementById("audio");
  audio.currentTime = 0;
  // bnt var ti click kelya var ti ek da audio play hoil
  audio.play();
}

// Clear Btn  Ekhad function direct variabl la assign kel tar te Function Function Expression
const clearFields = () => {
  document.getElementById("input_text").value = "";
  document.getElementById("output_text").value = "";

  document.getElementById("input_text").focus();

  // this code add another sound effect on clear btn
  let audio = document.getElementById("audio1");
  audio.currentTime = 0;
  audio.play();
};
