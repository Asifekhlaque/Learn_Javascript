// try and catch in javascript
// try block is used to execute a block of code that might throw an error
// catch block is used to handle the error that is thrown by try block

/*try {
    // code that might throw an error
} catch (error) {
    // code to handle the error
}*/
//e.g
let a = 10;
let b = 0;
/*try {
    let c = a / b;
    console.log(c);
} catch (error) {
    console.log(error);
} finally {
    console.log("Finally block is always executed");
}*/

// throw in javascript
// throw is used to throw an error
// throw is used to throw an error
/*throw new Error("This is an error");*/
//e.g
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
try {
    let result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.log("Error:" + error.message);
}