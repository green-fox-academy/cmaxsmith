'use strict';
const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  console.log(req.query.name)

  if (req.query.name === undefined) 
  {res.render('home', {
      name: 'Guest',
    })
  } else {
  res.render('home', {
    name: req.query.name,
    })
  }
})
