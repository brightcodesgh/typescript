abstract class Car {
  abstract carBrand(brand: string): void;

  describeCar(model: number, brand: string) {
    console.log(`${model} ${brand}`);
  }
}
class firstCar extends Car {
  carBrand(brand: string) {
    console.log(`my new car is ${brand}`);
  }
}

const myCar = new firstCar();
myCar.describeCar(2023, "Toyota");
myCar.carBrand("Honda civic");
