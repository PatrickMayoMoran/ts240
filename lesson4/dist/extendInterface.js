"use strict";
const myDog = {
    name: "Rex",
    fetch: function () { return `${this.name} fetches a stick!`; },
    makeSound: function () { return `Generic Animal Sound`; },
};
console.log(myDog.fetch());
