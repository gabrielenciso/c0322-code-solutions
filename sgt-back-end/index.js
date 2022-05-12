const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
app.get('/api/grades', (req, res, next) => {

  const sql = `
  SELECT *
      FROM "grades"
  `;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res, next) => {
  if (!req.body.name || !req.body.course || !req.body.score || req.body.score < 0) {
    res.status(400).json({ error: 'missing name, course, or score | score must be a positive integer' });
    return;
  }

  // const score = String(req.body.score);
  const params = [req.body.name, req.body.course, req.body.score];

  const sql = `
  INSERT into "grades" ("name", "course", "score")
         values ($1, $2, $3)
    RETURNING *
  `;

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occured' });
    });

});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.insInteger(gradeId) || gradeId < 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to port 3000');
});
