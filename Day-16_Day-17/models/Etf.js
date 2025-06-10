const mongoose=require('mongoose')
const etfSchema=new mongoose.Schema({
    _id:{type:String,require:true},
    balance:{type:Number,require:true},
    interestRate:{type:Number}
})

const Etf=mongoose.model('etfs',etfSchema)
const Et1=new Etf({
    _id:"ET001",
    balance:100000,
    interestRate:15.00
})

//Et1.save();
module.exports=Etf
