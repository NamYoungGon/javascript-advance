'use strict'

const avg = function (...n) {
    let tot = 0
    
    for (let i = 0; i < n.length; i++) {
        tot += n[i]
    }

    return tot / n.length
}

const spiceUp = function (fn, ...n) {
    return function (...m) {
        return fn.apply(this, n.concat(m))
    }
}

const doAvg = spiceUp(avg, 1, 2, 3)
console.log(doAvg(4, 5, 6))