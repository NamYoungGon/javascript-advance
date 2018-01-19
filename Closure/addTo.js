(function () {
    var passed = 3
    
    var addTo = function () {
        var inner = 2
        return passed + inner
    }

    // Console -> addTo 함수 [[Scopes]] -> Closure 에서 passed 확인 가능
    console.dir(addTo)
})()