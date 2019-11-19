// const person = {
//     name: 'Daniel Lewis',
//     age: 36,
//     job: 'Web-Developer',
//     address: 'Hamburg'
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}

function getTime() {
    return(`The time is :  ${new Date().getHours()} hrs : ${new Date().getMinutes()} mins`)
}

//es5 code from nodeJS
module.exports = Person; //module.exports is like export default
module.exports.time = getTime //named export (function)

//export a string
module.exports.msg = 'Hello from NodeJS'

// es6 code from react/javascript, not nodeJS
// export{getTime};
// export defailt Person;