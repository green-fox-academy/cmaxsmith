'use strict';
    
var promise = new Promise(function (fulfill, reject) {
  setTimeout(()=> {
    reject(new Error ('REJECTED!'))
  }, 300)
});

// then(onfulfilled?: (value: any) => any, onrejected?: (reason: any) => PromiseLike<never>): Promise<any>

promise.then(()=>{}, onReject);

function onReject (error) {
  console.log(error.message)
}


    