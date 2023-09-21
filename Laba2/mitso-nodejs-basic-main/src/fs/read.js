const fs = require('fs');

fs.readFile(__dirname +'/files/fileToRead.txt', 'utf-8',(err,data) =>{
    err ? console.error(`FS operation failed: ${err}`):null;
console.log(data);
})