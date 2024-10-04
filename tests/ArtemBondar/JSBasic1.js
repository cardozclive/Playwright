// var firstName = "Clive";
// var lastName = "Cardoz";

// console.log(firstName)

// let Name = `My first name is ${firstName} and my last name is ${lastName}`
// console.log(Name)

var value1 = 10
var value2 = 10
console.log(value1 != value2)

var details =
{
    firstName: 'Clive',
    lastName: 'Cardoz'
}
console.log(details.lastName)
console.log(details['lastName'])
//dot notation
details.firstName = 'Conan';
//Bracket notation
details['lastName'] = 'Fernandes'
console.log(details.firstName, details['lastName'])

// if hour is between 6 to 12 print "Good Morning"
// if hour is between 12 to 18 print "Good Afternoon"
// otherwise evening

var hour = 16;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning')
} else if (hour >= 12 && hour < 18) {
    console.log('Good Afternoon')
} else {
    console.log("Good Evening")
};

var cars = ['Volvo', 'BMW', 'Mercedes'];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (let car of cars) {
    console.log(car);
    if (car == 'BMW') {
        break;
    }
}

function printName(name, secondName) {
    console.log(name + " " + secondName);
}
printName('John', 'Trilanda');


function multipleByTwo(number) {
    var result = number * 2;
    return result;
}
var myResult = multipleByTwo(20);
console.log(myResult);

let n = 0;
for (let k = 1; k <= 100; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        n++
        console.log(k)
        if (n == 3) {
            break;
        }
    }
}

let divide = (a , b) => a / b;

console.log(divide (12 , 6))
