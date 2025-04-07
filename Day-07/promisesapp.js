//an efficient way to do the operation- Promise

//operation - reading a file
/*is object from an operation - mention the status of the operation 
operation return promise

3 states : 
1. pending / waiting - Ex: waiting for an input
2. fulfilled / resolved - Finished / done
3. rejected / error - returns the error

from this we can decide state of an operation
*/


const fs = require('fs').promises;

const readFile = (filepath)=> {
    return fs.readFile('file.txt', 'utf8') //return a promise - mostly used for error handling
}

//if full filed the requirements - like try
readFile('file.txt').then((data)=> {
    console.log(data)
})
.catch((err) => {
console.error(err)
})
