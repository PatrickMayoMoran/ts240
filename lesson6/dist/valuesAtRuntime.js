"use strict";
const person = { name: "Jane", age: 45 };
const personName = person;
console.log(personName.name);
// console.log(personName.age); type error - age not part of person name type
console.log(personName.age); // type assertion to tell TypeScript we know more
