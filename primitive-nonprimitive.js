// Primitive data types
// Null, Number, Bigint, Boolean, String, Symbol, Undefined
// Primitive data types
let nullValue = null // null
let undefinedValue = undefined // undefined
let booleanValue = true // boolean
let numberValue = 10 // number
let stringValue = "Hello World!" // string
let symbolValue = Symbol("mySymbol") // symbol
let bigintValue = BigInt(9007199254740991) // bigint

console.log(nullValue); // Output: null
console.log(undefinedValue); // Output: undefined
console.log(booleanValue); // Output: true
console.log(numberValue); // Output: 10
console.log(stringValue); // Output: Hello World!
console.log(symbolValue); // Output: Symbol(mySymbol)
console.log(bigintValue); // Output: 9007199254740991n

console.log("********************************************************");

console.log(typeof nullValue); // Output: object
console.log(typeof undefinedValue); // Output: object
console.log(typeof booleanValue); // Output: boolean
console.log(typeof numberValue); // Output: number
console.log(typeof stringValue); // Output: string
console.log(typeof symbolValue); // Output: symbol
console.log(typeof bigintValue); // Output: bigint

// Non-primitive data types
// Arrays, Objects and Functions

// Arrays

let numbers = [1, 2, 3, 4, 5];

console.log("********************************************************");

console.log(numbers); // Output: [1, 2, 3, 4, 5]

let fruits = ["apple", "banana", "orange"];
console.log(fruits); // Output: ["apple", "banana", "orange"]

// Objects

let person = {
  name: "Asif",
  age: 19,
  course: "BCA",
  city: "Patna",
  country: "India",
  skills: ["HTML", "CSS", "JavaScript"],
  isMarried: false
};


console.log("********************************************************");

console.log(person);
console.log(person.name); // Output: Asif
console.log(person.age); // Output: 19
console.log(person.course); // Output: BCA
console.log(person.city); // Output: Patna
console.log(person.country); // Output: India
console.log(person.skills); // Output: ["HTML", "CSS", "JavaScript"]
console.log(person.isMarried); // Output: false

// Functions
function JavaScript() {
  console.log("JavaScript is the best language for web development!"); 
}

console.log("********************************************************");

JavaScript(); // Output: Hello!