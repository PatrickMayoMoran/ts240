"use strict";
function getAnimalProp(animal, key) {
    return animal[key]; // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Animal'.
    // No index signature with a parameter of type 'string' was found on type 'Animal'
}
const tiger = {
    name: "Felix",
    species: "Panthera tigris",
    age: 7,
    isEndangered: true,
};
getAnimalProp(tiger, "species"); // Returns 'Panthera tigris'
