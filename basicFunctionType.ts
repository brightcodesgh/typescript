//function type
function add(num1: number, num2: number): number {
  return num1 + num2;
}

function div(param1: number, param2: number): number {
  return param1 / param2;
}

function convo(message: string, messageNumber: number): string | number {
  return messageNumber + " " + message;
}

//optional parameter
function myinfo(
  firstname: string,
  lastname: string,
  middlename?: string
): string {
  if (middlename)
    return `Your full name is ${firstname} ${middlename} ${lastname}`;
  return `Your full name is ${firstname} ${lastname}`;
}

console.log(add(5, 6));
console.log(convo("Hello there", 1));
console.log("");

const infoIncludeMiddle = myinfo("Bright", "Darkwa", "Kwabena");
console.log(infoIncludeMiddle);
const info = myinfo("Bright", "Darkwa");
console.log(info);

//passing function parameter in another function
function apply(
  funcs: ((n1: number, n2: number) => number)[],
  values: [number, number][]
): number[] {
  const results: number[] = [];
  for (let i = 0; i < funcs.length; i++) {
    const args = values[i];
    const result = funcs[i](args[0], args[1]);
    results.push(result);
  }
  return results;
}

console.log(
  apply(
    [add, div],
    [
      [2, 4],
      [5, 25],
    ]
  )
);
