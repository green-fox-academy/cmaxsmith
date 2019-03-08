'use strict';

function pageLoad(currentSource){
let postContainer = document.getElementById('post_container');
if (postContainer !== null) {
  postContainer.parentNode.removeChild(postContainer)
}
let newPostContainer = document.createElement('div')
newPostContainer.id="post_container";
document.body.appendChild(newPostContainer)
let postRequest = new XMLHttpRequest();
postRequest.open('GET', currentSource)
postRequest.onload = function() {
let postData = JSON.parse(postRequest.responseText);
postData.forEach(post => {
    const post_container = document.getElementById('post_container');
    let newDiv = document.createElement('div');
    newDiv.className="posts";
    let newFooter = document.createElement('div');
    newFooter.className="footer";
    let newTitle = document.createElement('h2');
    newTitle.className = "postTitle"
    newTitle.innerText = post.post_title;
    let newContent = document.createElement('p');
    newContent.className = "postContent"
    newContent.innerText = post.content;
    let newUserLink = document.createElement('a')
    newUserLink.className = "username"
    newUserLink.innerText = post.user_id;
    let newTime = document.createElement('p')
    newTime.className = "timestamp";
    newTime.innerText = post.timestamp;
    let newScoreDiv = document.createElement('div');
    newScoreDiv.className = "score_container";
    let newScoreVal = document.createElement('div')
    newScoreVal.className = "score_value"
    newScoreVal.innerText = post.score;
    post_container.appendChild(newDiv).appendChild(newTitle);
    newDiv.appendChild(newScoreDiv);
    newScoreDiv.appendChild(newScoreVal);
    newDiv.appendChild(newContent);
    newDiv.appendChild(newFooter);
    newFooter.appendChild(newUserLink);
    newFooter.appendChild(newTime);
    
  });
}
postRequest.send();
}

pageLoad('http://localhost:3000/posts')

function sortByTime (category, order){
  pageLoad(`http://localhost:3000/sortBy${category}${order}`)
}

let timeDescBtn = document.getElementById('time-desc')
timeDescBtn.addEventListener("click", ()=>sortByTime('time', 'desc'))

let timeAscBtn = document.getElementById('time-asc')
timeAscBtn.addEventListener("click", ()=>sortByTime('time','asc'))

let leastPopBtn = document.getElementById('pop-asc')
leastPopBtn.addEventListener("click", ()=>sortByTime('pop','asc'))

let mostPopBtn = document.getElementById('pop-desc')
mostPopBtn.addEventListener("click", ()=>sortByTime('pop','desc'))

