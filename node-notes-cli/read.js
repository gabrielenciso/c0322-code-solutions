function read() {
  const json = require('./data.json');
  for (const entry in json.notes) {
    console.log(`${entry}: ${json.notes[entry]}`);
  }
}

module.exports = read;
