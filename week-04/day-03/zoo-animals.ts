'use strict';
export {};

abstract class Animal {
  name: string;
  age: number;

  getName () {
    return this.name;
  }

  abstract breed ()
}

class Reptile extends Animal {
  breedStyle: string = 'laying eggs'

  constructor (name: string) {
    super();
    this.name = name;
  }

  breed () {
    return this.breedStyle
  }
}

class Mammal extends Animal {
  breedStyle: string = 'pushing miniature versions out'
  constructor (name: string) {
    super();
    this.name = name;
  }
  breed() {
    return this.breedStyle
  }
}

class Bird extends Animal {
  breedStyle: string = 'laying eggs'
  constructor (name: string) {
    super();
    this.name = name;
  }
  breed () {
    return this.breedStyle
  }
}

let reptile = new Reptile("crocodile");
let mammal = new Mammal("koala");
let bird = new Bird("parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());