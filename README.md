<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" with="300" height="300"/>

# Learn_Javascript
# Introduction

JavaScript was invented by Brendan Eich in 1995.

JavaScript is a scripting language used to develop web pages.

# Javascript First Progame

    console.log("Hello World!");

# Let , Const & Var


The var keyword was used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

The var keyword should only be used in code written for older browsers.
  # let
   let can not be redeclared.

    let b=20
    console.log(b)
  # var
   Only use var if you MUST support old browsers.

    var a=10
    console.log(a)
  # const
   const can not be redeclared.

    const c=30
    console.log(c)

# What is Good?
let and const have block scope.

let and const can not be redeclared.

let and const must be declared before use.

let and const does not bind to this.

let and const are not hoisted.

# What is Not Good?
var does not have to be declared.

var is hoisted.

var binds to this.

# Browser Support
The let and const keywords are not supported in Internet Explorer 11 or earlier.

# Javascript DataTypes 
 Primitive data types & Non-primitive data types
# Primitive data types
 Null, Number, Bigint, Boolean, String, Symbol, Undefined

    let nullValue = null; // null
    let undefinedValue = undefined; // undefined
    let booleanValue = true; // boolean
    let numberValue = 10; // number
    let stringValue = "Hello World!"; // string
    let symbolValue = Symbol("mySymbol"); // symbol
    let bigintValue = BigInt(9007199254740991); // bigint

    console.log(nullValue); // Output: null
    console.log(undefinedValue); // Output: undefined
    console.log(booleanValue); // Output: true
    console.log(numberValue); // Output: 10
    console.log(stringValue); // Output: Hello World!
    console.log(symbolValue); // Output: Symbol(mySymbol)
    console.log(bigintValue); // Output: 9007199254740991n

# typeof
The typeof operator to find the data type of a JavaScript variable.

    let a=10
    console.log(typeof a)

# Non-primitive data types
Arrays, Objects and Function

# Arrays

    let numbers = [1, 2, 3, 4, 5];
    console.log(numbers); // Output: [1, 2, 3, 4, 5]
    let fruits = ["apple", "banana", "orange"];
    console.log(fruits); // Output: ["apple", "banana", "orange"]
# Objects

    let person = {
     name: "Asif",
     age: 19,
     course: "BCA",
     city: "Patna",
     country: "India",
     skills: ["HTML", "CSS", "JavaScript"],
     isMarried: false
    };


    console.log(person);
    console.log(person.name); // Output: Asif
    console.log(person.age); // Output: 19
    console.log(person.course); // Output: BCA
    console.log(person.city); // Output: Patna
    console.log(person.country); // Output: India
    console.log(person.skills); // Output: ["HTML", "CSS", "JavaScript"]
    console.log(person.isMarried); // Output: false

# Functions
    function JavaScript() {
      console.log("JavaScript is the best language for web development!"); 
    }


    JavaScript(); // Output: Hello!
# Oprater
Optater is a symbol used to perform an operation on a value

    // Arithmetic Operator
    let a=10
    let b=20
    console.log("a+b",a+b)
    console.log("a-b",a-b)
    console.log("a*b",a*b)
    console.log("a**b",a**b)
    console.log("a/b",a/b)
    console.log("a++",a++)
    console.log("a--",a--)
    //Assignment Operator
    let c=10
    console.log(c)
    c+=3
    console.log("c+=3",c)
    c-=3
    console.log("c-=3",c)
    c*=3
    console.log("c*=3",c)
    c/=3
    console.log("c/=3",c)
    c%=3
    console.log("c%=3",c)
    // Comparison Operator
    let d=10;
    let e=20;
    let h ="10";
    console.log("d==e",d==e)
    console.log("d===h",d===h)
    console.log("d!=e",d!=e)
    console.log("d>e",d>e)
    console.log("d>=e",d>=e)
    console.log("d<e",d<e)
    console.log("d<=e",d<=e)
    // Logical Operator
    let f=true
    let g=false
    console.log("f&&g",f&&g)
    console.log("f||g",f||g)
# Condition expression
Condition expression is a way to create a conditional statement
if (condition) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}

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

# Switch Case
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

# Ternary Operator
    let e = 10;
    let f = 20;
    let result = (e > f) ? "e is greater than f" : "e is less than or equal to f";
    console.log(result);

# Looping Statement
Loop in JavaScript is a way to execute a block of code repeatedly
# For loop
For loop is used to iterate over a block of code a specified number of times
        
    for (let i = 0; i < 5; i++) {
    console.log("Loop Number", i);
    }

# For in loop
For in loop is used to iterate over the properties of an object
      
    const obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
    };

    for (let k in obj) {
       console.log(k + ': ' + obj[k]);
    }

# For of loop
for of loop is used to iterate over the properties of an array

    const arr = [1, 2, 3, 4, 5];

    for (const element of arr) {
       console.log(element);
    }

# While loop
While loop is used to execute a block of code repeatedly while a condition is true

    let a = 0;
    do {
       console.log("Loop Number", a);
       a++;
    } while (a < 5);
