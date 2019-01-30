'use strict';
export{};
/* Create a PostIt a class that has
  a backgroundColor
  a text on it
  a textColor
Create a few example post-it objects:
  an orange with blue text: "Idea 1"
  a pink with black text: "Awesome"
  a yellow with green text: "Superb!" */

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor (pBackgroundColor, pText, pTextColor) {
    this.backgroundColor = pBackgroundColor;
    this.text = pText;
    this.textColor = pTextColor;
  }
}

const note1 = new PostIt('orange', 'Idea 1', 'blue');
const note2 = new PostIt ('pink', 'Awesome', 'black');
const note3 = new PostIt ('yellow', 'Superb!', 'green');
