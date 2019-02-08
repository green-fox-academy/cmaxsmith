'use strict';

import { anagram } from './anagram'

let test = require('tape');

test ('Return true if anagram, false if not', t => {
  let case1 = anagram('hello', 'olleh');
  t.equal(case1, true);
  t.end();
})
