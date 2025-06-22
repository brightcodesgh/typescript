class userdetails {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}
const detail = new userInfo("Bright");
information.greet();

//adding access modifiers
class newdetail {
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
class detai1l extends newUserInfo {
  myAge() {
    console.log(`my age is ${this.age}`);
  }
}
const info1 = new newUserInfo("Darkwa", 24);
const userAge1 = new newInfo("Bright", 24);
info1.greeting();
userAge1.myAge();
