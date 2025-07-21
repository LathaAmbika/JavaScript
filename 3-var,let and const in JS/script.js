/*
1997-var
2015 E6 
let
const
*/

/*var a = 25;
var b = 35;

console.log(a + b); */

//1.Scope

/*if (true) {
  //var msg = "welcome to javascript";
  //let msg = "welcome to javascript";
  const msg = "welcome to javascript";
  console.log(msg);
}
console.log(msg); */
//----------------------------------------------------

//2.Variable Redeclaration

/*var a = 25;
console.log(a);
var a = 45;
console.log(a);

let a = 25;
console.log(a);
let a = 35;

const a = 35;
console.log(a);
const a = 25;*/
//----------------------------------------------------

//3.Value assignment

/*
var a=25;
console.log(a);
a=45;
console.log(a);
*/
/*
let a=25
console.log(a);
a=45;
console.log(a);
 
const a=25;
console.log(a);
a=45;  //Constant Error
console.log(a);
*/

const student = { name: "latha", age: 22 };
console.table(student);
console.log(student.name);
student.name = "karthi";
console.table(student);
