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