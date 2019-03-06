// 'use strict';
// const express = require('express');
// const app = express();
// const PORT = 8080;
// const path = require('path');

// app.use('/assets', express.static('assets'));

// app.use(express.json()); //middleware for POST

// app.listen(PORT, () => {
//   console.log(`Server is running at ${PORT}`)
// })

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.post('/arrays', (req, res) => {
//   console.log("trying this exercise")
//   console.log(req.body.what)
//   res.send(req.body.what)

// })

'use strict';
const express = require('express');
const app = express();
const PORT = 3010;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
  res.send('Array-handler exercise')
})

app.post('/arrays', jsonParser, (req, res) => {
  if (!req.body.what || !req.body.numbers) {
    res.json({
      error: 'Please provide what to do with the numbers!'
    })
  } else {
    let sumofArray = 0;
    req.body.numbers.forEach(element => {
      sumofArray += element;
    });
    let multiplOfArray = 1;
    req.body.numbers.forEach(element => {
      multiplOfArray *= element;
    });
    let doubledArray = req.body.numbers.map(element => {
      return element * 2;
    });
    if (req.body.what === 'sum') {
      res.json({
        "result": sumofArray,
      })
    } else if (req.body.what === 'multiply') {
      res.json({
        "result": multiplOfArray,
      })
    } else if (req.body.what === 'double') {
      res.json({
        "result": doubledArray,
      })
    }
  }

})

app.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}`)
})


