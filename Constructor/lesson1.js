'use strict'

let add = function (n1, n2) {
    return n1 + n2
}

let sum = add(1, 2)

let Car = function (color) {
    // new 를 사용하지 않을 시 에러 발생 시킴
    if (!new.target) throw 'Car() must be called with new'

    this.color = color
}

// let redCar = new Car('red')
// let blueCar = Car('blue')

// console.log(blueCar) // undefined
// console.log(window.color) // blue