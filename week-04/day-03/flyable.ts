'use strict';
export {};

interface Flyable {
  land ();
  fly ();
  takeOff ();
}

abstract class Vehicle implements Flyable {
}