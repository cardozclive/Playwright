//Functions block of code
function add(a, b) {

    return a + b;
}
console.log(add(5, 3));

//Anonymous functions - Do not have name. These are function expressions
let sumOfInteger = function (c, d) {
    return c * d;
}
console.log(sumOfInteger(3, 6));


let sumOfNumbers = (e, f) => e - f;
console.log(sumOfNumbers(8, 2));
