const express = require('express'); //using express js module

const app = express();
const port = 3001;

app.get(
    '/',(req, res)=>{
        res.send('Hello express JS');
    });
    
//second message
app.get('/msg', (req, res)=>{
    res.send('Hello IT Students');
});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})