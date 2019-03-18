'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../server');

test ('index exists', (t)=>{
  request(app)
  .get('/')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  })
})