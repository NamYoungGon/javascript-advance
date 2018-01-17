const Job = function () {
    this.pays = true
}

// subclass
const TechJob = function (title, pays) {
    Job.call(this)

    this.title = title
    this.pays = pays
}

TechJob.prototype = Object.create(Job.prototype)
TechJob.prototype.constructor = TechJob

// prototype 의 최상위는 Object
Object.prototype.print = function () {
    console.log(`I am executing front the Master Object`)
}

const softwarePosition = new TechJob('Javascript Programer', true)
const softwarePosition2 = new TechJob('vb Programer', false)

softwarePosition.print()
softwarePosition2.print()