const express = require('express');
const app = express();

app.get('/', function(req, res) {
  return res.send('Hello World!');
});

app.get('/user/:name', function(req, res) {
  return res.send(`Hello ${req.params.name}`);
});

app.listen(8000, function() {
  console.log('Server is listening on port 8000');
});
