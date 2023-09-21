const fs = require('fs');

  fs.writeFile(__dirname +'/files/fresh.txt', 'I am fresh and young', (err ) => {
    err ? console.error(`FS operation failed: ${err}`):null;
    
    console.log('File created successfully');
  });


