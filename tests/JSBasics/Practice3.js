var productPrices = [100, 70, 55, 51, 120, 49]

//Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.
const discountedPrices = productPrices.map(productPrices => productPrices - productPrices*0.10)
console.log(discountedPrices)

//Use the filter method to create a new array called affordableProducts containing only products priced below $50
const affordableProducts  = discountedPrices.filter(discountedPrices=> discountedPrices<50)
console.log(affordableProducts)

//Calculate the total cost of all items in the affordableProducts array using the reduce method.
const AllaffordableProducts = affordableProducts.reduce((sum,prices)=> sum + prices, 0)
console.log(AllaffordableProducts)