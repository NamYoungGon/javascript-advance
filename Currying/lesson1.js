const add = (a) => {
    return (b) => {
        return a + b
    }
}

const addToFive = add(5)

console.log(addToFive(1))