type Device = {
  manufacturer: string;
  model: string;
  year: number;
}

let computer: Device = {
  manufacturer: "Apple",
  model: "Mac Air",
  year: 2023,
}

let smartphone = {
  manufacturer: "Apple",
  model: "iPhone",
  year: 2020,
  color: "blue"
}

let anotherSmartPhone: Device = smartphone // allowed, because smartphone structurally matches

// Best practice would be something like - explicitly declare type on variable
// let moreSmartPhone: Device = {
//   manufacturer: "Apple",
//   model: "iPhone",
//   year: 2020,
//   color: "blue"
// }
