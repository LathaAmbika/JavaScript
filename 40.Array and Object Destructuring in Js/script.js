/*let numbers = [10, 20, 30, 40, 50];
let [a, b, c] = numbers;
console.log(a);
console.log(b);
console.log(c); */

/* let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let [[a, b], [c, d], [e, f]] = nestedArray;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f); */

/* let numbers = [10, 20, 30, 40, 50];
let [a, b, ...c] = numbers;
console.log(a);
console.log(b);
console.log(c); */

let person = { name: "Tiya", age: 5, gender: "unknown" };
let { name, age, gender } = person;
console.log(name);
console.log(age);
console.log(gender);

/* let address = {
  street: "Cherry Road",
  city: "Salem",
  state: "Tamil Nadu",
  zip: "636007",
};
let employee = { name: "Tiya", age: 12, gender: "female", address };
let {
  name,
  age,
  gender,
  address: { street, city, state, zip },
} = employee;
console.log(name);
console.log(age);
console.log(gender);
console.log(street);
console.log(city);
console.log(state);
console.log(zip); */
