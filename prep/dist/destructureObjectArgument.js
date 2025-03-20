"use strict";
function randomFunction({ length }) {
    return length;
}
console.log(randomFunction([1, 2, 3, 4, 5]));
function details({ profession, pay }) {
    return `My friend is a ${profession} and makes ${pay}`;
}
let joey = {
    name: "Joe",
    profession: "Medic",
    pay: 54000,
};
console.log(details(joey));
console.log(details({ profession: "Doctor", pay: 300000 }));
