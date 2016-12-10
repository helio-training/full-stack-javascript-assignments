# Assignment - Objects with a Class

>  What is a class? Why does it matter? How is it useful?

For this assignment you will be create more robots.  This time we will use classes to accomplish similar things as the object literals


### Requirements

1. Create an OptimusPrimse, and a Megatron class that contains the name, faction, power properties
2. Create greet functions for both OptimusPrime and Megatron that return 'Hi, I'm ${name}'
3. Create a FACTION constant that looks like this.
4. Export an instance variable for OptimusPrime named 'optimusPrime' and another instance variable for Megatron named 'megatron'
5. Create a base class called Robot, export the class.
6. Fix the OptimusPrime and Megatron classes to inherit from the Robot class
7. Move the greet function to the Robot class.  Fix the other objects so they use the greet functions from the Robot class
8. Create a constructor on Robot class that takes: name, faction.  Default power to 1000
9. Refactor the OptimusPrime class and Megatron class to use the Robot's constructor
10. Refactor OptimusPrime's class and Megatron's class to set the name and faction by default when a new robot is created.


### Observations

* What does a class do that an object literal doesn't?
* Why extend a class? Benefits?
* Why didn't we need any parameters in the OptimusPrime and Megatron constructors?
* What is the purpose of the getters/setters?
* How could you make a property be readonly?

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

constructor
