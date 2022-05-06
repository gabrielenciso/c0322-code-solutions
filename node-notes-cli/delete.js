const fs = require('fs');

function deleteNote() {
  let json = require('./data.json');
  const deleteId = process.argv[3];
  delete json.notes[deleteId];
  json = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', json, 'utf8', err => {
    if (err) throw err;
  });
}

module.exports = deleteNote;
