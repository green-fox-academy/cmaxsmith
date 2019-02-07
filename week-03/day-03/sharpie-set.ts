'use strict'
import {Sharpie} from "./sharpie";

class SharpieSet {
  markers: Sharpie[];
  usable = 0;

  constructor() {
    this.markers = [];
    this.usable;
  }

  add (marker: Sharpie) {
    this.markers.push(marker)
  };

  countUsable (marker: Sharpie) {

    if (marker.inkAmount > 0) {
      this.usable++
      marker.usable = true;
    } else {
      marker.usable = false;
    }
  }
}
//create an empty sharpieset
let sharpieTest = new SharpieSet;

//create sharpies to add to the sharpieset
const marker1: Sharpie = new Sharpie('black', 10, undefined)
const marker2: Sharpie = new Sharpie('green', 10, 0)
const marker3: Sharpie = new Sharpie ('red', 5, 100)

//add the sharpies to the set
sharpieTest.add(marker1);
sharpieTest.add(marker2);
sharpieTest.add(marker3);

//determines if the sharpie is usable and, if so, adds it to a list
sharpieTest.countUsable(marker1);
sharpieTest.countUsable(marker2);
sharpieTest.countUsable(marker3);

// function removeUseless(set: SharpieSet) {
//   let emptySet = [];
//   for(let i = 0; i < set.markers.length; i++) {
//     if (set.markers[i].usable == true) {
//       emptySet.push(set.markers[i]);
//     }
//   } return emptySet
// }

// removeUseless(sharpieTest)
console.log(sharpieTest)