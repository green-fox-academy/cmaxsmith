'use strict'
const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');

app.use(express.json());
app.use('/assets', express.static('assets'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: ''//name of database
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});


module.exports = app
