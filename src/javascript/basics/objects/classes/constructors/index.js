export class Vehicle {

  constructor(engineType, numberOfDoors, make) {
    this.engineType = engineType;
    this.numberOfDoors = numberOfDoors;
    this.make = make;
  }
}


export class Truck extends Vehicle {

  constructor(make) {
    super('V8', 2, make);
  }
}

export class Car extends Vehicle {

  constructor(make) {
    super('V4', 4, make);
  }
}


export const F150 = new Truck('Ford');
export const Prius = new Car('Toyota');
