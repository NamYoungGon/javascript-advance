const Pizza = {
    crust: 'thin',
    toppings: 3,
    hasBacon: true,
    howmanyToppings: function () {
        return this.toppings
    }
}

Pizza.price = '12$'

console.log(`crust: ${Pizza.crust}`)
console.log(`hasBacon: ${Pizza.hasBacon}`)
console.log(`price: ${Pizza.price}`)
console.log(`howmanyToppings: ${Pizza.howmanyToppings()}`)

delete Pizza.crust

console.log(`crust: ${Pizza.crust}`)