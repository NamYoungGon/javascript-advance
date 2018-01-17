const peopleProto = function () {

}

peopleProto.prototype.name = 'no name'
peopleProto.prototype.age = 0
peopleProto.prototype.state = 'no city'

peopleProto.prototype.printPerson = function () {
    console.log(`${this.name}, ${this.age}, ${this.state}`)
}

const person1 = new peopleProto()
// person1.name = 'John'
person1.age = 23
person1.state = 'CA'

person1.printPerson()
console.log('name' in person1) // true
console.log(person1.hasOwnProperty('name')) // false
