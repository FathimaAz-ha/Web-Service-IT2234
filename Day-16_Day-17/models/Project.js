const mongoose = require('mongoose')
const projectSchema= new mongoose.Schema({
    pro_id:{type:String,require:true},
    name:{type:String,require:true}
})

const Project=mongoose.model('projects',projectSchema)
const Pr_1=new Project({
    pro_id:"PR101",
    name:"Develop a mobile app"
})
//Pr_1.save()
module.exports=Project
