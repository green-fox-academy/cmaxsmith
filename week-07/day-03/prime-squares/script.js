// 1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
// 2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
// 3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//  - the timer should fire every 100ms
//  - the timer should stop when there are no more elements left to be colored

'use strict'

// console.log("javascript works!")
// let div = document.createElement('div')
// let sectionTag = document.querySelector('section')
// sectionTag.appendChild(div)

for (let i = 1; i <=100; i++) {
  let div = document.createElement('div');
  let sectionTag = document.querySelector('section');
  div.textContent= i;
  function primeColor() {
    if (isPrime(i)===true) {
      div.className = "prime";
    } else {
     div.className = "not-prime"
    }
  }
  sectionTag.appendChild(div)
  setTimeout(()=>primeColor(), 50*i)
}

function isPrime(input) {
  let prime = true;
  for (let i = 2; i < Math.sqrt(input); i++) {
    if (input % i == 0) {
      prime = false;
      break;
    }
  }
return prime && (input >1)
}








