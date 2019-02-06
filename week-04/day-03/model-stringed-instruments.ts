'use strict';
export {};

abstract class Instrument {
  protected name: string;

  abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;
  sounds: string;
  strings: number;

  abstract sound (): string;

  play (): string {
    return this.sound();
  }
}

class ElectricGuitar extends StringedInstrument {

  constructor (stringNum = 6){
    super();
    this.sounds = 'Twang';
    this.name = 'Electric Guitar';
    this.numberOfStrings = stringNum;
  }

  sound (): string {
    return this.sounds
  }

  play (): string {
    return `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes '${this.sounds}`)
  }
}

class BassGuitar extends StringedInstrument {
  constructor (stringNum = 6){
    super();
    this.sounds = 'Duum-duum-duum';
    this.name = 'Bass Guitar';
    this.numberOfStrings = stringNum;
  }

  sound (): string {
    return this.sounds
  }


  play (): string {
    return `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes '${this.sounds}`
  }
}

class Violin extends StringedInstrument {
  constructor (stringNum = 6){
    super();
    this.sounds = 'Screech';
    this.name = 'Violin';
    this.numberOfStrings = stringNum;
  }

  sound (): string {
    return this.sounds
  }

  play (): string {
    return `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes '${this.sounds}`
  }
}

console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings .');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();



  
