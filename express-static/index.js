const express = require('express');
const path = require('path');

const app = express();
const joinPath = path.join(__dirname, 'public');
const staticPath = express.static(joinPath);

app.use(staticPath);

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
