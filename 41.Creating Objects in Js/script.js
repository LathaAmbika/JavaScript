//1. Using object literals :

const me = { name: "Latha", age: 23, gender: "female" };
console.log(me);

//2.Using the object constructor :

/*const person = new Object();
person.name = "nitran";
person.age = 3;
person.gender = "male";
console.log(person);*/

//3.Using the Object.create() method :

const hubbyProto = {
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
const hubby = Object.create(hubbyProto);
hubby.name = "karthikeyan";
hubby.age = 26;
hubby.job = "Advertiser";
console.log(hubby);

//4. Using class :

class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}
const person = new Person("Tiya", 40, "Developer");
console.log(person);
