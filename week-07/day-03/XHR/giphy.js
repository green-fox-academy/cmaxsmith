'use strict';
const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

// let data = req.body // 


app.use('/assets', express.static('assets'));

app.use(express.json()); //middleware for POST

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});