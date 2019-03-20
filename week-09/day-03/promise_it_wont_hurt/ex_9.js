'use strict';

// function add(){
//   return 5
// }

function double (value) {
  return value * 2
}

function print(value) {
  console.log(value)
}

// add(1,4).then(double).then(print)

let promise = new Promise ((fulfill, reject)=> {
  fulfill(5)
})


promise.then(double).then(print)

console.log(9)

