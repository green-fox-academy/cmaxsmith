'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

const todos = [
  'get up', 'survive', 'go back to bed'
]

app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})

app.get('/', (req, res) => {
  res.render('home', {
    list: todos
  });
})