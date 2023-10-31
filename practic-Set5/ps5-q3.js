let a=[1,2,30,40,50]
let b=a.filter((x) => { // filter method is a way to loop through an array
    return x%10==0;
})

console.log(b);