const Pizza = function () {
    var crust = 'thin'
    var toppings = 3

    var getToppings = function () {
        return toppings
    }

    var tmp = {}
    tmp.getToppings = getToppings

    return tmp
}

const pizzaA = new Pizza()

console.dir(pizzaA);


