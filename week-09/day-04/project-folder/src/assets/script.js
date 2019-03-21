'use strict';

const URL = 'http://localhost:3000/game'
const getCredentials = {
  method: 'GET',
  headers: {
    "Content-Type" : "application/json"
  },
}


function callAQuestion () {
fetch('http://localhost:3000/api/game', getCredentials)
  .then(response=>response.json())
  .then(makeAQuestion)
}


let button = document.querySelector('button');
button.addEventListener("click", ()=>{
  callAQuestion()
})

function makeAQuestion(data){
  clearQuestion()
  let qBox = document.querySelector('.question_box');
  let qHead = document.createElement('h');
  qHead.innerText = data[0].question;
  qBox.appendChild(qHead);
  data.forEach((answer)=> {
    let option = document.createElement('p')
    option.innerText = answer.answer
    if (answerChecker(answer.is_correct)){
      option.className="correct";
    } else {
      option.className="incorrect";
    }
    option.addEventListener("click", ()=>{
      if (option.className==="correct"){
        scoreNum++;
        score.innerText=scoreNum;
      } else {alert('incorrectiez')}
    })
    qBox.appendChild(option)
  })
}

function clearQuestion(){
  let qBox = document.querySelector('.question_box');
  while (qBox.firstChild) {
    qBox.removeChild(qBox.firstChild)
  }
}

function answerChecker(value){
  if (value === 0) {
    return false
  } else {
    return true
  }
}

let score = document.querySelector('.score_value')
let scoreNum = Number(score.innerText)  


