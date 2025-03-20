"use strict";
let maroon = {
    serialNumber: 70014,
    size: 61,
};
let buddyBoy = {
    name: "Buddy",
    address: { street: "Robinhood", houseNumber: 74 },
};
// buddyBoy.address = {street: "Jackdaw", houseNumber: 44}; // error - readonly
buddyBoy.address.houseNumber = 32; // allowed! 
let otherGuy = {
    name: "other guy",
    address: { street: "Friar Tuck", houseNumber: 55 },
};
// otherGuy.address.houseNumber = 32; // not allowed!
