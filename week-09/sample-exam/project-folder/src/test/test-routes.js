'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('what are you testing?', (t) => {
  request(app)
  .get('') //endpoint to test
  .expect('###')//status code expected (usually 200)
  .end((err, res)=> {
    if (err) throw err;
  })
  t.end()
})