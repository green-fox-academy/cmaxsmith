'use strict';

class Wall {
  private height : number = 3;
}

class House {
  private walls : Wall [] = [new Wall(), new Wall(), new Wall(), new Wall()];
}

class RoofedHouse extends House {
  private roof : Roof = new Roof ();
  
}
