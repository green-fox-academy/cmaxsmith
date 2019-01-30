'use strict';
export{};

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

export class Animal {
  hunger: number;
  thirst: number;

  constructor (hunger = 50, thirst = 50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }

  eat() {
    this.hunger -= 1;
  };

  drink() {
    this.thirst -= 1;
  };
  
  play() {
    this.hunger += 1;
    this.thirst += 1;

  };
}

//test
const panda: Animal = new Animal (75, undefined);
panda.eat();
panda.eat();
panda.drink();
console.log(panda)