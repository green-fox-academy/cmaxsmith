'use strict';

function attachTitle(value) {
  return 'DR. ' + value;
}

let promise = new Promise((fulfill, reject)=>{
  fulfill('MANHATTAN');
})

promise.then(attachTitle).then(console.log);
