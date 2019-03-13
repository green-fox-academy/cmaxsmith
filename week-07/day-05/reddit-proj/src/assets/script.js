'use strict';

function pageLoad(currentSource) {
  let postContainer = document.getElementById('post_container');
  if (postContainer !== null) {
    postContainer.parentNode.removeChild(postContainer)
  }
  let newPostContainer = document.createElement('div')
  newPostContainer.id = "post_container";
  document.body.appendChild(newPostContainer)
  let postRequest = new XMLHttpRequest();
  postRequest.open('GET', currentSource, true)
  postRequest.onload = function () {
    let postData = JSON.parse(postRequest.responseText);
    postData.forEach(post => {
      const post_container = document.getElementById('post_container');
      let newDiv = document.createElement("div")
      newDiv.className = "posts";
      newDiv.id = post.post_id;
      let innerCard = document.createElement('div');
      innerCard.className="innerCard";
      let frontCard = document.createElement('div');
      frontCard.className ="frontCard";
      let backCard = document.createElement('div');
      backCard.className = "backCard"
      let contentDiv= document.createElement('div')
      contentDiv.className="contentDiv";
      let contentDivB= document.createElement('div')
      contentDivB.className="contentDivBack";
      let newFooter = document.createElement('div');
      newFooter.className = "footer";
      let flipDiv = document.createElement('div')
      flipDiv.className = "flipDiv"
      flipDiv.addEventListener("click", () => {
        innerCard.classList.toggle('do-flip')
      })
      flipDiv.addEventListener("click", ()=> {commentLoader(post.post_id)})
      let flipDivB = document.createElement('div')
      flipDivB.className = "flipDivB"
      flipDivB.addEventListener("click", () => {
        innerCard.classList.toggle('do-flip')
      })
      flipDivB.addEventListener("click", ()=>{
        commentDeleter(post.post_id)
      })
      let newTitle = document.createElement('h2');
      newTitle.className = "postTitle";
      newTitle.innerText = post.post_title;
      let newContent = document.createElement('p');
      newContent.className = "postContent";
      newContent.innerText = post.content;
      let newUserLink = document.createElement('a')
      newUserLink.className = "username";
      newUserLink.innerText = post.user_id;
      let newTime = document.createElement('p')
      newTime.className = "timestamp";
      newTime.innerText = post.timestamp;
      let newScoreDiv = document.createElement('div');
      newScoreDiv.className = "score_container";
      let newScoreVal = document.createElement('div');
      newScoreVal.className = "score_value";
      newScoreVal.innerText = `${post.score}`;
      let newUpVote = document.createElement('div');
      newUpVote.className = "upvote";
      newUpVote.addEventListener("click", ()=> upVote(`${post.post_id}`))
      let newDownVote = document.createElement('div');
      newDownVote.className = "downvote";
      newDownVote.addEventListener("click", ()=> downVote(`${post.post_id}`));
      let newDelete = document.createElement('button');
      newDelete.className="deleteBtn";
      newDelete.innerText="delete post";
      newDelete.addEventListener("click", ()=> {
        deletePost(`${post.post_id}`)
      })
      post_container.appendChild(newDiv);
      newDiv.appendChild(innerCard);
      innerCard.appendChild(frontCard);
      frontCard.appendChild(newScoreDiv);
      newScoreDiv.appendChild(newUpVote);
      newScoreDiv.appendChild(newDownVote);
      newScoreDiv.appendChild(newScoreVal);
      frontCard.appendChild(contentDiv);
      frontCard.appendChild(flipDiv);
      contentDiv.appendChild(newTitle);
      contentDiv.appendChild(newFooter);
      newFooter.appendChild(newUserLink);
      newFooter.appendChild(newTime);
      newFooter.appendChild(newDelete);

      innerCard.appendChild(backCard);
      backCard.appendChild(contentDivB);
      contentDivB.appendChild(newContent)
      backCard.appendChild(flipDivB)
    


      // post_container.appendChild(newDiv)
      // newDiv.appendChild(newScoreDiv);
      // newDiv.appendChild(contentDiv);
      // contentDiv.appendChild(newTitle )
      // newScoreDiv.appendChild(newScoreVal);
      // newScoreDiv.appendChild(newUpVote);
      // newScoreDiv.appendChild(newDownVote)
      // contentDiv.appendChild(newContent);
      // contentDiv.appendChild(newFooter);
      // newFooter.appendChild(newUserLink);
      // newFooter.appendChild(newTime);
      // newFooter.appendChild(newDelete)
    });
  }
  postRequest.send();
}

let currentLink = `http://localhost:3000/posts`
pageLoad('http://localhost:3000/posts')

function sortByCategory(category, order) {
  currentLink = `http://localhost:3000/sortBy${category}${order}`
  pageLoad(currentLink)
}




let timeDescBtn = document.getElementById('time-desc')
timeDescBtn.addEventListener("click", () => sortByCategory('time', 'desc'))

let timeAscBtn = document.getElementById('time-asc')
timeAscBtn.addEventListener("click", () => sortByCategory('time', 'asc'))

let leastPopBtn = document.getElementById('pop-asc')
leastPopBtn.addEventListener("click", () => sortByCategory('pop', 'asc'))

let mostPopBtn = document.getElementById('pop-desc')
mostPopBtn.addEventListener("click", () => sortByCategory('pop', 'desc'))


function upVote (post_id) {
  let currentPost = document.getElementById(post_id)
  let currentScore =currentPost.getElementsByClassName("score_value")[0]
  let scoreNumber = currentScore.innerHTML
  currentScore.innerHTML = Number(scoreNumber) + 1;
  
  let http = new XMLHttpRequest();
  let url = `http://localhost:3000/upvote/${post_id}`;
  http.open('PUT', url);
  // http.setRequestHeader("Content-type", "application/json")
  http.send()

}

function downVote (post_id) {
  let currentPost = document.getElementById(post_id)
  let currentScore =currentPost.getElementsByClassName("score_value")[0]
  let scoreNumber = currentScore.innerHTML
  currentScore.innerHTML = Number(scoreNumber) - 1;
  let http = new XMLHttpRequest();
  let url = `http://localhost:3000/downvote/${post_id}`;
  http.open('PUT', url);
  // http.setRequestHeader("Content-type", "application/json")
  http.send()
}


let submitBtn = document.getElementById("submit_post")
submitBtn.addEventListener("click", (e)=>{
  e.preventDefault()
  let form = document.getElementById('newPost')
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;
  let http = new XMLHttpRequest();
  let URL = "http://localhost:3000/makepost"
  http.open("PUT", URL);
  http.setRequestHeader("Content-Type", "application/json")
  http.send(JSON.stringify({"title" : `${title}`, 
  "content" : `${content}`}))
  form.reset();
  pageLoad(currentLink)
  
})

function deletePost(post_id) {
  let http = new XMLHttpRequest();
  let url = `http://localhost:3000/deletepost/`;
  http.open('PUT', url);
  http.setRequestHeader("Content-Type", "application/json");
  http.send(JSON.stringify({"id" : `${post_id}`}));
  pageLoad(currentLink)
}

function commentLoader(post_id) {
  let commentDiv = document.createElement('div');
  commentDiv.id = "commentDiv";
  document.body.appendChild(commentDiv);
  alert('it worked!')
}

function commentDeleter(post_id) {
  let comments = document.getElementById("commentDiv")
  comments.parentNode.removeChild(comments)
}
