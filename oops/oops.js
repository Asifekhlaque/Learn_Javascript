//? object creation in static way
const A = {
    name: "Asif",
    age: 20,
    print: function () {
        console.log(this.name + " " + this.age)
    }
}
//? object creation in dynamic way
const B = new Object()
B.name = "Asif"
B.age = 20
B.print = function () {
    console.log(this.name + " " + this.age)
}
//? object creation in class way
class C {
    constructor() {
        this.name = "Asif"
        this.age = 20
        console.log("This is a constructor... of class C")
    }
    print() {
        console.log(this.name + " " + this.age)
    }
}
// let m= new C();
// m.print()

//? inheritance
class parent {
    hello() {
        console.log("Hello")
    }
}

class child extends parent {
    hii() {
        console.log("Hii")
    }
}

// let obj=new child()
// obj.hello()
// obj.hii()


//? Q1 Make a collage website
class User {
    constructor() {
        console.log("Welcome To Collage Website")
    }
    name = "asif"
    email = "asif@asif"
    viewData() {
        console.log(this.name + " " + this.email)
    }
}
class Admin extends User {
    editData(){
        console.log("Edit Data")
    }
}
let obj = new User()
obj.viewData()
let obj1 = new Admin()
obj1.editData()