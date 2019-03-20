'use strict';

const button = document.querySelector('button');
let URL = 'http://api.icndb.com/jokes/random'

button.addEventListener("click", jokeMaker)

function jokeMaker () {
  fetch(URL)
  .then(response=>response.json())
  .then(myJson=>printer(myJson))
  .catch(err=>console.log(err))
}

function printer(data) {
  let joke = data.value.joke;
  let div = document.querySelector('div');
  let p = document.createElement('p')
  p.innerText = joke
  div.appendChild(p)
}