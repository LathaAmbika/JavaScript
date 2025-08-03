/*const person = { name: "Latha", age: 23 };

function sayHello({ name }) {
  console.log(`Hello, ${name}!`);
}

sayHello(person); 

const person = { name: "Latha Ambika" };

function sayHello({ name, age = 23 }) {
  console.log(`Hello, ${name}! You are ${age} years old`);
}
sayHello(person); */

const numbers = [1, 2, 3];
function add([a, b, c]) {
  return a + b + c;
}
console.log(add(numbers));

const person = { name: "latha", age: 23, city: "Madurai", country: "India" };

function sayHello({ name, age, ...rest }) {
  console.log(`Hello, ${name}! You are ${age} years old`);
  console.log(rest);
}

sayHello(person);
