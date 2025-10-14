// document.getElementById('para').innerHTML="lorem hey text change"

// we write a one one function in which we can write a code which is change after we click btn
function btnClick() {
  document.getElementById("para").innerText =
    "hey i can change text after button click...";
  // here we can Add some Mouse click sound effects | btnClick chya function madhe ch  ka tar tya btn var ti some action perform zalya var ti sound aala pahije tya mul
  let audio = document.getElementById("sound");
  audio.currentTime = 0;
  audio.play();
}

// we can add event using JS
document.getElementById("btn").addEventListener("click", btnClick);

// -----------------------change page background color after btn click -----
// for this we write a one CSS class property and using setAttribute we can set it
function changeBackColor() {
  document.getElementById("cnt").setAttribute("class", "pageBackColorChange");
  // add-sound effect
  let audio = document.getElementById("sound");
  audio.currentTime = 0;
  audio.play();
}
document
  .getElementById("changeColor")
  .addEventListener("click", changeBackColor);
