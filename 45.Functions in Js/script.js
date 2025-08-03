// function Declaration

function add(a, b) {
  return a + b;
}
let result = add(5, 3);
console.log(result);

//function with return statement

function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

//function with Arbitrary arguments

function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6));

//using spread opreator(...)

function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));

//function as expression

const addition = function (a, b) {
  return a + b;
};
console.log(addition(2, 4));

//Arrow Function

/*An arrow function, also known as a "fat arrow" function, is a shorthand syntax for defining a function in JavaScript. It was introduced in ECMAScript 6 (ES6) and is now a widely used feature in JavaScript development.


The basic syntax for an arrow function is as follows:

const functionName = (parameters) =>{ function body }; */

//Example

const sub = (a, b) => {
  return a - b;
};
console.log(sub(10, 5));

const multiple = (a, b) => a * b;
console.log(multiple(2, 4));

//(1)  Using arrow functions with map():
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//(2)  Using arrow functions with filter():
let words = ["apple", "banana", "orange", "grape"];
let filteredWords = words.filter((word) => word.length > 5);
console.log(filteredWords); // ['banana', 'orange']

//(3) Using arrow functions with reduce():
let nums = [1, 2, 3, 4, 5];
let total = nums.reduce((sum, num) => sum + num, 0);
console.log(total); // 15

//(4)  Using arrow functions to create a closure:
let createCounter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};
let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
