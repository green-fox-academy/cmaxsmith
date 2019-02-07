/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

let dominoes = initializeDominoes();

let orderedDominoes = [];
orderedDominoes.push(dominoes[0]);

for (let j: number = 0; j < dominoes.length; j++) {
  for (let i: number = 1; i < dominoes.length; i++) {
    if (orderedDominoes[j].values[1] === dominoes[i].values[0]) {
      orderedDominoes.push(dominoes[i]);
    }
  }
}
console.log(orderedDominoes)





