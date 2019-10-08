import Persons from "./main.js.js.js"

class dciStudent extends Persons {
    constructor(name, job, age) {
        super(name, job, age);
    }
}

let person2 = new dciStudent("Daniel", "Student", "36")
console.log(person2)
person2.calculate_age(1983)
console.log(person2.age)
