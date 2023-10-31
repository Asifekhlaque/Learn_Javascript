// Array loop is a way to loop through an array
// for loop is a way to loop through an array
let myArray = [1, 2, 3, 4, 5];

myArray.forEach((element) => { // forEach method is a way to loop through an array
    console.log(element);
})

let a="Asif";
let arr=Array.from(a); // from method is a way to convert a string into an array
console.log(arr);

for(let i in myArray){  // in method is a way to loop through an array
    console.log(myArray[i]);
}

const b=[1,2,3,4,5];
b.map((value, index, array) => { // map method is a way to loop through an array
    console.log(value);
    console.log(value,index,array);
    return value+1;
})

let c=[1,2,3,4,5];
let d=c.filter((value, index, array) => { // filter method is a way to loop through an array
    return c<10;
})
console.log(d);