//1.Using the for-in-loop

/* const user = {
  name: "Latha",
  age: 23,
  job: "programmer",
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
} 

//2.Using Object.keys()
const user = {
  name: "Latha",
  age: 23,
  job: "programmer",
};

const keys = Object.keys(user);
keys.forEach((key) => {
  console.log(`${key}: ${user[key]}`);
}); 

//3.Using Object.values()

const user = {
  name: "Latha",
  age: 23,
  job: "programmer",
};

const values = Object.values(user);
values.forEach((value) => {
  console.log(value);
}); */

//4.Using Object.entries

const user = {
  name: "Latha",
  age: 23,
  job: "programmer",
};

const entries = Object.entries(user);
entries.forEach((entry) => {
  console.log(`${entry[0]} : ${entry[1]}`);
});

/* const entries = Object.entries(person);
for (let i = 0; i<entries.length; i++) {
    console.log(entries[i][0] + ": " + entries[i][1])
}; */
