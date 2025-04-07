/*simple example for asynchronous programming*/ 
//try to read a js file
const fs = require('fs'); // Import the module fs to read the file
//readFile(filename, file encoding, callback function)

//2 
fs.readFile('file.txt', 'utf8', (err, data)=> {
    if(err){ //if there is an errror in the file
        console.error(err);
        return 0;
    } 
    console.log(data);

}); 

console.log("File reading is done..") //1 (less time for running - non .... programming)