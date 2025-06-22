var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.describeCar = function (model, brand) {
        console.log("".concat(model, " ").concat(brand));
    };
    return Car;
}());
var firstCar = /** @class */ (function (_super) {
    __extends(firstCar, _super);
    function firstCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    firstCar.prototype.carBrand = function (brand) {
        console.log("my new car is ".concat(brand));
    };
    return firstCar;
}(Car));
var myCar = new firstCar();
myCar.describeCar(2023, "Toyota");
myCar.carBrand("Honda civic");
