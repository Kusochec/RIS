const fs = require('fs');

    fs.readFile('./files/fresh.txt', 'utf-8', (err, data) =>{
        err ? console.log(err):null;

fs.mkdir('./src/fs/files_copy', () => {

    fs.writrFile ('./src/fs/files_copy/fresh.txt', `${data}`, (error) =>{
error ? console.log(error):null;

});
});
}); // Write your code here 


