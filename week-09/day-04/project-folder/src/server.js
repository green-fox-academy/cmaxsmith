'use strict'
const PORT = 3000;
const routes = require('./routes');
const mysql = require('mysql');

routes.listen(PORT, ()=> {
  console.log(`Server is running at ${PORT}`)
});

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'quiz'
});

conn.connect((err) => {
  if(err) {
    console.log('Error connecting to DB')
    console.error();
  }
  console.log('DB is connected')
});
