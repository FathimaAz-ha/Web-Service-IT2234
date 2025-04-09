const express = require('express')
const app = express()
const port = 8080

const userRoute = require('./User/userRoute')
const commentRoute = require('./Comments/commentRoute')

app.use(express.json())
app.use('/User', userRoute)
app.use('/BlogPosts', commentRoute)

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})