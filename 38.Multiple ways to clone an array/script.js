/* Method-1

Using the Spread operator */

//Example

let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];
console.log(clonedArray);

/* Method-2

Using the slice() method */

//Example

let originalArray = [1, 2, 3];
let clonedArray = originalArray.slice();
console.log(clonedArray);

/* Method-3

Using the concat() method */

//Example

let originalArray = [1, 2, 3];
let clonedArray = [].concat(originalArray);
console.log(clonedArray);

/* Method-4

Using the Array.from() Method */

//Example

let originalArray = [1, 2, 3];
let clonedArray = Array.from(originalArray);
console.log(clonedArray);

/* Method-5

Using the JSON.parse() and JSON.stringify() */

//Example

let originalArray = [1, 2, 3];
let clonedArray = JSON.parse(JSON.stringify(originalArray));
console.log(clonedArray);
