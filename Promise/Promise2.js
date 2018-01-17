let cleanRoom = function () {
    return new Promise(function (resolve, reject) {
        resolve('cleaned the room')
    }) 
}

let removeGarbage = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(`${message} remove garbage`)
    }) 
}

let winIcecream = function (message) {
    return new Promise(function (resolve, reject) {
        resolve(`${message} won Icecream`)
    }) 
}

cleanRoom().then(function (result) {
    return removeGarbage(result)
}).then(function (result) {
    return winIcecream(result)
}).then(function (result) {
    console.log(`finished ${result}`)
}).catch(function(error) {
    console.log('error')
})