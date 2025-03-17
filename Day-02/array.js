//defining an array
let numbers = [1,2,3,4,5]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log(numbers) //u can use simply print like this [1,2,3,4,5]

//printing using foreach loop -
numbers.forEach((n) => {
    console.log(n)
})

console.log();

//printing maximum number of the array
let max = 0;
numbers.forEach((n) => {
    if(n > max)
    {
        max = n;
    }
    //(max < n) && (max = n) like ternary operator
})
console.log("Max is " + max)

console.log();
//print the nested array
let nestedArray = [[1,2,30],[5,6],[8,5,3]]
nestedArray.forEach((n) =>{ //nested foreach loop
    n.forEach((i) => {
        console.log(i)
    })
    
})
console.log();
//find the common element for a and b
let a = [4,5,6,3,7]
let b = [8,3,2,1,5]
a.forEach((n) => {
    b.forEach((m)=> {
        if(n == m)
          console.log(n)
    })
})
console.log();
//arr = [1,2,3,4,5,6]
//target = 7
//Write a code find the all pairs that sum up to the target
let number = [1,2,3,4,5,6]
let target  = 7
number.forEach((n)=>{
    number.forEach((m) => {
        if(n + m == target)
            console.log("[" + n + ","+ m +"]")
    })
}
)

console.log();
//find the most frequent element in the array
//[4,8,3,4,3,2,1,8,4]



//Array operations push and pop
arr3 = ['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)

//reverse the array using push and pop
for(let i = arr3.length; i > 0; i--){
    console.log(arr3.pop())
}