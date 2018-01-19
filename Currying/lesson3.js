const sayWhat = function (a) {
    return function (b) {
        return function (c) {
            console.log(`saying ${a} to ${b} using ${c}`)
        }
    }
}

// sayWhat('hello')('toFriends')('javascript')

const sayHi = sayWhat('hi')
const sayHiToMe = sayHi('me')
const sayHiToMeUsingNothing = sayHiToMe('nothing')