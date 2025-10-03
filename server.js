const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${8080}`);
});