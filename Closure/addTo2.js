(function () {

    // outer function
    const addTo = function (passed) {

        // inner function
        const add = function (inner) {
            return passed + inner
        }

        return add
    }

    /*
        addTo(3) -> 내부의 add 함수를 가르킨다
        Console -> add 함수 [[Scopes]] -> Closure 에서 passed 확인 가능

        console.dir(addTo(3)) 
    */
    
    const addThree = new addTo(3)
    const addFour = new addTo(4)

    /*
        addThree, addFour 의 Closure passed 확인 가능
    */
    console.dir(addThree)
    console.dir(addFour)

    console.dir(addThree(1))
    console.dir(addFour(1))

})()