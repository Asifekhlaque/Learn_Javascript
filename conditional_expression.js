// condition expression
// condition expression is a way to create a conditional statement
//if (condition) {
  // code to be executed if the condition is true
//} else {
  // code to be executed if the condition is false
//}
let c=10;
let d=20;
if(c>d){
    console.log("c is greater than d")
}
else if(c==d){
    console.log("c is equal to d")
}
else{
    console.log("c is less than d")
}

// Switch Case

let a=10;
let b=20;
switch (true) {
    case (a > b):
        console.log("a is greater than b");
        break;
    case (a === b):
        console.log("a is equal to b");
        break;
    default:
        console.log("a is less than b");
}

// Ternary Operator
let e = 10;
let f = 20;
let result = (e > f) ? "e is greater than f" : "e is less than or equal to f";
console.log(result);