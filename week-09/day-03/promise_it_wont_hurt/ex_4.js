'use strict';

let promise = new Promise (function(fulfill, reject) {
fulfill('I FIRED')
reject(new Error('I DID NOT FIRE'))
});

promise.then(fulfill=>{console.log(fulfill)}, reject=>{console.log(onRejected(reject))})

function onRejected(error) {
  return error
};