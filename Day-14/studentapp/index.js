const express = require('express');
const app=express();
const mongoose = require('mongoose')
const port=3001;
const coursert = require('./routes/courseRoute') //importing courseRoute

app.use(express.json())
app.use('/Course', coursert) //using courseRoute
mongoose.connect('mongodb://localhost:27017/Students').then(()=>{
    console.log("Database Connected!")
}).catch((error)=>{
    console.error(error);
})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})