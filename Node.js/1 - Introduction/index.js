function hello(fullname) {
    console.log(`Hi ${fullname}! The time is: 
    ${new Date().getHours()} Hours and 
    ${new Date().getMinutes()} Minutes`);
}
hello('Daniel Lewis')

// Type the following in terminal, the above function will run.
// dan@dan-ThinkPad-L480:~/Desktop/Projects/Projects/Node.js/Introduction$ node index.js
// Hi Daniel Lewis! The time is 
// 10 Hours and 
// 6 Minutes

const Person = require('./person') //this is importing the person.js file.
const person1 = new Person('Daniel Lewis', 36)

// console.log (__dirname, __filename, process.argv, process.memoryUsage())

person1.greeting();

console.log(Person.time())
console.log(Person.msg);