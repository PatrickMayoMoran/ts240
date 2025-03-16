"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return `This person is ${this.name} and is ${this.age} years old.`;
    }
}
let patty = new Person("Mayo", 31);
console.log(patty.describe());
