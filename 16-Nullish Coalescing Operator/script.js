//Nullish coalescing operator (??)

const a = null ?? "No Value";
console.log(a);

const b = null ?? 45;
console.log(b);

//??=
const user = { name: "joes" };
console.log(user);
console.log(user.name);

user.city ??= "Salem";
console.log(user.city);
console.log(user);
