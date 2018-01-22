let mySet = new Set([1, 2, 2, 2, 3])

// Set { 1, 2, 3 }
console.dir(mySet)

for (let val of mySet) {
    console.log(val)
}



let myString = 'hello'

for (let val of myString) {
    console.log(val)
}



let anObject = {
    name: 'bob',
    age: 20,
    friends: ['john', 'kim', 'peter'],
    getName: function () {
        return this.name
    }
}

for (let key in anObject) {
    console.log(key)
}



let myArray = [1, 2, 3, 4, 5]
let iterator = myArray[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())