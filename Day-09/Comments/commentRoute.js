const express = require('express')
const router = express.Router()
const commentServices = require('./commentService')


router.get('/:id', (req, res) => {
    const id = req.params.id;

    try {
        result = commentServices.getComments(id)

        if (result && result.length > 0) {
            res.status(200).json(result)
        }
        else {
            res.status(404).send("No Comments found")
        }
    }
    catch(error)
    {   
        res.status(500).send("Internal Error")
    }
})


module.exports = router