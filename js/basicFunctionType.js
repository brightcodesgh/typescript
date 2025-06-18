//function type
function add(num1, num2) {
    return num1 + num2;
}
function div(param1, param2) {
    return param1 / param2;
}
function convo(message, messageNumber) {
    return messageNumber + " " + message;
}
//optional parameter
function myinfo(firstname, lastname, middlename) {
    if (middlename)
        return "Your full name is ".concat(firstname, " ").concat(middlename, " ").concat(lastname);
    return "Your full name is ".concat(firstname, " ").concat(lastname);
}
console.log(add(5, 6));
console.log(convo("Hello there", 1));
console.log("");
var infoIncludeMiddle = myinfo("Bright", "Darkwa", "Kwabena");
console.log(infoIncludeMiddle);
var info = myinfo("Bright", "Darkwa");
console.log(info);
//passing function parameter in another function
function apply(funcs, values) {
    var results = [];
    for (var i = 0; i < funcs.length; i++) {
        var args = values[i];
        var result = funcs[i](args[0], args[1]);
        results.push(result);
    }
    return results;
}
console.log(apply([add, div], [
    [2, 4],
    [5, 25],
]));
