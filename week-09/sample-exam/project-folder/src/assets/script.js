'use strict';

let button = document.querySelector('button')
button.addEventListener("click", (e)=>{
  e.preventDefault()
  bodyCreator()
    .then(object=>postCredentials(object))
    .then(creds=>postURL(creds))
})

function postCredentials(data){
  let creds = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json'
    }
  }
  return creds
}

let form = document.querySelector('form')
function bodyCreator(){
  return new Promise((resolve, reject)=> {
    let url = form.url.value;
    let alias = form.alias.value;
    let object = {
      "url" : url,
      "alias" : alias
    }
    resolve(object)
  })
}


function postURL(credentials){
  fetch('http://localhost:3000/test', credentials)
    .then(response=>response.status)
    //returns the status 
}

function statusCheck(status) {
  if (status===200){
    console.log('working well!')
  } else {
    console.log('not working')
  }
}
