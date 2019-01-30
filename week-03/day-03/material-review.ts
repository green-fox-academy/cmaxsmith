'use strict'
export{};

// const CookieCutter = {
//   shape: 'elephant',
//   size: 6, // 1 - 10
//   material: 'metal', //[metal, wood, plastic]
//   canThrowSomeSprinkles: true,
//   condition: 'new', // [new, old, used]
//   doTheCut: function (aCookie) {
//     return 'the cookie ${aCookie} has been cut';
//   }
// };

// class CookieCutter {
//   shape: 'elephant';
//   size: 6; // 1 - 10
//   material: 'metal'; //[metal, wood, plastic]
//   canThrowSomeSprinkles: true;
//   condition: 'new' // [new, old, used]

//   doTheCut: function(aCookie) {
//     return 'the cookie ${aCookie} has been cut';
//   }
// }

// const left = new CookieCutter();
// left.material = 'wood';

class Orc {
  armor;
  weapon;
  skinColor;
  size;
  aggressiveness;
  power;
  stamina;

constructor (pArmor, pWeapon, pAggressiveness = 60) {
  this.armor = pArmor;
  this.weapon = pWeapon;
  this.aggressiveness = pAggressiveness;
}

  hit () {

  }
  run () {

  }
}

const o1 = new Orc(3, 'battleAxe');
const o2 = new Orc(4, 'bow');
const o3 = new Orc(0, 'wooden stick', 100);
const o4 = new Orc (2, undefined, 75); //to 'skip' a parameter, use 'undefined'