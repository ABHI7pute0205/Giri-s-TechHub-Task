// toggle cha use on off kar nya sathi hot
// btn var ti event add kela kon ta click cha and arrow function write kel tyat body var ti classlist che toggle method use kele tyat custom write kele la class i.e user defined class write kele and to class apply kar nya sathi tya button la sapdl using it's id and addEvent on this button which event click and write a arrow function why becase every time tya btn var ti click kelya var ti te function repetaedly call zal pahije
document.getElementById("btn").addEventListener("click", () => {
  document.body.classList.toggle("toggle-theme");
});
