const fs = require('fs');

function update() {
  let json = require('./data.json');
  const editId = process.argv[3];
  const editedEntry = process.argv[4];
  json.notes[editId] = editedEntry;
  json = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', json, 'utf8', err => {
    if (err) throw err;
  });
}

module.exports = update;
