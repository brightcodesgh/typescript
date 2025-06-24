var Animal = /** @class */ (function () {
    function Animal(animalName, animalSound) {
        this.animalName = animalName;
        this.animalSound = animalSound;
    }
    Animal.prototype.speak = function () {
        console.log("i am a ".concat(this.animalName, " and i say ").concat(this.animalSound));
    };
    Animal.prototype.test = function () {
        return 1;
    };
    return Animal;
}());
var NewAnimal = /** @class */ (function () {
    function NewAnimal() {
    }
    NewAnimal.prototype.speak = function () {
        console.log("i am a cat and i say meow");
    };
    return NewAnimal;
}());
var dog = new Animal("Dog", "Woof");
var cat = new NewAnimal();
var animal = [dog, cat];
animal[0].speak();
animal[1].speak();
