const fs = require('fs');

fs.readdir(__dirname +'/files',(err,data) => {
    err ? console.log(`FS operation failed: ${err}`):null;
    console.log(data);
 })  