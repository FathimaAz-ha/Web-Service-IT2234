const express=require('express')
const router=express.Router()
const studentService=require('./studentService')

router.get('/', (req, res) => {
    
    const results = studentService.getstudents()
    if (results) {
        res.status(200).json(results)
    } else
    {
        res.status(404).send("Sorry, No data found!")    
    }


})

//retrieving a certain student using id
router.get('/:id', (req, res) => {
    const id = req.params.id
    const results = studentService.getStudent(id)
    if (results) {
        res.status(200).json(results)
    } else
    {
        res.status(404).send("Sorry, No data found!")    
    }

})

//filtering by gender
router.get('/gender/:gend', (req, res)=>{
    const gend = req.params.gend == 'm'? 'male' : 'female'
    const results = studentService.getBygender(gend)
    if(results) {
        res.status(200).json(results)

    }  else
    {
        res.status(404).send("Data not found!")
    }
});

router.get('/course/:crs', (req, res)=>{
    const crs = req.params.crs
    const results = studentService.getbyCourse(crs)
    if(results) {
        res.status(200).json(results)

    }  else
    {
        res.status(404).send("Data not found!")
    }
});



module.exports=router