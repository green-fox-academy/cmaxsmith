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
  questionCount().then(number=>numGen(number)).then(index=>
    conn.query(`SELECT * FROM questions LEFT JOIN answers on questions.id = answers.question_id WHERE questions.id = '${index}';`, (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).send();
        return;
      }
      let object ={
        "id": rows[0].question_id,
        "question" : rows[0].question,
        "answers" : [
          {
            "question_id": rows[0].question_id,
            "id": rows[0].id,
            "answer": rows[0].answer,
            "is_correct": rows[0].is_correct
          },
          {
            "question_id": rows[1].question_id,
            "id": rows[1].id,
            "answer": rows[1].answer,
            "is_correct": rows[1].is_correct
          },
          {
            "question_id": rows[2].question_id,
            "id": rows[2].id,
            "answer": rows[2].answer,
            "is_correct": rows[2].is_correct
          },
          {
            "question_id": rows[3].question_id,
            "id": rows[3].id,
            "answer": rows[3].answer,
            "is_correct": rows[3].is_correct
          },
        ]
      }
      res.send(object)
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
    let array = []
    rows.forEach((question)=>{
      let object = {
        "id" : question.id,
        "question" : question.question
      }
      array.push(object)

    })
    res.send(array);
  });
});

//If you fill the form and click on the submit button, it should add a new question and its answers
app.post('/api/questions', (req, res)=> {
  let question = req.body.question;
  let a1 = req.body.answer_1;
  let a2 = req.body.answer_2;
  let a3 = req.body.answer_3;
  let a4 = req.body.answer_4;
  let cA = req.body.correct;
  let ansArray = [a1, a2, a3, a4]
  function isCorrect(answer){
    if(answer===cA){
      return 1
    } else {
      return 0
    }
  }
  conn.query(`INSERT INTO questions (question) VALUES ("${question}")`, (err, rows)=>{
    if(err){
      console.log(err);
      res.status(500).send();
      return;
    }
    let newID = rows.insertId
    ansArray.forEach((answer)=>{
        conn.query(`INSERT INTO answers (answer, is_correct, question_id) VALUES ("${answer}", "${isCorrect(answer)}", "${newID}");`);
    })
  })
  let object = {
    "question": question,
    "answers": [
      {
        "answer_1": a1,
        "is_correct": isCorrect(a1),
      },
      {
        "answer_2": a2,
        "is_correct": isCorrect(a2),
      },
      {
        "answer_3": a3,
        "is_correct": isCorrect(a3),
      },
      {
        "answer_4": a4,
        "is_correct": isCorrect(a4),
      }
    ]
  }
  res.send(object)
})

// If you fill the form and click on the submit button, it should add a new question and its answers
app.delete('/api/questions/:id', (req, res)=> {
  let id = req.params.id;
  conn.query(`DELETE FROM questions WHERE id='${id}';`)
  conn.query(`DELETE FROM answers WHERE question_id='${id}';`)
})

const questionCount = ()=> {
  return new Promise ((resolve, reject) => 
    {conn.query(`SELECT * FROM questions`, (err, rows)=> {
      if (err) {
        console.log(err);
        reject (500);
        return;
      };
      let array = [];
      rows.forEach((question)=>{
        array.push(question.id)
      })
      resolve (array)
    });
    }
  )
}
questionCount()

function numGen(array){
  let random = Math.floor(Math.random()*(array.length));
  return array[random]
}



module.exports = app
