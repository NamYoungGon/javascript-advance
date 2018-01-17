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

/**
 * Promise.all(iterable) 메소드는 반복가능한 변수(배열 등)에 포함된 모든 Promise들이 통과된 경우 결정(resolve)을 하고, 
 * 그렇지 못하고 거절(reject)하는 경우 거절하는 첫번째 Promise를 의 거절 원인으로 Promise를 반환합니다.
 */
Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function () {
    console.log('all finished')
}).catch(function (error) {
    console.log('error')
})

/**
 * Promise.race(iterable) 메서드는 Promise 객체를 반환합니다. 
 * 이 Promise 객체의 결과값은 iterable 안에 있는 Promise 중에 
 * 가장 먼저 resolve 또는 reject 된 Promise의 결과값이 됩니다.
 */
Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function () {
    console.log('one if them is finished')
}).catch(function (error) {
    console.log('error')
})