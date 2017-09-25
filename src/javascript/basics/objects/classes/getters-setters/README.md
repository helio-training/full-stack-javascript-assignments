# Assignment - Getters and Setters

>  What is a getter? What is a setter? How are getters and setters useful?

For this assignment you will be create a Person class.  This person class will use a getter for it's name and age properties.  It will have a setter on it's age property to limit the possible values the age property may contain.


### Requirements

1. Create two constants that use the new Symbol function so that you can get an identifier for an object property.  They should look like this:
```javascript
const _name = Symbol('name');
const _age = Symbol('age');
```
>  Note: The Symbol data type is used as the key for an object property when the property is intended to be private, for the internal use of a class or an object type.

2. Create a class called Person and be sure to export the class.
3. Add a constructor method to the Person class that will take a name and age as arguments.  Use the new "default function parameters" capability in JavaScript to set the age parameter with a default value of 0.
5. Create a getter for the Person class that will return the name property.
6. Create a getter for the Person class that will return the age property.
7. Create a setter for the age property that will accept a number as an argument.
8. Use conditional logic to set the Person's age to 0 if a negative number was provided as the argument and to set the age to 120 if a value was provided that is greater than 120.


### Observations

* Why use the Symbol function?
* What is the purpose of the getters/setters?
* How could you make a property be readonly?

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
