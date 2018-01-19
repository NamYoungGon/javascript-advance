'use strict'

let getA = a => a
console.log(getA(1))

let square = a => a * a
// let square = a => { return a * a }
// let square = (a) => { return a * a }
console.log(square(2))

let multi = (a, b) => { return a * b }
console.log(multi(2, 3))

console.log('--------------------------------------------------')
/*
const x = function () {
    var that = this
    this.val = 1
    setTimeout(function () {
        that.val++
        console.log(that.val)
    }, 1)
}
const xx = new x()

const y = function () {
    this.val = 1
    setTimeout(() => {
        this.val++
        console.log(this.val)
    }, 1)
}
const yy = new y()
*/

const z = (...n) => {
    console.log(n[0])
}
z(1, 2, 3)

console.log('--------------------------------------------------')