const Person = require('./basics7classes.js');
// let person = { // object is a collection of key-value pairs
//     firstName: 'John',
//     middleName: 'Bill',
//     lastName: 'Doe',
//     fullName: function(){ // method
//         console.log(this.firstName + " " + this.middleName + " " + this.lastName);
//     }
// }
// console.log(person);
// console.log(person.fullName());
// console.log(person.firstName);
// person.gender = 'Male';
// console.log(person);
// delete person.gender;
// for (let key in person) { // for-in loop is used to iterate over the properties of an object
//     console.log(key + " : " + person[key]);
// }

let person = new Person("John", "Doe"); // creating an object which is an instance of the class
console.log(person);
console.log(person.fullName());
console.log(person.firstName);