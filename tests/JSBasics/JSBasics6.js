//Inheritance is the main pillar in the object oriented programming
//one class can inherit/acquire properties, method od other class
//The class which inherits the properties of other is known as subclass(derived class, child class)
//the class whose properties are inherited is known as superclass

const exp = require("constants");
const Person = require("./JSBasics5");

class Pet extends Person {
    get location() {
        return "BlueCross"
    }

    constructor(firstName, lastName) {

        //call parent class constructor
        super(firstName, lastName)

    }
}
let pet = new Pet("Shadow", "Cardoz")
console.log(pet.fullName())
console.log(pet.location)

