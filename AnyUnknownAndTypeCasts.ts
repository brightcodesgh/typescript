//Any Type 
let x: any;
x = 4
x= "new Number";
x = [1,2,3,4,5];

//Unknown
let data: unknown = 1;
if(typeof data == "number"){
    console.log(data + 1)
}else if(typeof data == "string"){
    console.log("data: ", data)
}else{
    console.log(data);
}

//Using unknown with typecast
let newData: unknown = 1;

const results = (newData as number + 3);
console.log(results)