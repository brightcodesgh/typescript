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
var userInfo = /** @class */ (function () {
    function userInfo(name) {
        this.name = name;
    }
    userInfo.prototype.greet = function () {
        console.log("Hello ".concat(this.name));
    };
    return userInfo;
}());
var information = new userInfo("Bright");
information.greet();
//adding access modifiers
var newUserInfo = /** @class */ (function () {
    function newUserInfo(name, age) {
        this.lastname = name;
        this.age = age;
    }
    newUserInfo.prototype.greeting = function () {
        console.log("my name is ".concat(this.lastname));
    };
    return newUserInfo;
}());
var newInfo = /** @class */ (function (_super) {
    __extends(newInfo, _super);
    function newInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    newInfo.prototype.myAge = function () {
        console.log("my age is ".concat(this.age));
    };
    return newInfo;
}(newUserInfo));
var info2 = new newUserInfo("Darkwa", 24);
var userAge = new newInfo("Bright", 24);
info2.greeting();
userAge.myAge();
