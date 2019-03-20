'use strict';

const URL = 'http://localhost:3000/game'
const getCredentials = {
  method: 'GET',
  headers: {
    "Content-Type" : "application/json"
  },
}


function makeAQuestion () {
fetch('http://localhost:3000/api/questions', getCredentials)
  .then(response=>response.json())
  .then(myJson=>questionSelect(myJson));
}


let array = [];
function questionSelect(data) {
  function numGen(length){
    let random = Math.floor(Math.random()*(length)+1);
    if (array.includes(random)) {
      numGen(length)
    } else {
    array.push(random);
    return random;}
  }
  let index = numGen(data.length)
  console.log(index)

  // console.log(data[0])
  // console.log(data[1])
  // console.log(data[2])
  // console.log(data[3])
  // console.log(data[4])
  // console.log(data[5])
  // console.log(data[6])
  // console.log(data[7])
  // console.log(data[8])
  // console.log(data[9])

} 


let button = document.querySelector('button');
button.addEventListener("click", ()=>{
  makeAQuestion()
})
