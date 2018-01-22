/*
    1.
        let i = [1, 2, 3, 4]
        let iterator = i[Symbol.iterator]()

        console.log(iterator.next())
        console.log(iterator.next())
        console.log(iterator.next())
        console.log(iterator.next())
        console.log(iterator.next())
*/
/*
    2.
        function *generator() {
            yield 1
            yield 2
            yield 3
            yield 4
        }

        let iterator = generator()

        console.log(iterator.next())
        console.log(iterator.next())
        console.log(iterator.next())
        console.log(iterator.next())
        console.log(iterator.next())
*/

/*
    function *infiniteMaker() {
        let i = 0

        while(true) {
            yield i
            i++
        }
    }

    let iterator = infiniteMaker()

    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
*/

/*
    function *generator() {
        yield 1
        yield 'hello'
        yield* anotherGenerator()
        yield 3
    }

    function *anotherGenerator() {
        yield 2
    }

    let iterator = generator()

    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
    console.log(iterator.next())
*/

/*
    // 활용 예제
    
    function request(url) {
        return new Promise(function (resolve, reject) {
            makeAjaxCall(url, function (err, text) {
                if (err) reject(err)
                else resolve(text)
            })
        })
    }

    function *generator() {
        yield request('url1')
        yield request('url2')
    }
*/