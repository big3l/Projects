const https = require('https');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/todos/8',
    method: 'GET'
}

// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ', (resp) => {
https.get('https://jsonplaceholder.typicode.com/todos/1 ', (resp) => {

    https.get(options, (resp) => {
        let data = '';

        // recieve a chunk of data
        resp.on('data', (chunk) => {
            data += chunk;
        });
        // the whole resp has been recieved
        resp.on('end', () => {
            console.log(JSON.parse(data));
        });

    }).on('error', (err) => {
        console.log('Something went wrong' + (err.message));
    });
});