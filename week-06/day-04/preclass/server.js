'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

//gives express permission to use this folder (gives access to the folder through http requests)
app.use('/assets', express.static('assets'));
console.log(express)



app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/about', (req, res) => {
  console.log(req.query);
  res.send(`<h1>This is about ${req.query.name} and ${req.query.day} </h1>`)
})

app.get('/contact/:id', (req, res) => {
  res.send(`<h1>${req.params.id}</h1>`);
})
