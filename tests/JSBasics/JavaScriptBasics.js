console.log('Hello World')

let a = 4;
let b = 'abc';
var c = 'Rahul Shetty';
let d = 254.25
let required = true;
console.log(a);
//typeof is used to identity the data type of the variable
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (d));
console.log(typeof (required));
var c = a + d;

// we cannot redeclare variable with let keyword but possible with var
console.log(c);
console.log(typeof (c));
console.log(!required);

const flag = false;

if (!flag) {
    console.log("Condition Satisfied");
}
else {
    console.log("Condition not Satisfied");
}

let i = 0;
while (i > 10) {
    i++;
    console.log(i);
}


do {
    i++
} while (i > 10);
console.log(i);

var marks = Array(6);
let mark = new Array(20, 30, 40, 50, 60, 80);
var marks = [20, 30, 40, 50, 60, 80];
console.log(marks[2])  //When we pass an index, it prints its value. in this case 40 is in second index hence 40 will be printed
marks[3] = 45 //We replaced value at 3rd index i.e. 50 with 45
console.log(marks);
console.log(marks.length);//to print the number of elements in the array
marks.push(90); //this is to add new element in the array in the end [20, 30, 40, 50, 60, 80, 90]
console.log(marks);
console.log(marks.length);
marks.pop(); // this will delete the last number in the array i.e 90
console.log(marks);
console.log(marks.length);
marks.unshift(10); //this will add value in the start of the array
console.log(marks);
console.log(marks.length);
console.log(marks.indexOf(60));
//to check if 120 is present in my array
console.log(marks.includes(120)); // this will return value as false as 120 is not present in our array
subMarks = marks.slice(2, 5);// this will return array from 3rd index to 4th index i.e. 30 to 45
console.log(subMarks);
var sum = 0;
for (let i = 0; i < marks.length; i++) {
    // console.log(marks[i]);
    sum = sum + marks[i];
}
console.log(sum);
let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total);

var evenScores = [];
let scores = [12, 13, 14, 15, 16, 17, 18]
for (let i = 0; i < scores.length; i++) {

    if (scores[i] % 2 == 0) {
        evenScores.push(scores[i]);
    }
}
console.log(evenScores);

let filterEvenScores = scores.filter(scores => scores % 2 == 0)
console.log(filterEvenScores);
console.log('**********************')

const mappedScore = filterEvenScores.map(scores => scores*3)
console.log("Mapped Score " + mappedScore);
//let total = marks.reduce((sum, mark) => sum + mark, 0);
let totalVal = mappedScore.reduce((sum,val)=>sum + val,0);
console.log(totalVal);


let scores1 = [12, 13, 14, 15, 16, 17, 18];
const scores1Total = scores1.filter(scores => scores % 2 == 0).map(scores => scores*3).reduce((sum,val)=>sum+val,0)
                //12, 14, 16, 18               36, 42, 48, 54              180
console.log("Scores1 total "+scores1Total);

var fruits = ["Banana", "Mango", "Gojiberry", "Blackcurrent", "Apple"];
console.log(fruits.sort());
console.log(fruits.reverse());
console.log("-------------------");

var scores2 = [12, 30, 4, 95, 16, 70, 18];
console.log(scores2.sort());
console.log(scores2.reverse());
console.log("-------------------")

scores2.sort(function(a,b){
    return a-b;
})
console.log(scores2);
scores2.sort(function(a,b){
    return b-a;
})

console.log("Trial "+scores2);

console.log(scores2.sort((a,b)=> a-b ));
console.log(scores2.sort((a,b)=> b-a));