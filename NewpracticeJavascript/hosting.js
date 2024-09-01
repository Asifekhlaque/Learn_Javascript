// Hoisting in Javascript is the ability of JavaScript to move the declaration of variables and functions to the top of the current scope before code execution.
// Hoisting is the default behavior of JavaScript. It allows us to use variables and functions before they are declared.
/*console.log(a)
hello()

function hello() {
    console.log("Hello") 
}

//let a=15

const a=15
console.log(a)*/

// Function and class expression are not hoisted
// let and const are not hoisted
// var is hoisted


a=2
try{
    c=a/0
    console.log("Try",c)
}
catch(e){
    console.log(e)
}
finally{
    console.log("Finally")
}