"use strict";
let computer = {
    manufacturer: "Apple",
    model: "Mac Air",
    year: 2023,
};
let smartphone = {
    manufacturer: "Apple",
    model: "iPhone",
    year: 2020,
    color: "blue"
};
let anotherSmartPhone = smartphone; // allowed, because smartphone structurally matches
// Best practice would be something like - explicitly declare type on variable
// let moreSmartPhone: Device = {
//   manufacturer: "Apple",
//   model: "iPhone",
//   year: 2020,
//   color: "blue"
// }
