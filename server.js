const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Chores');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});