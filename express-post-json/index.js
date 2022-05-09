const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const arrGrades = [];
  for (const grade in grades) {
    arrGrades.push(grades[grade]);
  }

  res.json(arrGrades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body.nextId = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.status(201).send(req.body);
});

app.listen(3000, () => {
  console.log('listening to port 3000');
});
