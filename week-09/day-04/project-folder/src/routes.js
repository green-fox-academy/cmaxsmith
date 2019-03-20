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
  database: 'quiz'
});

app.get('/', (req, res) => {
});

//It should render a static HTML, as a game page.
app.get('/game', (req, res)=>{
  res.sendFile(path.join(__dirname, '/index.html'))

})

//It should render a static HTML, as a manage questions page.
app.get('/questions', (req, res)=>{
  res.sendFile(path.join(__dirname, '/questions.html'))

})

//This endpoint should return a random question with its answers.
app.get('/api/game', (req, res)=> {

})

//This endpoint should return all the questions.
app.get('/api/questions', (req, res)=> {
  conn.query(`SELECT * FROM questions`, (err, rows)=>{
    if (err){
      console.log(err);
      res.status(500).send();
      return;
    };
    res.send(rows);
  });
});

//If you fill the form and click on the submit button, it should add a new question and its answers
app.post('/api/questions', (req, res)=> {

})

// If you fill the form and click on the submit button, it should add a new question and its answers
app.delete('/api/questions/:id')

module.exports = app
