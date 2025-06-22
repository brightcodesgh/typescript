interface Person {
  name: string;
  age: number;
  height?: number;
  introduce: () => void;
}

const m: Person = {
  name: "Bright",
  age: 24,
  introduce: function () {
    console.log(`${this.name} is ${this.age} years old`);
  },
};

m.introduce();

function getPersons(p: Person): Person {
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

const employee1: Employee = {
  name: "Bright",
  age: 24,
  employeeId: 10,
};
