

//five expenses
var expense = [10, 20, 15, 5, 8] 

//first way to calculate the total
var sum = 0
for(let i=0;i<expense.length;i++){
    sum =sum + expense[i]
}
console.log(sum)

//second way to calculate the total
let total = expense.reduce((sum, expense) => sum + expense, 0);
console.log(total);

//sorting from lowest to highest
expense.sort(function(a,b){
    return a-b;
})
console.log(expense)

//lowest value
var lowestValue = Math.min(...expense)
console.log(lowestValue)

//highest value
var highestValue = Math.max(...expense)
console.log(highestValue)

//Another way of finding the lowest value using for for loop
var lowestVal = expense[0]

for(var i=0; i<expense.length; i++)
{

    if(expense[i]<lowestVal){
        lowestVal = expense[i]
    }
}
console.log(lowestVal)

//Another way of finding the highest value using for for loop
var highestVal = expense[0] //assuming value at 0 index is highest

for(var i=0;i<expense.length;i++){

    if(expense[i]>highestVal){
        highestVal = expense[i]
    }
}
console.log(highestVal)