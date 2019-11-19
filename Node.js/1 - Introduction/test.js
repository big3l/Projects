const greet = function (msg) {
    console.log(msg);
}
let person = {
    name: 'Peter',
    job: 'Stuffer'
}

let message = ('This is a message I wrote');

greet('Good Morning from test.js');

module.exports = greet;
module.exports.peter = person;
module.exports.hello = message;