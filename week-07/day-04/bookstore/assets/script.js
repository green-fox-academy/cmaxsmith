'use strict';

let ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:3000/bookinfo');
ourRequest.onload = function() {
  let ourData=JSON.parse(ourRequest.responseText);
  let tableBody = document.querySelector('tbody');
  for (let i = 0; i < ourData.length; i++) {
    let newtr = document.createElement('tr');
    let newbookname = document.createElement('td');
    let newauthorname = document.createElement('td');
    let newcategory = document.createElement('td');
    let newpublisher = document.createElement('td');
    let newprice = document.createElement('td');
    newbookname.innerHTML = ourData[i].book_name;
    newauthorname.innerHTML = ourData[i].aut_name;
    newcategory.innerHTML = ourData[i].cate_descrip;
    newpublisher.innerHTML = ourData[i].pub_name;
    newprice.innerHTML = ourData[i].book_price;
    tableBody.appendChild(newtr).appendChild(newbookname);
    tableBody.appendChild(newtr).appendChild(newauthorname);
    tableBody.appendChild(newtr).appendChild(newcategory);
    tableBody.appendChild(newtr).appendChild(newpublisher);
    tableBody.appendChild(newtr).appendChild(newprice);
    
    
  }
}

ourRequest.send()

// let tableBody = document.querySelector('tbody')
// let newtr = document.createElement('tr');
// let newtd = document.createElement('td')
// newtd.innerHTML="i work!"
// tableBody.appendChild(newtr).appendChild(newtd)
// newtd.innerHTML="i also work!"
// tableBody.appendChild(newtr).appendChild(newtd)

// 
