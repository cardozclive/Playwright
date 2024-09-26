module.exports = class Person {

    age = 25;
    // firstName = 'Tim'
    // lastName = 'Cook'
    get location() {
        return 'Canada'
    }
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    fullName() {
        return this.firstName + " " + this.lastName
    }

}
// let person = new Person('Tim', 'Cook')
// // console.log(person.firstName)
// console.log(person)
// console.log(person.location)
// console.log(person.fullName())