// Inheritence is a mechanism in object-oriented programming that allows a class to 
// inherit properties and methods from another class. The class that inherits is called 
// the subclass or derived class, while the class being inherited from is called the 
// superclass or base class. Inheritance promotes code reusability and establishes a 
// hierarchical relationship between classes.

// In JavaScript, inheritance can be achieved using the "extends" keyword. 
// The subclass can access the properties and methods of the superclass, and it can also
//  override or extend them as needed.

// Example of inheritance in JavaScript
const Person = require('./basics7classes.js'); // Import the Person class from basics7classes.js
class Pet extends Person {
    get location(){ // overriding the location getter method from the Person class
        return "Blue Cross Pet Hospital";
    }
    constructor(firstName, lastName) { // The Pet class inherits from the Person class
        // call parent class constructor
        super(firstName, lastName); // Call the constructor of the superclass (Person)
    }
}
let pet = new Pet('Cooper', 'Dog')
console.log(pet.location); // Call the location getter method
console.log(pet.fullName()); // Call the fullName method inherited from the Person class
