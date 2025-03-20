interface Bicycle {
  readonly serialNumber: number;
  size: number;
}

let maroon: Bicycle = {
  serialNumber: 70014,
  size: 61,
}

// maroon.serialNumber = 9561; // Error - can't assign to serialNumber because it is readonly

// readonly objects are mutable - you just can't change the object

interface FriendWithAddress {
  readonly address: {street: string, houseNumber: number};
  name: string;
}

let buddyBoy: FriendWithAddress = {
  name: "Buddy",
  address: {street: "Robinhood", houseNumber: 74},
}

// buddyBoy.address = {street: "Jackdaw", houseNumber: 44}; // error - readonly
buddyBoy.address.houseNumber = 32; // allowed! 

// solution - freeze object, or make every property readonly
interface FriendWithHome {
  readonly address: { readonly street: string, readonly houseNumber: number };
  name: string;
}

let otherGuy: FriendWithHome = {
  name: "other guy",
  address: { street: "Friar Tuck", houseNumber: 55 },
}

// otherGuy.address.houseNumber = 32; // not allowed!

// Alternatively, freeze the assigned object
let thatGuy: FriendWithAddress = {
  name: "that Guy",
  address: Object.freeze({street: "Juniper Lane", houseNumber: 21}),
}

// No TypeScript error!
// thatGuy.address.houseNumber = 17;
// Yes runtime error - cannot assign to readonly property from using freeze
