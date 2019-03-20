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

app.post('/api/links', (req, res)=> {
 const {url, alias } = req.body;
})

function isAliasAvailable(alias) {
  const aliases = getShortUrlByAlias(alias) || null;
  return aliases === null ? false : aliases.length === 0;
}

function getShortUrlByAlias(alias) {
  conn.query(
    `SELECT * FROM shorturls WHERE alias = ?`,
    [alias || ''],
    (err, rows) => {
      if (err) {
        console.error(err);
        return
      }
    }
  )
}


module.exports = app
