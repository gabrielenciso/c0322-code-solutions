const actions = process.argv[2];

const read = require('./read');
const create = require('./create');
const deleteNote = require('./delete');
const update = require('./update');

if (actions === 'read') {
  read();
} else if (actions === 'create') {
  create();
} else if (actions === 'delete') {
  deleteNote();
} else if (actions === 'update') {
  update();
}
