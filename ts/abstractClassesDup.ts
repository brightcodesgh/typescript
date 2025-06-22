abstract class Cars {
  abstract carBrand(brand: string): void;

  describeCar(model: number, brand: string) {
    console.log(`${model} ${brand}`);
  }
}
class newCar extends Car {
  carBrand(brand: string) {
    console.log(`my new car is ${brand}`);
  }
}

const myCar1 = new firstCar();
myCar1.describeCar(2023, "Toyota");
myCar1.carBrand("Honda civic");
