const Person = require('./JSBasics5')
let day = 'Tuesday ';
console.log(day.length);

let subDay = day.slice(0, 4);
console.log(subDay);
console.log(day[1]);
console.log(subDay[3]);

let date = '23'
let nextDate = '29'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString();

let person = new Person("Mukesh", "Ambani")
console.log(person.fullName())

