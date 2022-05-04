const [, , ...fileNames] = process.argv;
const fs = require('fs');
// const files = [];
// for (let i = 0; i < fileNames.length; i++) {
//   fs.readFile(fileNames[i], 'utf8', (err, data) => {
//     if (err) throw err;
//     files.splice(i, 0, data);
//   });
//   // console.log(files[i]);
// }

for (let i = 0; i < fileNames.length; i++) {
  read(fileNames[i], data => { console.log(data); });
}

function read(fileName, callback) {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    callback(data);
  });
}
