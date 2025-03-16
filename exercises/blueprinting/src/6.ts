interface Account {
  username: string;
  email: string;
  readonly accountCreationDate: string;
}

let myBank: Account = {
  username: "MyMoney",
  email: "SendMeStuff@yahoo.com",
  accountCreationDate: "03-15-2025",
}

myBank.username = "YourMoney";
myBank.email = "SendYouStuff@yahoo.com";
// myBank.accountCreationDate = "today"; cannot assign because readonly
