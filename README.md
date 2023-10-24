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
