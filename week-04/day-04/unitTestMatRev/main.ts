'use strict';

export function addTwoNumbers(first: number, second: number): number {
  return first + second;
}

console.log(addTwoNumbers(5, 4));

export class SimpleName {
  name: string;
  
  constructor (name: string) {
    this.name = name;
  }
  getName () {
    return this.name;
  }
}

let myName = new SimpleName ('Max')



