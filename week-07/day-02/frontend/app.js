'use strict';
const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

// let data = req.body // 


app.use('/assets', express.static('assets'));

app.use(express.json()); //middleware for POST

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})



app.get('/doubling', (req, res) => {
  res.writeHead(200, {'Content-Type' : 'application/json'});
  const inputNumber = Number(req.query.input);
  let myObject;

  if (req.query.input === undefined) {
      myObject = {   
      error: 'Please provide an input!'
      }
  } else {
      myObject = {
        received:  inputNumber,
        result: inputNumber*2
      };}

  res.end(JSON.stringify(myObject));
})

app.get('/greeter', (req, res) => {
  res.writeHead(200, {'Content-Type' : 'application/json'});
  const name = req.query.name;
  const title = req.query.title;
  let myObject;

  if (req.query.name === undefined && req.query.title === undefined) {
      myObject = {   
      error: "Please provide both a name and a title!"
      }
  } else if (req.query.name === undefined && req.query.title !== undefined) {
      myObject = {
        error: "Please provide a name!",
      }
  } else if (req.query.title === undefined && req.query.name !==undefined) {
      myObject = {
        error:  "Please provide a title!"
      }
  } else {
      myObject = {
        welcome_message: "Oh, hi there " + name + ", my dear " + title
      };
  }

  res.end(JSON.stringify(myObject));
})

app.get('/appenda/:appendable?', (req, res) => {
  if (req.params.appendable === undefined) {
    res.status(404).send('Error! Page not found')
  } else {
    res.writeHead(200, {'Content-Type' : 'application/json'});
    const string = req.params.appendable;
  let myObject = {
    appended: string + 'a'
    }
  res.end(JSON.stringify(myObject))
  // res.send(myObject)
  }
})

app.post('/dountil/:action', (req, res) => {
  let bodyNumber = req.body.until;
  let output = {};

  if (req.params.action === "sum") {
    output = {
      result: 28,
    } 
  } else if (req.params.action === "factor") {
    output = {
      result: 24,
    }
  }
  res.send(output)
})

app.post('/testing', (req, res) => {
let firstNum = req.body.num1;
let secondNum = req.body.num2;
let sumOfNums = {
  result: firstNum + secondNum
}

let sumOfNumsParse = firstNum + secondNum;

res.json(sumOfNums)
res.end('result2 is ' + JSON.stringify(sumOfNumsParse))
res.send('result1 is ' + JSON.stringify(sumOfNumsParse))
})