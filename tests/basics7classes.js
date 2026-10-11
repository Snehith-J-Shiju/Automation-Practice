module.exports = // exporting the class so that it can be imported in other files
class Person { // class is a blueprint for creating objects
    height = 168; // instance variable
    weight = 70;
    get location(){ // getter method, it is used to get the value of a property
        return "New York";
    }
    // contructor is a special method that is called when an instance of the class is created
    constructor (firstName, lastName){
        this.firstName = firstName; // instance variable
        this.lastName = lastName;
    }
    fullName(){ // method
        console.log(this.firstName + " " + this.lastName);
    }
}
// let person = new Person("John", "Doe"); // creating an object which is aninstance of the class
// let person1 = new Person("Jonty", "Rhodes"); // creating another instance of the class
// console.log(person);
// console.log(person1);
// console.log(person.location)
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName());