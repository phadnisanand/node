const express = require('express');
const app = express();
const port = 3000;

// This route path will match "GET /"
app.get('/', function (req, res) {
  res.send('Hello World!')
});

// This route path will match "POST /"
app.post('/', function (req, res) {
  res.send('Got a POST request')
});

// This route path will match "PUT /user"
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
});

// This route path will match "DELETE /user"
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
});

// This route path will match "GET /acd" and "GET /abcd".
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
});

// This route path will match "GET /abcd", "GET /abbcd", "GET /abbbcd", and so on.
app.get('/ab+cd', function (req, res) {
  res.send('ab+cd')
});

// This route path will match GET request, anything with an 'a' in it.
app.get(/a/, function (req, res) {
  res.send('/a/')
});

// This route path will match GET request, like butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
});

// This route contains Route parameters.
// Route parameters are named URL segments that are used to capture the values specified at their position in the URL.
// The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send('User ID: ' + req.params.userId + ', Book ID: ' + req.params.bookId);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
