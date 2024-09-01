const a= ()=>{
    console.log("Hello")
}

a()

const b=(name)=>{
    console.log(`Hello ${name}`)
}

b("Asif")

const c=(a,b)=>{
    console.log(a+b)
}    
c(10,20)

const d= myName=>{
    console.log(myName)
}

d("Asif")

const e=(myName,myAge)=>{
    console.log(`Hello ${myName} and your age is ${myAge}`)
}

e("Asif",19)

const f={
    name:"Asif",
    age:19,
    sayHello:()=>{
        console.log(`Hello ${this.name} and your age is ${this.age} with arrow function and object`)
    }
}

f.sayHello()