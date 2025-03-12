"use strict";
function describeAnimal(animal) {
    switch (animal.kind) {
        case "elephant":
            return `An elephant weighs ${animal.weight} kilograms.`;
        case "tiger":
            return `A tiger can run ${animal.speed} kilometers per hour.`;
        case "peacock":
            return `A peacock's feathers are ${animal.featherLength} meters long.`;
        default:
            const _exhaustiveCheck = animal;
            throw new Error(`Invalid animal ${JSON.stringify(_exhaustiveCheck)}`);
    }
}
