export const a=10 // name export it is used to export a variable or function from a module
export const b=20
export const c=30
//let obj
/*export default obj={
    name:"Asif",
    age:19
}*/

let obj={
    name:"Asif",
    age:19,
    display(){
        console.log(this.name)
    }
}

export default obj // export default is used to export a module