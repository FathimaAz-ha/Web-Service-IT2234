const mongoose = require('mongoose')
const departmentSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true}
})

const Department=mongoose.model('departments',departmentSchema)
const HR=new Department({
    _id:"Dep003",
    name:"HR"
})
//HR.save()
module.exports=Department
