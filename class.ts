class userInfo {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}
const information = new userInfo("Bright");
information.greet();

//adding access modifiers
class newUserInfo {
  private lastname: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.lastname = name;
    this.age = age;
  }

  greeting() {
    console.log(`my name is ${this.lastname}`);
  }
}
class newInfo extends newUserInfo {
  myAge() {
    console.log(`my age is ${this.age}`);
  }
}
const info2 = new newUserInfo("Darkwa", 24);
const userAge = new newInfo("Bright", 24);
info2.greeting();
userAge.myAge();
