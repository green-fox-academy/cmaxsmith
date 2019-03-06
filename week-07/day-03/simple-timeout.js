'use strict';

function sayHey(){
  console.log('Hey after 3')
}

//setTimeout(sayHey(), 3000);


setTimeout(() => sayHey(), 3000);