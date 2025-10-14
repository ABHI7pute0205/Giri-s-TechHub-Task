// we want to do it using toggling means callback function and also called on / off or vice versa

// and this addEventListener("eventType", ()=> this is  a callback function i.e toggling we call this function repetaely )

document.getElementById("btn").addEventListener("click", () => {
  // input type text means => visible to us
  // input type password means => hide for us
  //so just want to change input type password to text or text to password

  let pass = document.getElementById("password");
  //   here we use ternary operator [pass.type jar password asel tar text kar else nahi tar password ch rahu de ]
  pass.type = pass.type === "password" ? "text" : "password";
});
