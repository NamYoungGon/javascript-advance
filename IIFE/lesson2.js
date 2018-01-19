const counter = (function () {
    let i = 0

    return {
        get: () => {
            return i
        },
        set: (val) => {
            i = val
        },
        increment: () => {
            i++
        }
    }
})()

console.log(counter.get())
counter.set(5)
counter.increment()
console.log(counter.get())