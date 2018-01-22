// 1 + 2 + 3 ... n

let total = 0

for (let i = 1; i <= 3; i++) {
    total += i
}

console.log(total)


let add = function (n) {
    if (n <= 0) {
        return 0
    } else {
        return n + add(n - 1)
    }
}

console.log(add(3))
/*
    add(3) => 3 + add(2)
              3 + 2 + add(1)
              3 + 2 + 1 + add(0)
              3 + 2 + 1 + 0

    아래와 같이 동작
        function (3) {
            return 3 + function (2) {
                return 2 + function (1) {
                    return 1 + function (0) {
                        return 0
                    }
                }
            }
        }
*/