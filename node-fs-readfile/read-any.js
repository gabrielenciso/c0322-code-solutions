const fileName = process.argv[2];

const fs = require('fs');
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
