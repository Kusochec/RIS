const fs = require('fs');
const path = require('path');

function Create() {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');
  const fileContent = 'I am fresh and young';

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error('Error: FS operation failed');
      return;
    }

    console.log('File created successfully');
  });
}

Create();