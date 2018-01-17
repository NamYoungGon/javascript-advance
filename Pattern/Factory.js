const peopleFactory = function (name, age, state) {
    const temp = {}

    temp.age = age
    temp.name = name
    temp.state = state

    temp.printPerson = function () {
        console.log(`${this.name}, ${this.age}, ${this.state}`)
    }

    return temp
};

const person1 = peopleFactory('John', 23, 'CA')
const person2 = peopleFactory('Kim', 27, 'SC')

person1.printPerson()
person2.printPerson()
