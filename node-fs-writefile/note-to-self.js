const fs = require('fs');
const notes = process.argv[2] + '\n';

fs.writeFile('note.txt', notes, 'utf8', err => {
  if (err) throw err;
});
