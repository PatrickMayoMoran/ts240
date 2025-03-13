interface Animal {
  name: string;
  makeSound(): string; 
}

interface Dog extends Animal {
  fetch(): string;
}

const myDog: Dog = {
  name: "Rex",
  fetch: function() { return `${this.name} fetches a stick!` },
  makeSound: function() { return `Generic Animal Sound` },
};

console.log(myDog.fetch());
