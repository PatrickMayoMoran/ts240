type Bird = {
  type: "bird";
  name: string;
  wingspan: number;
}

type Dog = {
  type: "dog";
  name: string;
  age: number;
}
type Animal = Bird | Dog

function describeAnimal(animal: Animal): string {
  switch (animal.type) {
    case "dog":
      return `${animal.name} is a ${animal.age} years old dog`;
    case "bird":
      return `${animal.name} is a bird with a ${animal.wingspan}`;
  }
}
