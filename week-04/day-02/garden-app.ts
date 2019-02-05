'use strict';
export{};

class Plant {
  color: string;
  waterAmt: number;
  baseWater: number;
  absorbAmt: number;

  constructor(c: string, w: number = 0) {
    this.color = c;
    this.waterAmt = w;
  }
}

class Flower extends Plant {
  type: string = 'flower';

  constructor(c: string, bw: number = 5, ab: number = .75){
    super(c);
    this.color = c;
    this.baseWater = bw;
    this.absorbAmt = ab;
  }
}

class Tree extends Plant {
  type: string = 'tree';

  constructor (c, bw: number = 10, ab: number = .4) {
    super(c);
    this.baseWater = bw;
    this.absorbAmt = ab;
  }
}

const flower1: Flower = new Flower('yellow');
const flower2: Flower = new Flower ('blue');
const tree1: Tree = new Tree ('purple');
const tree2: Tree = new Tree ('orange');

class Garden {
  name: string;
  plants: any[] = [];
  
  add (plant: Plant) {
    this.plants.push(plant);
  }
  
  water (amt) {
    let waterThesePlants = 0;
    //finds out how many plants need to be watered
    for (let i = 0; i < this.plants.length; i++){
      if (this.plants[i].waterAmt < this.plants[i].baseWater) {
        waterThesePlants++
      }
    } 
    //waters the plants that need to be watered
    for (let i = 0; i <this.plants.length; i++) {
      if (this.plants[i].waterAmt < this.plants[i].baseWater) {
        this.plants[i].waterAmt += (amt/waterThesePlants) * this.plants[i].absorbAmt;
      }
    }
    //evaluates the plants new status and determines if they still need water
    for (let i = 0; i < this.plants.length; i++) {
      if(this.plants[i].waterAmt < this.plants[i].baseWater) {
        console.log(`The ${this.plants[i].color} ${this.plants[i].type} still needs more water.`)
      } else {
        console.log(`The ${this.plants[i].color} ${this.plants[i].type} doesn't need any more water.`)
      }
    }
  }

}
const garden1: Garden = new Garden;

garden1.add(flower1);
garden1.add(flower2);
garden1.add(tree1);
garden1.add(tree2);

garden1.water(40);

garden1.water(70);



