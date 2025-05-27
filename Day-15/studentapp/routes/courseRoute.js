const express=require('express')
const router=express.Router()
const Course=require('../Models/Course')

router.get('/',async (req,res)=>{
    try{
        const results = await Course.find()
        if (results) {
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No data found")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error")
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const id=req.params.id
        const results = await Course.findById(id)
        if (results) {
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No data found")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error")
    }
})


router.get('/code/:cid',async (req,res)=>{
    try{
        const cid=req.params.cid
        const results = await Course.find({code:cid})
        if (results) {
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No data found")
        }
    }catch(error){
        console.error(error);
        res.status(500).send("Server error")
    }
})

/*router.get('ccode/:cid', async (req,res)=>{
    try{
        const cid=req.params.cid
    const results = await Course.find({code:cid})
    const count = results.length
    if (results == null) {
        //res.json(studentSevise.getstudents()) //res.json bcz geta json output
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry, No data found!")
    }
}catch(error){
    console.error(error);
    res.status(500).send("Server Error !")
}
    
})*/

module.exports=router