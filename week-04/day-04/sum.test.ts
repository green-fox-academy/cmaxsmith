'use strict';
import { Math } from './sum';

let test = require('tape');

let emptyList = new Math([]);
let oneElement = new Math ([1]);
let intList = new Math ([1, 2, 3, 4]);
let nullList = new Math ([null]);


test('Sum all numbers in an array together', t => {

  t.equal (emptyList.sum(), 1)
  t.end();
})



