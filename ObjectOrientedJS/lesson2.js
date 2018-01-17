const Pizza = function () {
    this.crust = 'thin'
    this.toppings = 3
    this.hasBacon = true
}

console.log(Pizza.crust) // undefined

const PizzaA = new Pizza()
const PizzaB = new Pizza()

PizzaA.crust = 'pan'

console.log(`crust: ${Pizza.crust}`) // undefined
console.log(`hasBacon: ${Pizza.hasBacon}`) // undefined

console.log(`PizzaA crust: ${PizzaA.crust}`) // pan
console.log(`PizzaB crust: ${PizzaB.crust}`) // thin

console.log(`instanceof ${PizzaB instanceof Pizza}`) // true

/*
    constructor function () {
        this.crust = 'thin'
        this.toppings = 3
        this.hasBacon = true
    }
*/
console.log(`constructor ${PizzaB.constructor}`)