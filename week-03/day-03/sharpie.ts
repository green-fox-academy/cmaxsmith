'use strict';
export {};

// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

export class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  public constructor (color, width, inkAmount = 100) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }

  useSharpie () {
    this.inkAmount -= 1
  }
}

//create an instance of the class
const sharpie1: Sharpie = new Sharpie ('black', 5, undefined)

//test out the function
sharpie1.useSharpie()

console.log(sharpie1);