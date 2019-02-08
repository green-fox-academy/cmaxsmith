'use strict'

// function fib (num) {
//   let a = 1, b = 0, temp;

//   while (num >= 0) {
//     temp = a;
//     a = a + b;
//     b = temp;
//     num --
//   }

//   return b
// }

function fib (num) {
  if  (num <= 1) {
    return 1;
  } else {
    return fib(num -1) + fib(num -2)
  }
}

console.log(fib(5))

//-----------------

let test = require('tape');

test('does this output the fib number of given index?', t => {
  t.fail('this doesnt work')
  t.end();
})