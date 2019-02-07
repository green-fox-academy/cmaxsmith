// Create a Station and a Car classes
//  Station
//    gasAmount
//    refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
//    gasAmount
//    capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

class Station {
  totalGasAvail;

  constructor(totalGasAvail) {
    this.totalGasAvail = totalGasAvail;
  }
  
  refill(car: Car) {
    this.totalGasAvail -= car.gasCapacity;
    car.gasAmount = car.gasCapacity;

  }
}
class Car {
  gasAmount = 0;
  gasCapacity = 100;

  constructor() {
    this.gasAmount; 
    this.gasCapacity;
  }
}

const car1: Car = new Car;
const station1: Station = new Station(500);

console.log(car1)
console.log(station1)
station1.refill(car1)
console.log(car1)
console.log(station1)


