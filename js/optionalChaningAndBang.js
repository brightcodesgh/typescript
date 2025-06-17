var _a;
//optional chaining
var Arr = [
    { name: "Anni", age: 24 },
    { name: "Adam", age: 25 },
    { name: "Bam", age: 26 },
    { name: "Olaf", age: 27 },
    { name: "Vacce", age: 28 },
];
var result = (_a = Arr.pop()) === null || _a === void 0 ? void 0 : _a.name;
console.log(Arr);
console.log(result);
//bang
var Arr2 = [
    { name: "Anni", age: 24 },
    { name: "Adam", age: 25 },
    { name: "Bam", age: 26 },
    { name: "Olaf", age: 27 },
    { name: "Vacce", age: 28 },
];
var result2 = Arr.pop().name;
console.log(Arr2);
console.log(result2);
