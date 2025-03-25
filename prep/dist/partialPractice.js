"use strict";
const partialUser = {
    name: "John",
};
if (partialUser.age !== undefined) {
    // safe to use partialUser.age
    partialUser.age += 1;
}
