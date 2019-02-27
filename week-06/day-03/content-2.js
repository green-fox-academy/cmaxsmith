//   1) replace the list items' content with items from this list:
//   ['apple', 'banana', 'cat', 'dog']
//   2) change the <ul> element's background color to 'limegreen'
//     - use css class to change the color instead of the style property

// OR

'use strict';
let list = ['apple', 'banana', 'cat', 'dog'];
let item = document.getElementsByTagName('li');

for (let i = 0; i < item.length; i ++) {
  item[i].innerHTML = list[i];
  item[i].setAttribute('style', 'background-color: limegreen')
}

