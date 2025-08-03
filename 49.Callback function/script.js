function myCallback() {
  console.log("I am a callback function");
}
function test(myCallback) {
  myCallback();
}
test(myCallback);

function highOrderFunction(myCallback) {
  myCallback();
}
highOrderFunction(myCallback);

//setTimeout (function,1000);

setTimeout(function () {
  console.log("Hello World");
}, 3000);

//setInterval

setInterval(function () {
  console.log("Hello World Lathuu");
}, 3000);

const numbers = [1, 2, 3];

numbers.forEach(function (number) {
  console.log(number);
});
