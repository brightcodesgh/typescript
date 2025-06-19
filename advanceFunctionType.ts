//rest parameter
function usingRest(...manyNumbers: number[]): number[] {
  const printOut: number[] = [];
  for (let newNums of manyNumbers) {
    printOut.push(newNums);
  }
  return printOut;
}

console.log(usingRest(1, 2, 3, 4, 5, 6, 7));

//overloaded function
function overloadedFunction(param1: string): string;
function overloadedFunction(param1: number): number;
function overloadedFunction(newParam: unknown): unknown {
  if (typeof newParam == "string") {
    return newParam.length;
  } else if (typeof newParam == "number") {
    return newParam * 2;
  }
  return 0;
}

const value1 = overloadedFunction("hello");
console.log(value1);
const value2 = overloadedFunction(1);
console.log(value2);
