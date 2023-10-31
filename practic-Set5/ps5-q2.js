let a=[1,2,3,4,5]
console.log(a)
let b
do {
    b = prompt("Enter a number")

    b= Number.parseInt(b) // Number.parseInt() is a method to convert a string into a number
    a.push(b)
} while(b!=0);
console.log(a)