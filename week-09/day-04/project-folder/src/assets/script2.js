'use strict'

const getCredentials = {
  method: 'GET',
  headers: {
    "Content-Type" : "application/json"
  },
}

function postCredentials(data) {
  let object = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type" : "application/json"
    },
  }
  return object
}

const deleteCredentials = {
  method: 'DELETE',
  headers: {
    "Content-Type" : "application/json"
  },
}

function postRequest(data) {
  fetch('http://localhost:3000/api/questions', postCredentials(data))
}

fetch('http://localhost:3000/api/questions', getCredentials)
  .then(response=>response.json())
  .then(data=>questionLister(data));

let table = document.querySelector('table');
function questionLister(data){
  data.forEach((question)=>{
    let newTR = document.createElement('tr');
    let newTDQ = document.createElement('td');
    newTDQ.className="question"
    let newTDE = document.createElement('td');
    newTDE.className="deleteBtn"
    newTDE.addEventListener("click", ()=> {
      deleteEntry(question.id)
      window.location.reload();
    })
    newTDQ.innerText= question.question;
    newTDE.innerText="delete";
    table.appendChild(newTR);
    newTR.appendChild(newTDQ);
    newTR.appendChild(newTDE);
  })
}

function objectMaker(){
  let form = document.querySelector('form')
  let radio1 = document.querySelector('#q1')
  let radio2 = document.querySelector('#q2')
  let radio3 = document.querySelector('#q3')
  let radio4 = document.querySelector('#q4')
  let qTitle = form.question.value
  let a1 = form.question_1.value
  let a2 = form.question_2.value
  let a3 = form.question_3.value
  let a4 = form.question_4.value
  radio1.value=a1;
  radio2.value=a2;
  radio3.value=a3;
  radio4.value=a4;
  let correctA = form.newAnswer.value

  let object = {
    "question" : qTitle,
    "answer_1" : a1,
    "answer_2" : a2,
    "answer_3" : a3,
    "answer_4" : a4,
    "correct" : correctA,
  }

return object ;
}


let submit = document.querySelector('#form_submit')
submit.addEventListener("click", ()=>{
 let data = objectMaker()
 postRequest(data)
})

function deleteEntry(id){
  fetch(`http://localhost:3000/api/questions/${id}`, deleteCredentials)
}