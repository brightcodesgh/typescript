//number type
const num = 5;
let y: number;
y = 6
console.log(y + num);

//string type
const person = "Bright";
let newPerson: string;
newPerson = "kobby"
console.log(`first person is ${person} and second person is ${newPerson}`) 

//boolean type 
const isNew = true;
let isOld: boolean;
isOld = false;
console.log(`${isNew} and ${isOld}`);

//null type with union
const user = null
let newUser: string | null = null

//undefined type with union
const age = undefined;
let newAge: number | undefined = undefined;
