const fs = require('fs');
const randNum = Math.random().toString() + '\n';

fs.writeFile('random.txt', randNum, 'utf8', err => {
  if (err) throw err;
});
