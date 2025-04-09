const express = require('express')
const router = express.Router()
const userService = require('./userServices')

router.get('/', (req, res) => {
    const results = userService.getUserdetails()

    if (results) {
        res.status(200).json(results)
    } else {
        res.status(404).send("Sorry, No data found!")
    }
})

router.get('/summary/:id', (req, res) => {
    try {
        const id = req.params.id
        const results = userService.getUserSummary(id)
        if (results) {
            res.status(200).json(results)
        } else {
            res.status(404).send("Sorry, No data found!")
        }
    }
    catch (err) {
        res.status(500).send("Internal Error")
    }

})

module.exports = router