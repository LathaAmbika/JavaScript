//Block scope

if (true) {
  let blockScopeVariable = "I am a variable with block scope";
  console.log(blockScopeVariable); // Output: "I am a variable with block scope"
}
//console.log(blockScopeVariable); // ReferenceError: blockScopeVariable is not defined

//Function scope

function myFunction() {
  var functionScopeVariable = "I am a variable with function scope";
  console.log(functionScopeVariable); // Output: "I am a variable with function scope"
}
//console.log(functionScopeVariable);
myFunction();

function myFunctions() {
  if (true) {
    let fullname = "nithran";
    console.log(fullname);
  }
  //console.log(fullname);
}
myFunctions();

function myFunction() {
  if (true) {
    var fullname = "latha";
    console.log(fullname);
  }
  console.log(fullname);
}
myFunction();
