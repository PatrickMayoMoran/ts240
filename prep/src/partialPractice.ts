type User = {
  name: string;
  age: number;
  email: string;
};

const partialUser: Partial<User> = {
  name: "John",
};

if (partialUser.age !== undefined) {
  // safe to use partialUser.age
  partialUser.age += 1;
}
