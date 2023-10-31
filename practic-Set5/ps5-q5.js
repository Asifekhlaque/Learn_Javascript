let a=[1,2,3,4,5]
let b=a.reduce((x,y) => { // filter method is a way to loop through an array
    return x*y;
})

console.log(b);