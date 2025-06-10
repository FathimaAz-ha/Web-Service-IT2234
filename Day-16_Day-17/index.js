const express=require('express');
const app=express();
const port=3008;
const mongoose= require('mongoose');

const etfert=require('./route/etfRoute')
const employeert=require('./route/employeeRoute')
const departmentert=require('./route/departmentRoute')
const projectert=require('./route/projectRoute')

app.use(express.json())
app.use('/etf',etfert)
app.use('/employee',employeert)
app.use('/department',departmentert)
app.use('/project',projectert)

mongoose.connect('mongodb://localhost:27017/officeDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
