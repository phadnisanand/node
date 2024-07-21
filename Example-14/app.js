var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
};

app.use(myLogger);

app.use('/users', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/users', function (req, res) {
    res.send('Hello User!')
});

app.listen(3000);
