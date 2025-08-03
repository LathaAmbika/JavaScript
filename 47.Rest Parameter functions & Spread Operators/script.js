// Rest Parameter

function myFunction(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
}
myFunction(10, 20, 30, 40, 50);

//Spread Operator

let myArray = [1, 2, 3];
let newArray = [...myArray, 4, 5];
console.log(newArray);
