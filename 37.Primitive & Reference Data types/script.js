// Primitive data types

let name = "Tutor Joes"; // String
let age = 30; // Number
let isStudent = false; // Boolean
let x; // Undefined
let id = Symbol(); // Symbol

// Example

let x = 10;
let y = x;
x = 20;
console.log(x); // 20
console.log(y); // 10

//Reference data types

let user = { name: "Tutor Joes", age: 30 }; // Object
let numbers = [1, 2, 3, 4, 5]; // Array
let today = new Date(); // Object

//object eg :

let user1 = { name: "John Doe", age: 30 };
let user2 = user;
user1.age = 25;
console.log(user1.age); // 25
console.log(user2.age); // 25

//array eg :

let arr1 = [10, 20, 30];
let arr2 = arr1;
console.log("Array 1 :", arr1);
console.log("Array 2 :", arr2);
arr1.push(40);
console.log("After Pushing element to arr1 : ");
console.log("Array 1 :", arr1);
console.log("Array 2 :", arr2);

//Object Clone use Spread(...) and Object.assign() in JavaScript

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }
