<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" with="300" height="300"/>

# Learn_Javascript
# Introduction

JavaScript was invented by Brendan Eich in 1995.

JavaScript is a scripting language used to develop web pages.

# Javascript First Progame
```js
    console.log("Hello World!");
```
# JavaScript Advantages
<b>1.Client-Side Interactivity</b>JavaScript runs in web browsers, allowing it to create dynamic and interactive user interfaces directly on the user's device.

<b>2.Versatility</b>It is a versatile language used for a variety of tasks, from enhancing website functionality to building complex web applications.

<b>3.Asynchronous Operations</b>JavaScript supports asynchronous programming, enabling tasks to run independently without blocking the main program flow. This is crucial for efficient handling of tasks like fetching data from servers.

<b>4.Ease of Learning</b>Compared to some other programming languages, JavaScript is relatively easy to learn, making it accessible for beginners and enabling quick development.

<b>5.Wide Adoption</b>JavaScript is supported by all major browsers, ensuring compatibility across different platforms and devices.

<b>6.Large Ecosystem</b>There is a vast ecosystem of libraries and frameworks (like React, Angular, and Vue.js) built on JavaScript, simplifying the development of complex applications.


<b>7.Real-Time Updates</b>JavaScript allows for real-time updates on web pages, making it possible to create dynamic content that responds instantly to user actions.

<b>8.Server-Side Development</b>With technologies like Node.js, JavaScript can also be used for server-side development, providing a unified language for both client and server scripting.


# Let , Const & Var


The var keyword was used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

The var keyword should only be used in code written for older browsers.
  # let
   let can not be redeclared.
   And it's a block level scope.
```js
    let b=20
    console.log(b)
```
  # var
   Only use var if you MUST support old browsers.
```js
    var a=10
    console.log(a)
```
  # const
   Const can not be redeclared.

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
 ```js

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
```
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
```js
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
```
# Prompt
It is use to take user input

    b = prompt("Enter a number")

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
For in loop is used to iterate over the properties of an <u>object</u>
      
    const obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
    };

    for (let k in obj) {
       console.log(k + ': ' + obj[k]);
    }

# For of loop
for of loop is used to iterate over the properties of an <mark>array<mark>

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
# Function
Function in JavaScript is a block of code that performs a specific task

function myFunction() {
  // code to perform a specific task
}

    function add(w,q){
    return w+q
    }
    console.log(add(10,20))



    const sub = () => {
    return 10-20
    }
    console.log(sub())

# String
String is a sequence of characters
      
    let a="Asif"
    console.log(a.length)

# Template Literals
Template Literals is a way to include a string in a string
String interpolation is a way to include a string in a string

    let b="Asif"
    let c="BCA"
    console.log(`My name is ${b} and I am studying ${c}`)

# Escaspe Sequence Characters
It includes special characters like \n, \t, \r, \b, \f
   
    let d=`Asif\`BCA`
    console.log(d)

# String method
String method is a way to perform operations on a string
   
    let a = `Asif`;
    console.log(a.length); // it returns the length of the string
    console.log(a.toUpperCase()); // it returns the string in uppercase
    console.log(a.toLowerCase()); // it returns the string in lowercase
    console.log(a.charAt(0)); // it returns the character at the given index
    console.log(a.indexOf("s")); // it returns the index of the given character
    console.log(a.lastIndexOf("s")); // it returns the index of the last occurrence of the given character
    console.log(a.search("s")); // it returns the index of the given character
    console.log(a.slice(0, 3)); // it returns the substring from the given index to the end of the string
    console.log(a.split("")); // it returns an array of characters from the given string
    console.log(a.replace("Asif", "Asif Khan")); // it replaces the given string with the given string
    console.log(a.repeat(3)); // it repeats the given string the given number of times
    console.log(a.trim()); // it removes the whitespace from the beginning and end of the string
    console.log(a.trimStart()); // it removes the whitespace from the beginning of the string
    console.log(a.trimEnd()); // it removes the whitespace from the end of the string
    console.log(a.trimLeft()); // it removes the whitespace from the beginning of the string
    console.log(a.trimRight()); // it removes the whitespace from the end of the string
    console.log(a.trimStart().trimEnd()); // it removes the whitespace from the beginning and end of the string
    console.log(a.startsWith("Asif")); // it returns true if the string starts with the given string
    console.log(a.endsWith("Khan")); // it returns true if the string ends with the given string
    console.log(a.includes("s")); // it returns true if the string contains the given string
    console.log(a.concat("BCA")); // it concatenates the given string with the given string

# Array
Array is a sequence of elements
    
    let myArray = [1, 2, 3, 4, 5,true,"Asif","Khan"];
    myArray[8]="BCA";
    myArray[0]="BCA";
    console.log(myArray);
    console.log(myArray.length);   
    console.log(typeof myArray);

# Methods in Array
   
    let a=[1,2,3,4,5,6,7,8,9,10];
    console.log(a,typeof a);
    let b=a.toString(); // toString() is a method to convert array into string
    console.log("ToString",b);
    let c=a.join("_"); // join() is a method to convert array into string
    console.log("Join",c, typeof c);
    a.pop(); // pop() is a method to remove the last element of the array
    console.log("Pop",a);
    let d=a.pop(); // pop() is a method to remove the last element of the array
    console.log("Pop",d);
    let e=a.shift(); // shift() is a method to remove the first element of the array
    console.log("Shift",e);
    let f=a.unshift(0); // unshift() is a method to add the first element of the array
    console.log("Unshift",f);
    let g=a.push(11); // push() is a method to add the last element of the array
    console.log("Push",g);
    let h=a.reverse(); // reverse() is a method to reverse the array
    console.log("Reverse",h);
    let i=a.sort(); // sort() is a method to sort the array
    console.log("Sort",i);
    let j=a.slice(3,6); // slice() is a method to slice the array
    console.log("Slice",j);
    let k=a.splice(2,4); // splice() is a method to splice the array
    console.log("Splice",k);
    let l=a.concat(12,13); // concat() is a method to concat the array
    console.log("Concat",l);
    //let m=a.delete[0]; // delete() is a method to delete the element of the array
    //console.log("Delete",m);

# Console method
Console method is a way to perform operations on a string

    console.log("Hello World!");
    console.assert(1==1);
    console.clear();
    console.count();
    obj={
        name:"Asif",
        age:19
    }
    console.table(obj)
    console.time("This is time")
    console.timeEnd("This is time")
    console.info("This is info")
    console.warn("This is warn")
    console.error("This is error")
    console.trace("This is trace")
    console.dir(obj,true)
# DOM (Document Object Model)
![image](https://github.com/Asifekhlaque/Learn_Javascript/assets/132199879/1a662252-b229-4527-9fb0-a9c583187aee)
- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
