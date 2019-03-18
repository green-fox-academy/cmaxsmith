'use strict'
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
// const bodyParser = require('body-parser')

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

//solution for bodyParser
app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use('/assets', express.static('assets'));
app.listen(PORT, ()=> {
  console.log(`Server is running at ${PORT}`)
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/send', (req, res) => {
res.end()
})

