const fs = require('fs');

const err =fs.existsSync(__dirname +'/files/properFilename.md')
if(err){
    throw new Error('FS operation failed: File already exists');
}

fs.rename(__dirname +'/files/wrongFilename.txt', __dirname +'/files/properFilename.md', (err) => {
    err ? console.error(`FS operation failed: ${err}`):null;
console.log('File renamed successfully');    
});

 


