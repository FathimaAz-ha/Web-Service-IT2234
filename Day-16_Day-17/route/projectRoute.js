const express =require('express')
const router =express.Router()
const  Project= require('../models/Project')
const { default:mongoose } = require('mongoose')

router.get('/',async(req,res)=>{
    try {
        const results=await Project.find()
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry,No Data Found !")
        }
        } catch (error) {
            console.error(error);
            res.status(500).send("Server Error !")
        }
})

router.post('/employees', async (req, res) => {
  try {
    const result = await Employee.insertMany(req.body);
    res.status(201).json({ message: 'Employees inserted', result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



router.get('/employeesWithDept',async(req,res)=>{
    try{
        const results=await Employee.find().populate('departmentID') 
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
})

router.get('/employeesWithProjects',async(req,res)=>{
    try{
        const results=await Employee.find().populate('projects') 
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
})



router.get('/emp/:did', async (req, res) => {
    
    try {
        const did = req.params.did;

        const results = await Employee.find({departmentID:did}).populate("departmentID")
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry no data found")
        }
    }
    catch(error){
        console.error(error)
        res.status(500).send("Server error")
    }
});

module.exports=router
