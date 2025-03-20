//Functions
function PrintMsg()
{
    console.log("Hello World!")
}

PrintMsg()

//return type function
function sum(){
    return 5+6
}
console.log(sum())

//parametarized functions
function sub(a,b)
{
    return (a-b);
}
console.log(sub(5,3));

//Write a boolean function to find a given number is prime
function isPrime(a) {
    if (a <= 1) {
        console.log("Not a prime number!");
        return;
    }

    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            console.log("Not a prime number!");
            return;
        }
    }

    console.log("Prime number!");
}
isPrime(1);
isPrime(5);


//write a recursive function to print from 1 to n
function printNumber(n)
{
    if(n===1){
        console.log(1);
        return;
    }
    else {
        printNumber(n-1);
        console.log(n)
    }
}
printNumber(5)

//arrow function - short form 
//defining arrow function - you can assign a function as a variable
const msg = ()=>{console.log("Hello JS")}
console.log(msg)
msg()


//arrow function to do arithmatic operation
const arithmaticOperations = (a,b)=>{
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
}

arithmaticOperations(10,5);

//return type
let add = (a,b)=>{
    return a+b
}
console.log(add(5,6))

//default parameter
const mult = (a,b=2)=> {return a*b}
console.log(mult(4,5))
console.log(mult(4)) //it will take b as 2 and do the calculation as default value

//rest parameter
//... = means u can pass any number of arguments
const mySum = (...n)=> {
    let sum = 0
    n.forEach((i)=> sum =sum + i)
    console.log(sum)
}
mySum(4,5,6,8,9,2)

//better way
//You can reduce your array to a single value = reduce function 
const anotherSum = (...n)=>{
    return n.reduce((sum, i)=> sum =sum + i)
}

console.log(anotherSum(4,5,6,8,9,2))

//callback functions
//a function passed as an argument 
const greet = (msg, fun)=> {
    console.log("Hi.." + msg)
    fun()
}
greet("Good Morning!", ()=>{console.log("My name is David")})

const multtwo = (n)=>n*2 

const myArr = (mul,...n)=>{
    n.forEach((i)=> console.log(mul(i)))
}
myArr(multtwo, 4,5,6,8,2)

