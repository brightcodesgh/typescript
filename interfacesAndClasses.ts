interface Animals {
  speak(): void;
}

class Animal implements Animals {
  private animalName: string;
  private animalSound: string;

  constructor(animalName: string, animalSound: string) {
    this.animalName = animalName;
    this.animalSound = animalSound;
  }

  speak() {
    console.log(`i am a ${this.animalName} and i say ${this.animalSound}`);
  }

  test() {
    return 1;
  }
}

class NewAnimal implements Animals {
  speak() {
    console.log(`i am a cat and i say meow`);
  }
}

const dog = new Animal("Dog", "Woof");
const cat = new NewAnimal();
const animal: Animals[] = [dog, cat];
animal[0].speak();
animal[1].speak();
