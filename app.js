const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const dataSource = require('./dataSource.js');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/directory/', function (req, res) {
  // res.send(dataSource);
  res.render('directory', dataSource);
});

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
