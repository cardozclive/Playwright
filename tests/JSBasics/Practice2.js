const expense = [20, 55, 18, 2, 5]

let total = expense.reduce((sum, expense) => sum + expense, 0)
console.log(total)

var sum = 0
for (let i = 0; i < expense.length; i++) {
        sum = sum + expense[i]
}
console.log(sum)

var lowestVa = expense[0]; //20

for(let i=0;i<expense.length;i++)
{
    if(expense[i]<lowestVa)
    {
        lowestVa = expense[i]

    }

}
console.log(lowestVa)