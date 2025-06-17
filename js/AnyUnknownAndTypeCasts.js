//Any Type 
var x;
x = 4;
x = "new Number";
x = [1, 2, 3, 4, 5];
//Unknown
var data = 1;
if (typeof data == "number") {
    console.log(data + 1);
}
else if (typeof data == "string") {
    console.log("data: ", data);
}
else {
    console.log(data);
}
//Using unknown with typecast
var newData = 1;
var results = (newData + 3);
console.log(results);
