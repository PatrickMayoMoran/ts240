"use strict";
function describeAnimal(animal) {
    switch (animal.type) {
        case "dog":
            return `${animal.name} is a ${animal.age} years old dog`;
        case "bird":
            return `${animal.name} is a bird with a ${animal.wingspan}`;
    }
}
