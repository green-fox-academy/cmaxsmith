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
  questionCount.then(numGen).then(index=>
    conn.query(`SELECT * FROM questions LEFT JOIN answers on questions.id = answers.question_id WHERE questions.id = '${index}';`, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      res.send(rows)
    })
  )
});

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
app.put('/api/questions', (req, res)=> {
  let question = req.body.question;
  let a1 = req.body.answer_1;
  let a2 = req.body.answer_2;
  let a3 = req.body.answer_3;
  let a4 = req.body.answer_4;
  let cA = req.body.correct;
  let ansArray = [a1, a2, a3, a4]
  
  conn.query(`INSERT INTO questions (question) VALUES ('${question}')`, (err, rows)=>{
    if(err){
      console.log(err);
      res.status(500).send();
      return;
    }
    let newQ = rows.insertId
    console.log(newQ)
  })
  // ansArray.forEach((answer)=>{
  //   if (answer !== cA) {
  //     conn.query(`INSERT INTO answers (answer, is_correct, question_id) VALUES ('${answer}', '0', '${question_id}');`);
  //   } else {
  //     conn.query(`INSERT INTO answers (answer, is_correct, question_id) VALUES ('${answer}', '1', '${question_id}');`);
  //   }
  // })
})


// If you fill the form and click on the submit button, it should add a new question and its answers
app.delete('/api/questions/:id')

let questionCount = new Promise ((resolve, reject) => 
  {conn.query(`SELECT * FROM questions`, (err, rows)=> {
    if (err) {
      console.log(err);
      reject (500);
      return;
    };
    resolve (rows.length)
  });
})

function numGen(length){
  let random = Math.floor(Math.random()*(length)+1);
  return random;}

async function idCounter(question){
  let id = new Promise((resolve, reject)=> {
    conn.query(`SELECT id FROM questions WHERE question = '${question}';`, (err, rows)=>{
      if (err) {
        console.log(err);
        reject(500);
        return;
      }
      resolve(rows)
    })
  })
}
let question1 = "Who played Neo in The Matrix?";


module.exports = app
