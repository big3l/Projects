//npm install request
const request = require('request');

let link = 'https://jsonplaceholder.typicode.com/todos/7 ';

request(link, { json: true }, (err, resp, data) => {
    //error handler
    if (err) {
        return console.log(err);
    }
    console.log(resp);
    console.log(data);
});