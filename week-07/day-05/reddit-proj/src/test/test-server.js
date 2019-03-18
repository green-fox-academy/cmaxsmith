'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('posts endpoint exists', (t)=>{
  request(app)
  .get('/posts')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  })
  t.end()
})

test('sortByTimeAsc works', (t)=> {
  request(app)
  .get('/sortByTimeAsc')
  .expect(200)
  .end((err, res)=> {
    if (err) throw ('this dont work');
  })
  t.end()
})

test('/makepost', (t)=> {
  request(app)
  .put('/makepost')
  .expect(200)
  .end((err, res) => {
    if (err) throw err
  })
  t.end()
})