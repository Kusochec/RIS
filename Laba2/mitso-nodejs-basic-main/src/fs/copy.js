const fs = require('fs');
const {COPYFILE_EXCL} = fs.constants;
 
const h1 = (__dirname +'/files/');
const h2 = (__dirname +'/files_copy/');

fs.mkdir(__dirname +'/files_copy',COPYFILE_EXCL,(err)=>{
    err ? console.error(`FS operation failed: ${err}`):null;

 fs.readdir(__dirname +'/files',(err,data) => {
    err ? console.log(`FS operation failed: ${err}`):null;

    for (let i = 0; i <= data.length; i++) { 
       fs.copyFile(h1 + data[i], h2 + data[i], () =>{});
       //console.log(data[i] + ' sucsses')
      }
 })  
});

