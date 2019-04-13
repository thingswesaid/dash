// const express = require('express');
// const http = require('http');
// const path = require('path');

// let app = express();

// const port = process.env.PORT || '8080';
// const server = http.createServer(app);

// app.use(express.static(path.join(__dirname, '../build')));
// app.set('port', port);

// server.listen(port, () => console.log(`Running on localhost:${port}`));

const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const port = process.env.PORT || '8080';
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

server.listen(port, () => console.log(`Running on localhost:${port}`));