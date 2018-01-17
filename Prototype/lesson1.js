const Job = function () {
    this.pays = true
}

// prototype method
Job.prototype.print = function () {
    console.log(this.pays ? `${this.title} job is greate, please hire me` : `I would rather learn javascript`)
}

Job.prototype.print = function () {
    console.log(this.pays ? 'Please hire me' : 'no thank you')
}

// subclass
const TechJob = function (title, pays) {
    Job.call(this)

    this.title = title
    this.pays = pays
}

TechJob.prototype = Object.create(Job.prototype)
TechJob.prototype.constructor = TechJob

TechJob.prototype.print = function () {
    console.log(this.pays ? `${this.title} job is greate, please hire me` : `I would rather learn javascript`)
}

const softwarePosition = new TechJob('Javascript Programer', true)
const softwarePosition2 = new TechJob('vb Programer', false)

softwarePosition.print()
softwarePosition2.print()