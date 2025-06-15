let arr: number[] = [];
arr = [1,2,3,4,5];

const newArr: string[] = ["hello", "hi", "bye"];


console.log(`Array Numbers: ${arr}\n Array Strings: ${newArr}`);


//nested array

let nesNumArr: number[][] = [[1,2], [3,4], [5,6]];
const nesStringArr: string[][] = [["i", "am"], ["Bright", "Darkwa"]];

console.log(`Nested Array Numbers: ${nesNumArr}\n Nested String Array: ${nesStringArr}`);

//Tuple
const coord: [number,number] = [1,2];
console.log(coord[0]);

let coords: [number,number][] = [
    [1,2],
    [-1,-2]
]
console.log(coords[0][1]);

