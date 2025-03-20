const {createServer} = require('node:http'); //use the module

const localhost = '127.0.0.1'; //assigning localhost
const port = 3000; //assigning port

//creating a server
const server = createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader('content-Type', 'text/plain')
    res.end("Hello Node JS"); 
});

server.listen(port, localhost, ()=>{
    console.log(`Running on : ${localhost}: ${port}`);
});

//use express.js for easy  