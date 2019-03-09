'use strict'
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const path = require('path');

app.use(express.json());
app.use('/assets', express.static('assets'));
app.listen(PORT, ()=> {
  console.log(`Server is running at ${PORT}`)
});

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit'
});

conn.connect((err) => {
  if(err) {
    console.log('Error connecting to DB')
    console.error();
  }
  console.log('DB is connected')
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});

app.get('/posts', (req, res) => {
  conn.query(`SELECT * FROM posts`, (err, rows)=> {
    if (err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
  })
})

app.get('/sortByTimeDesc' ,(req, res) => {
  conn.query(`SELECT * FROM posts ORDER BY timestamp desc`, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return
    }
    res.send(rows);
  })
})

app.get('/sortByTimeAsc', (req, res)=> {
  conn.query(`SELECT * FROM posts ORDER BY timestamp asc`, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return
    }
    res.send(rows);
  })
})

app.get('/sortByPopAsc', (req, res)=> {
  
  conn.query(`SELECT * FROM posts ORDER BY score asc`, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return
    }
    res.send(rows);
  })
})

app.get('/sortByPopDesc', (req, res)=> {
  conn.query(`SELECT * FROM posts ORDER BY score desc`, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send();
      return
    }
    res.send(rows);
  })
})

//   // conn.query(`UPDATE posts SET score = score + 1 WHERE post_id = ${post_id}`)

app.put('/upvote/:id', (req, res) => {
  let post_id = req.params.id;
  conn.query(`UPDATE posts SET score = score + 1 WHERE post_id = ${post_id}`)
  res.end()
})

app.put('/downvote/:id', (req, res) => {
  let post_id = req.params.id;
  conn.query(`UPDATE posts SET score = score - 1 WHERE post_id = ${post_id}`)
  res.end()
})

app.post('/makepost', (req, res)=> {
  let title = req.body.title
  let content = req.body.content;
  console.log(title)
  res.end()
})

