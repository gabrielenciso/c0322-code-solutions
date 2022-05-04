const [, , ...fileNames] = process.argv;
const fs = require('fs');

function read(fileNames, i) {
  if (fileNames.length === i) {
    return;
  }

  fs.readFile(fileNames[i], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    read(fileNames, ++i);
  });
}

read(fileNames, 0);
