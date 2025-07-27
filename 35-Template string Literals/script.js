let full_name = "Latha Ambika";
let age = "23";
let city = "Madurai";
let role = "Web Developer";

let output = "";
output =
  "<table border='1'><tr><th>Name</th><td>" +
  full_name +
  "</td></tr><tr><th>Age</th><td>" +
  age +
  "</td></tr><tr><th>City</th><td>" +
  city +
  "</td></tr><tr><th>Role</th><td>" +
  role +
  "</td></tr></table>";

//es5
output +=
  "<hr><table border='1'>" +
  "<tr><th>Name</th><td>" +
  full_name +
  "</td></tr>" +
  "<tr><th>Age</th><td>" +
  age +
  "</td></tr>" +
  "<tr><th>City</th><td>" +
  city +
  "</td></tr>" +
  "<tr><th>Role</th><td>" +
  role +
  "</td></tr>" +
  "</table>";

//es6 this code is use and important
output += `<hr>
<table border='1'>
  <tr><th>Name</th><td>${full_name}</td></tr>
  <tr><th>Age</th><td>${age >= 18 ? "Good" : "Bad"}</td></tr>
  <tr><th>City</th><td>${city}</td></tr>
  <tr><th>Role</th><td>${role}</td></tr>
</table>`;

document.body.innerHTML = output;
