const express = require('express');


const app = express();
const port = 3001;


//to restart the server automatically whenever you modfied - npm install nodemon
const students = require('./DB/studentdb');
app.get(
    '/stu',(req, res)=>{
        res.send(students);
    });
    
//finding using studnt Id
app.get('/stu/:id', (req, res)=>{
    const id = req.params.id
    //console.log(id)
    const result = students.find((students)=>students.registrationNumber === id);
     //check student is available or not, if not return an error message
    if(result)
    {
        res.send(result);
    }
    else{
        res.status(404).send("Student not found!");
    }  
});

//filtering using gender
app.get('/stu/gender/:gen', (req, res)=>{
    const gen= req.params.gen
    const gender = students.filter((students)=>students.gender === gen);
        res.send(gender);   
});

//filtering using name
app.get('/name/:name',(req,res)=>{
    const name= req.params.name
    const Name = students.filter((students)=>students.studentName === name);
    res.send(Name);
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})