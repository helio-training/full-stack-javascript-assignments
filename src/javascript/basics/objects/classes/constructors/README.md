# Assignment: Constructors

> What is the type of a constructor?

1. Create a Vehicle Class
    1. Add a engineType to the constructor
    2. Add a numberOfDoors to the constructor
    3. Add a make to the constructor
    3. Export out the Vehicle `export class Vehicle`
2. Create a Truck class
    1. Make the Truck inherit from the Vehicle class
    2. Set the `engineType='V8'` and the `numberOfDoors = 2` in the super's constructor
    3. Create a make parameter in the Truck class, and pass through the value to the super class.
    3. Export out the truck `export class Truck`
3. Create a Car class 
    1. Make the Car inherit from the Vehicle class
    2. Set the `engineType='V4'` and the `numberOfDoors = 4` in the super's constructor
    3. Create a make parameter in the Truck class, and pass through the value to the super class.
    4. Export out the car `export class Truck`
4. Create and export out the variable named `export const F150 = new Truck(...)`, and pass the appropriate parameters to the Trucks's constructor
5. Create and export out the variable named `export const Prius = new Car(...)`, and pass the appropriate parameters to the Car's constructor
