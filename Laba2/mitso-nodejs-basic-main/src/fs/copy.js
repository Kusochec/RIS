const fs = require('fs');

    fs.readFile('./src/fs/files/fresh.txt', 'utf-8', (err, data) =>{
        err ? console.log(err):null;
        console.log(data);
}); // Write your code here 


