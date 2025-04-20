require('dotenv').config();
let express = require('express');
let app = express();

console.log('Hello World');

app.use('/public', express.static(__dirname + '/public'));

// app.get('/', function(req, res) {
//   res.send('Hello Express');
// });

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', function(req, res) {
  let message = 'Hello json';
  // Log para debug no Render
  console.log('DEBUG MESSAGE_STYLE:', process.env.MESSAGE_STYLE);
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({ message });
});

module.exports = app;
