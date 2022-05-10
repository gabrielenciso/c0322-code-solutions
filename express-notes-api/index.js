const express = require('express');
const app = express();
const fs = require('fs');
const json = require('./data.json');

app.get('/api/notes', (req, res) => {
  const notes = json.notes;

  const notesArray = [];
  for (const id in notes) {
    notesArray.push(notes[id]);
  }

  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const notes = json.notes;
  const noteId = Number(req.params.id);

  if (noteId < 0) {
    res.status(400).send({ error: 'invalid id: must be a positive integer' });
  } else if (!notes[noteId]) {
    res.status(404).send({ error: `no entry with the id ${noteId}` });
  } else {
    res.status(200).json(notes[noteId]);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const newEntry = req.body;

  if (!newEntry.content) {
    res.status(400).send({ error: 'content property not included' });
  } else {
    const noteId = json.nextId;
    newEntry.id = noteId;
    json.notes[noteId] = newEntry;
    json.nextId++;

    const editJSON = JSON.stringify(json, null, 2);
    fs.writeFile('./data.json', editJSON, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occured' });
      } else {
        res.status(201).json(newEntry);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteId = Number(req.params.id);

  if (deleteId < 0) {
    res.status(400).send({ error: 'invalid id: must be a positive integer' });
  } else if (!json.notes[deleteId]) {
    res.status(404).send({ error: `no entry with id ${deleteId}` });
  } else {

    delete json.notes[deleteId];
    const editJSON = JSON.stringify(json, null, 2);

    fs.writeFile('./data.json', editJSON, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occured' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const editId = Number(req.params.id);
  const editEntry = req.body;

  if (editId < 0 || Object.keys(editEntry).length === 0) {
    res.status(400).send({ error: 'invalid id: must be a positive integer | content property not included' });
  } else if (!(json.notes[editId]) && Object.keys(editEntry).length !== 0) {
    res.status(404).send({ error: `no entry with id ${editId}` });
  } else {

    json.notes[editId].content = editEntry.content;
    const editedNote = json.notes[editId];
    const editJSON = JSON.stringify(json, null, 2);
    fs.writeFile('./data.json', editJSON, 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occured' });
      } else {
        res.status(200).json(editedNote);
      }
    });
  }

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to port 3000');
});
