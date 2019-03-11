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
    newcategory.className = "visible category"
    newpublisher.innerHTML = ourData[i].pub_name;
    newpublisher.className = "visible publisher"
    newprice.innerHTML = ourData[i].book_price;
    newprice.className = "visible price";
    tableBody.appendChild(newtr).appendChild(newbookname);
    tableBody.appendChild(newtr).appendChild(newauthorname);
    tableBody.appendChild(newtr).appendChild(newcategory);
    tableBody.appendChild(newtr).appendChild(newpublisher);
    tableBody.appendChild(newtr).appendChild(newprice);
    
    
  }
}
ourRequest.send()

let params = (new URL(document.location)).searchParams;

let categoryQ= params.get("category");
let publisherQ = params.get("publisher");
let pltQ = params.get("plt");
let pgt = params.get("pgt")


let catList = document.getElementsByClassName('category');

let pubList = document.getElementsByClassName('publisher');
console.log(pubList)

let priceList = document.getElementsByClassName('price');
console.log(priceList)

