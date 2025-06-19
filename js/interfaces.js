var me = {
    name: "Bright",
    age: 24,
    introduce: function () {
        console.log("".concat(this.name, " is ").concat(this.age, " years old"));
    },
};
me.introduce();
function getPerson(p) {
    return {
        name: "Bright",
        age: 24,
        introduce: function () {
            console.log("".concat(this.name, " is ").concat(this.age, " years old"));
        },
    };
}
var employee = {
    name: "Bright",
    age: 24,
    employeeId: 10,
};
