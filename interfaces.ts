interface Person {
  name: string;
  age: number;
  height?: number;
  introduce: () => void;
}

const me: Person = {
  name: "Bright",
  age: 24,
  introduce: function () {
    console.log(`${this.name} is ${this.age} years old`);
  },
};

me.introduce();

function getPerson(p: Person): Person {
  return {
    name: "Bright",
    age: 24,
    introduce: function () {
      console.log(`${this.name} is ${this.age} years old`);
    },
  };
}

//inheriting other interface
interface newPerson {
  name: string;
  age: number;
  height?: number;
  salary?: number;
}
interface Employee extends newPerson {
  employeeId: number;
}

const employee: Employee = {
  name: "Bright",
  age: 24,
  employeeId: 10,
};
