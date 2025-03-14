interface Person {
  name: string;
  age: number;
}

const person: Person = { name: "Jane", age: 45 };
const personName: Pick<Person, "name"> = person;
console.log(personName.name);
// console.log(personName.age); type error - age not part of person name type
console.log((personName as any).age) // type assertion to tell TypeScript we know more
