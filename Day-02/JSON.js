//JSON
//{key : value}
let student = {regno : '2021/ICT/01',name:'James', age:21,course:'IT', skills:['Java', "JS", 'C++']}
console.log(student)
console.log(student.name)



console.log(student)

//Define 10 student JSON
//store it in an array
//find the female students
//find the students who are following IT course
//find the max and average GPA Among the students
let students = [
    {name:'Fathima',gender:"Female", course:"IT",GPA:3.9},
    {name:'Azha',gender:"Female",course:"Maths",GPA:3.8},
    {name:'Sahan',gender:"Male",course:"Biology",GPA:4.0},
    {name:'Sawbagya',gender:"Female",course:"IT",GPA:3.4},
    {name:'Siriwardena',gender:"Male",course:"English",GPA:3.6},
    {name:'Malik',gender:"Male",course:"Biology",GPA:2.9},
    {name:'Harshini',gender:"Female",course:"Chemistry",GPA:4.0},
    {name:'Dilki',gender:"Female",course:"IT",GPA:4.0},
    {name:'Samadhi',gender:"Female",course:"Maths",GPA:3.7},
    {name:'Nafhan',gender:"Male",course:"IT",GPA:3.2}
]

let femaleStudents = students.filter(student=> student.gender == "Female")
console.log("Female Students : ");
console.log(femaleStudents);

let itStudents = students.filter(student=> student.course == "IT");
console.log("\n Students following IT course : ");
console.log(itStudents);

let maxGPA = Math.max(...students.map(student => student.GPA));
let averageGPA = students.reduce((sum, student)=> sum + student.GPA,0)/students.length;

console.log("\n Max GPA : " + maxGPA)
console.log("\n Average GPA : " + averageGPA)

