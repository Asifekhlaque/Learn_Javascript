// Loop in JavaScript is a way to execute a block of code repeatedly
// for loop is used to iterate over a block of code a specified number of times
for (let i = 0; i < 5; i++) {
    console.log("Loop Number", i);
}

// for in loop is used to iterate over the properties of an object
const obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
};

for (let k in obj) {
    console.log(k + ': ' + obj[k]);
}

// for of loop is used to iterate over the properties of an array
const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
    console.log(element);
}

// while loop is used to execute a block of code repeatedly while a condition is true
let i = 0;
while (i < 5) {
    console.log("Loop Number", i);
    i++;
}

// do while loop is used to execute a block of code repeatedly while a condition is true
let a = 0;
do {
    console.log("Loop Number", a);
    a++;
} while (a < 5);

// Function in JavaScript is a block of code that performs a specific task
//function myFunction() {
  // code to perform a specific task
//}

function myFunction() {
    console.log("Hello World!");
}

function add(w,q){
    return w+q
}
console.log(add(10,20))

const sub = () => {
    return 10-20
}
console.log(sub())