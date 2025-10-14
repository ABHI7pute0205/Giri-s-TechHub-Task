// if we write a code like this without using stringify then data store in object from
function saveUser() {
  // Json Data Store  in Key-Value Pair it called Object  and here we use Array Of Object Concept to store multiple objects
  const emp = [
    {
      id: 1,
      name: "JavaScript",
      age: 25,
    },
    {
      id: 2,
      name: "Python",
      age: 35,
    },
    {
      id: 3,
      name: "Java",
      age: 30,
    },
  ];
  //   here we pass object and  convert it in a string
  localStorage.setItem("users", JSON.stringify(emp));

  //   to get the data we pass key of the data
  const storedEmp = localStorage.getItem("users");
  console.log(storedEmp);

//   let tableFormat = localStorage.getItem("users", JSON.parse(emp));

//   console.log(tableFormat);
}
// here call function
saveUser();
