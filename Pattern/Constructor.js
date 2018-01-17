const peopleConstructor = function (name, age, state) {
    this.name = name
    this.age = age
    this.state = state

    this.printPerson = function () {
        console.log(`${this.name}, ${this.age}, ${this.state}`)
    }
}

const person1 = new peopleConstructor('John', 23, 'CA')
const person2 = new peopleConstructor('Kim', 27, 'SC')

person1.printPerson()
person2.printPerson()