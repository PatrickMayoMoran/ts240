type Cat = {
  name: string;
  age: number;
  whiskerLength: number;
}

type Dog = {
  name: string;
  age: number;
}

type Pet = Cat | Dog;

function describePet(pet: Pet): void {
  console.log(`My pet's name is ${pet.name} and is ${pet.age} years old!`);
  if ("whiskerLength" in pet) {
    console.log(`My cat's whiskers are ${pet.whiskerLength} cm long!`);
  } else {
    console.log(`No doggy whiskers here`);
  }
}

let clover: Dog = { name: "Clover", age: 14 };
let ollipop: Cat = { name: "Ollipop", age: 3, whiskerLength: 6 };
describePet(clover);
describePet(ollipop);
