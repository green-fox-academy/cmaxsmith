'use strict';

export class Math {
  integers: number [];

  constructor (pI: number []){
    this.integers = pI;
  }

  sum () {
    let result = this.integers.reduce((acc, val)=>{
      return acc + val
    })
    return result
  }

}

let empty = new Math([]);

console.log(empty.sum())

