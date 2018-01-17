let add = function (a, b) {
    return a + b
}

let mulitply = function (a, b) {
    return a * b
}

let doWhatever = function (a, b) {
    console.log(`hear are you two numbers bakck ${a}, ${b}`)
}

let calc = function (num1, num2, callback) {
    if (typeof callback === 'function') {
        return callback(num1, num2)
    } 
}

console.log(calc(2, 3, add))
console.log(calc(2, 3, mulitply))
calc(2, 3, doWhatever)
console.log(calc(2, 3, function (a, b) { 
    return a - b 
}))