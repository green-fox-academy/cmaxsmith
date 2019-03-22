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
  database: 'sample'
});


// The main page should be rendered
// It should contain a form with two labels, two input fields and a submit button
// The form should be submitted to POST /api/links
// Based on the response display the error or the success scenario
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});


// If the alias is already in use respond with 400 status code
// Else
// Generate a secret code which is just a random 4-digit integer
// Store the entry in the database
// It should respond with the stored entry in the following JSON format
app.post('/api/links', (req, res)=> {
  const alias = req.body.alias;
  const url = req.body.url;
  conn.query(
    `SELECT * FROM shorturls WHERE alias = ?`,
    [alias || ''], 
    (err, rows) =>{
      if (err) {
        console.error(err);
      } else if (rows.length > 0) {
        res.status(400).send()
      } else {
        conn.query(
          `INSERT INTO shorturls (url, alias, secretCode) VALUES (?, ?, ?)`, 
          [url, alias, generateSecretCode()],
          (err, rows)=>{
            if (err) {
              console.error(err);
            } else {
              conn.query(
                `SELECT * FROM shorturls WHERE alias = ?`,
                [alias || ''],
                (err, rows)=> {
                  if(err){
                    console.error(err);
                  } else {
                    res.status(200).send(rows[0])
                  }
                },
              );
            }
          },
        );
      }
    },
  );
});


// It should respond with the stored entries in the following JSON format
// Note that the secret code is not included
app.get('/api/links', (req, res)=> {
  console.log('fetched')

})

// If the alias exists it should increment the hit count and redirect to the URL otherwise respond with 404 status code
app.get('/a/:alias', (req, res)=> {

})

app.post('/test', (req, res)=> {
  console.log('worked')
  let object = {
    "success": "success"
  }
  res.sendStatus(200)
})

//how to retrieve status on front-end using fetch for a post request


// The secret code should be in the request's body in JSON format
// {
//   "secretCode": 0483
// }
// If it doesn't exists respond with 404 status code
// If it exists but the provided secret code doesn't match respond with 403 status code
// If it exists and the provided secret code matches delete the entry from the database and respond with 204 status code
app.delete('/api/links/:id', (req, res)=> {


})

module.exports = app
