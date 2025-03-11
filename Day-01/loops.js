//Print the the numbers from  to 10
console.log("Print numbers from 1 to 10")
for(let x=1; x<=10; x++){
	console.log(x)
}

console.log();

//Printing odd numbers 
console.log("Print only the odd numbers")
for(let x=1; x<=10; x++){
	if(x%2 == 1){
		console.log(x)
	}
}

console.log();

//Printing the numbers in reverse order
console.log("Print the numbers in reverse")
for(let x=10; x>=1; x--){
	if(x%2 == 1){
		console.log(x)
	}
}

console.log()

console.log("Reverse the numbers in left & right 4321-5-9876")
let num = 9
let mid = parseInt(num/2) + 1

for(let y=mid-1; y>=1; y--){
	console.log(y)
}
	
console.log("-" + mid + "-")
	
for(let z=num; z>mid; z--){
	console.log(z)
}
	