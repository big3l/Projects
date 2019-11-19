class Fbw3 {
    constructor(student, age, hobby) {
        this.student = student;
        this.age = age;
        this.hobby = hobby;
    }
    studentInfo() {
        console.log('The students name is: ', this.student)
        console.log('and his favourite hobby is: ', this.hobby)
    }

    obtainAge(){
        return this.age
    }
}

module.exports = Fbw3;