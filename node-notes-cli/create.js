const fs = require('fs');

function create() {
  let json = require('./data.json');
  const newEntry = process.argv[3];
  json.notes[json.nextId] = newEntry;
  json.nextId++;
  json = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', json, 'utf8', err => {
    if (err) throw err;
  });
}

module.exports = create;
