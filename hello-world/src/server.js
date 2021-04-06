const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', function (req, res) {
  const pathToFile = path.resolve(__dirname, '../dist/hello-world.html');
  const contentFromHtmlFile = fs.readFileSync(pathToFile, 'utf-8');

  res.send(contentFromHtmlFile);
});

app.listen(9001, function () {
  console.log('Application is running on http://localhost;9001');
});
