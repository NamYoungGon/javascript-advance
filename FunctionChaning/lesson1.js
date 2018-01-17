const obj = function () {
    var i = 0

    var add = function (j) {
        i += j
        return this
    }

    var substract = function (j) {
        i -= j
        return this
    }

    var print = function () {
        console.log(i)
    }

    return {
        add,
        substract,
        print
    }
}

const x = obj()
x.add(3).substract(2).print()