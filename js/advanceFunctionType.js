//rest parameter
function usingRest() {
    var manyNumbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        manyNumbers[_i] = arguments[_i];
    }
    var printOut = [];
    for (var _a = 0, manyNumbers_1 = manyNumbers; _a < manyNumbers_1.length; _a++) {
        var newNums = manyNumbers_1[_a];
        printOut.push(newNums);
    }
    return printOut;
}
console.log(usingRest(1, 2, 3, 4, 5, 6, 7));
function overloadedFunction(newParam) {
    if (typeof newParam == "string") {
        return newParam.length;
    }
    else if (typeof newParam == "number") {
        return newParam * 2;
    }
    return 0;
}
var value1 = overloadedFunction("hello");
console.log(value1);
var value2 = overloadedFunction(1);
console.log(value2);
