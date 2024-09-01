alert("hello world")
let a=prompt("Enter a number") //! prompt is a method to take input from the user
let b=prompt("Enter a number")
a= Number.parseInt(a) //* Number.parseInt() is a method to convert a string into a number
b= Number.parseInt(b)
//todo alert("your number is "+(typeof a))
alert("your number is "+(a+b))
let write= confirm("Do you want to write your number?") //! confirm is a method to take input from the user
if(write){
    document.write("your number is "+(a+b))
}
else{
    document.write("your number is not")
}