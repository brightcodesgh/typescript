//Literals
let directions: "north" | "south" | "east" | "west";
directions = "north"
if(directions == "north"){
    console.log("you are going north")
}else{
    console.log(directions);
}

//enums 
/*numeric values are defaultly starts with 0 and  
anything that follows later is incremented by 1*/
enum size{
    small, //defaultly 0 
    medium, //1
    large //2
}
console.log(size.small);

// with fixed value the rest will follow with 1 incremeted to the initial value
enum newSize{
    small = 20,
    medium, //21
    large //22
}
console.log(newSize.medium)

enum direc{
    up = "UP",
    right = "RIGHT",
    left = "LEFT",
    down = "DOWN"
}
console.log(direc.up)
