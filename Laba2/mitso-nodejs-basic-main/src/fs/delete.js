const fs = require('fs');

    fs.unlink(__dirname +'/files/fileToRemove.txt', (err) => {
        if (err) {
          console.error('FS operation failed:', err);
          return;
        }  
    });

