'use strict';



var promise = new Promise(function (fulfill, reject) {
  fulfill('SECRET VALUE');
});

// Introducing: Promise.resolve
// It does the exact same thing as above:

var promise2 = Promise.resolve('SECRET VALUE');


// Likewise...

var promise3 = new Promise(function (fulfill, reject) {
  reject(new Error('SECRET VALUE'));
});

var promise4 = Promise.reject(new Error('SECRET VALUE'));

promise4.catch(reject=> console.log(reject));