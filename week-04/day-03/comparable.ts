'use strict';
export {};

interface Comparable {
  compareTo(other: Comparable): number;
}

class Domino implements Comparable {
  values: number[];
  constructor(valueA: number, valueB: number) {
      this.values = [valueA, valueB];
  }

  compareTo (input: Domino){
    if (this.values[0] === input.values[0]) {
      return this.values[1] - input.values[1];
    }  else {
    return this.values[0] - input.values[0];
    }
}

}

let dominoes: Domino[] = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));

dominoes.sort(function (a: Domino , b: Domino): number {
  return a.compareTo(b);
})

console.log(dominoes);

