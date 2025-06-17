//optional chaining
const Arr = [
    {name:"Anni", age: 24},
    {name:"Adam", age: 25},
    {name:"Bam", age: 26},
    {name:"Olaf", age: 27},
    {name:"Vacce", age: 28},

]

const result = Arr.pop()?.name

console.log(Arr)

console.log(result)

//bang
const Arr2 = [
    {name:"Anni", age: 24},
    {name:"Adam", age: 25},
    {name:"Bam", age: 26},
    {name:"Olaf", age: 27},
    {name:"Vacce", age: 28},

]

const result2 = Arr.pop()!.name

console.log(Arr2)

console.log(result2)