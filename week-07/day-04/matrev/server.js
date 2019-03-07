'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
app.use(express.json()); //for post methods to know what is the body

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

//error handling
conn.connect((err)=> {
  if(err) {
    console.log('Error connecting to DB')
    console.error();
    return;
  }
  console.log('DB is connected');
});
// conn.end();


app.get('/allratings', (req, res) => {
  conn.query('SELECT * FROM rating', (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(); //there is a server/database error
      return;
    }
    res.send(rows);
    console.log(rows);
  });
});

app.post('/newtask', (req, res) => {
  let SQL = `INSERT INTO rating (rID, stars) VALUES 
  ('${req.body.title}', '${req.body.done}');`;
  conn.query(SQL, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(); //there is a server/database error
      return;
    }
    conn.query(`SELECT * FROM rating WHERE id= ${rows.insertId};`, (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send();
        return;
      };
      res.send(rows);
    })
  })
})

app.listen(PORT, ()=> {
  console.log(`Server is running at ${PORT}`)
});
