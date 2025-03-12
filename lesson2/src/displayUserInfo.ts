interface UserInfo {
  name: string;
  email?: string;
  age?: number;
}

function displayUserInfo(userInfo: UserInfo): string {
  let email: string = userInfo.email ? userInfo.email : "N/A";
  let age: number | string = userInfo.age ? userInfo.age : "unknown";
  return `${userInfo.name} has an email of ${email} and an age of ${age}`;
}

let patrick: UserInfo = { name: 'Patrick', age: 31 };

console.log(displayUserInfo(patrick));
