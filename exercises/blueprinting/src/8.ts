class Person {
  name: string;
  age: number;

  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  describe(): string {
    return `This person is ${this.name} and is ${this.age} years old.`;
  }
}

let patty: Person = new Person("Mayo", 31);
console.log(patty.describe());
