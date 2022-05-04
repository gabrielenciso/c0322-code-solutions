const fs = require('fs');
const fileToCopy = process.argv[2];
const copyTo = process.argv[3];

fs.readFile(fileToCopy, 'utf8', (err, text) => {
  if (err) throw err;
  fs.writeFile(copyTo, text, 'utf8', err => {
    if (err) throw err;
  });
});
