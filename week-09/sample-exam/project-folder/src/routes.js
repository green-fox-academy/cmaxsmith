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
  let url = req.body.url;
  let alias = req.body.alias
  let object = {
    "url" : url,
    "alias": alias
  }
  res.send(object)
})


// It should respond with the stored entries in the following JSON format
// Note that the secret code is not included
app.get('/api/links', (req, res)=> {
  console.log('fetched')

})

// If the alias exists it should increment the hit count and redirect to the URL otherwise respond with 404 status code
app.get('/a/:alias', (req, res)=> {

})


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
