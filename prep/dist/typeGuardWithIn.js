"use strict";
function describePet(pet) {
    console.log(`My pet's name is ${pet.name} and is ${pet.age} years old!`);
    if ("whiskerLength" in pet) {
        console.log(`My cat's whiskers are ${pet.whiskerLength} cm long!`);
    }
    else {
        console.log(`No doggy whiskers here`);
    }
}
let clover = { name: "Clover", age: 14 };
let ollipop = { name: "Ollipop", age: 3, whiskerLength: 6 };
describePet(clover);
describePet(ollipop);
