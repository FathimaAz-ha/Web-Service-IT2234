const mongoose = require('mongoose')
const studentSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    date_of_birth:{type:Date},
    gender:{type:String},
    degreeID:{type:String,require:true,ref:'degrees'}
})

const Student =mongoose.model('students',studentSchema)
const Kolins = new Student({
    _id:'2020IT01',
    name:'Peter Kolins',
    date_of_birth:'1995-05-18',
    gender:'Male',
    degreeID:'FAS2000ICT'
})

Kolins.save()
module.exports=Student