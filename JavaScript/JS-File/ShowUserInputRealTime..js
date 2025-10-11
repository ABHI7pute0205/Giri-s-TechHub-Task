// n1 mahde user je value enter kariel ti yeil
var n1 = document.getElementById("name");
// and n2 madhe preview from madhe je display kara y ch ye tith jaiel
var n2 = document.getElementById("name1");

// user konty box madhe text enter kar to to box
var e1 = document.getElementById("email");
// and again te ch text kon tya box madhe display zal pahije to box
var e2 = document.getElementById("email1");

var c1 = document.getElementById("city");
var c2 = document.getElementById("city1");

n1.addEventListener("input", () => {
  // here textContent / innerText pan use karu shakto means — “Element madhla text get kiva set karaycha (update karaycha) asel tar vaparto.”
  n2.textContent = n1.value;
});
// .value means user ne tya input box madhe je kahi enter kel te dusry box madhe show kar

e1.addEventListener("input", () => {
  e2.innerText = e1.value;
});

c1.addEventListener("input", () => {
  c2.textContent = c1.value;
});
