'use strict';

import { Apple } from './apple'

let test = require('tape');

test('Return apple string', t => {
  let fruit = new Apple('apple');

  t.equal(fruit.getApple(), 'apple');
  t.end();
})

