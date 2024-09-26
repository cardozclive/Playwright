//An object in Javascript is a collection of properties

let person = {

    firstName: 'Clive',
    SecondName: 'Cardoz',
    fullName: function () 
    {
       return this.firstName + this.SecondName
    }
};
console.log(person.fullName())
console.log(person.SecondName);
console.log(person.firstName);
console.log(person.firstName + " " + person.SecondName)
console.log(person['SecondName'] + " " + person['firstName'])
person.firstName = 'Conan'
console.log(person.firstName + " " + person.SecondName)
console.log(person['SecondName'] + " " + person['firstName'])
person.Gender = 'Male'
person.Age = 30
console.log(person)
delete person.Gender
console.log(person)
console.log('Gender' in person)
console.log('Age' in person)

for (let key in person) {
    console.log(person[key])
}
