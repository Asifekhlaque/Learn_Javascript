// Faulty Calculator
let a=Math.random()
console.log(a)
let num=prompt("Enter a number")
let op = prompt("Enter an operator")
let num2=prompt("Enter another number")
let opr={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*",
}
if(a>0.1){ // Provide you the correct output in 10% of the cases
    alert(num+opr[op]+num2+"="+eval(num+opr[op]+num2))
}
else{
    alert(num+op+num2+"="+eval(num+op+num2))
}