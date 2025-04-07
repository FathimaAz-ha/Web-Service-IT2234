//better recommended way/version of promises
/* async/await

*/

const fs = require('fs').promises;

const readFile = async ()=> {
    try{
        const [data,data2] = await Promise.allSettled([  // or u can use Promise.all()

            fs.readFile('file.txt', 'utf8'),
            fs.readFile('data.txt', 'utf8')

        ])
        
        //return a promise - mostly used for error handling
        //await - makes the program wait until it gets the data

   
       
        console.log(data.value) 
        console.log(data2)
        console.log(data.status)
        console.log(data2.status)

    }
    catch(error){
        console.log(error)
    }
    
}

readFile()