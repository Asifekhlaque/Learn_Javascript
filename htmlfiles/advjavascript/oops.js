// OOPs in javascript
// Object Oriented Programming
// Inheritance
// Encapsulation
// Polymorphism
// Abstraction
let obj={
    name:"Asif",
    age:19
}
let obj2={
    name:"Rahul",
    age:20
}
console.log(obj)
obj.__proto__= obj2; // __proto__ is a special property in javascript
console.log(obj)
class Person{
    constructor(name){
        // this keyword is used to create an object
        this.name=name
        console.log("This is a constructor...")
        console.log(name)
    }
    display(){
        console.log("This is a display method...")
    }
    display1(){
        console.log("This is a display1 method...")
    }
}
class Person1 extends Person{ // Inheritance
    constructor(name){
        super(name)
        console.log("This is a constructor1...")
        console.log(name)
    }
    display(){
        console.log("This is a display method1...")
    }
    display1(){
        console.log("This is a display1 method1...")
    }
}
/*let p=new Person("Asif")
p.display()
p.display1()*/
let p1=new Person1("Rahul")
p1.display()
p1.display1()