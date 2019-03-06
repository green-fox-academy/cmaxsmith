let ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=cute+dogs&api_key=7NZUi1cKaUN4zeS0whpfa13xVwGBp2Al&limit=16');
ourRequest.onload = function() {
  let ourData = JSON.parse(ourRequest.responseText)
  for (let i=0; i < ourData.data.length; i++) {
    let newImg = document.createElement('img');
    document.body.appendChild(newImg);
    newImg.src=ourData.data[i].images.fixed_height_small_still.url;
    newImg.addEventListener("mouseover", function(){
    newImg.src=ourData.data[i].images.fixed_height_small.url
    })
    newImg.addEventListener("mouseleave", function(){
      newImg.src=ourData.data[i].images.fixed_height_small_still.url
    })
  }
}
ourRequest.send();












