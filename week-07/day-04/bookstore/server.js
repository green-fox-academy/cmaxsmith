'use strict';
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
app.use(express.json());

app.use('/assets', express.static('assets'));

app.listen(PORT, ()=> {
  console.log(`Server is running at ${PORT}`)
})

const conn =mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bookinfo"
});

conn.connect((err)=> {
  if(err) {
    console.log('Error connecting to DB')
    console.error();
    return
  }
  console.log('DB is connected');
});


app.get('/books', (req, res) => {
  res.sendFile('/Users/maxsmith/Desktop/greenfox/week-07/day-04/bookstore/index.html');
});



app.get('/bookinfo', (req, res)=> {
  conn.query(`select book_name, aut_name, cate_descrip, pub_name, book_price from book_mast left join author on book_mast.aut_id = author.aut_id LEFT JOIN publisher on book_mast.pub_id = publisher.pub_id LEFT JOIN category on book_mast.cate_id = category.cate_id`, (err, rows)=> {
    if(err) {
      console.log(err);
      res.status(500).send();
      return;
    }
    res.send(rows);
  });
});