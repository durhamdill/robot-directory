const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const dataSource = require('./dataSource.js');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static(__dirname + '/public'));

app.get('/directory/', function (req, res) {
  res.render('directory', dataSource);
});

app.get('/directory/:id', function (req, res) {
  let userid = req.params.id-1;
  // let userindex= userid-1;
  res.render('profile', dataSource.users[userid]);
})

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
