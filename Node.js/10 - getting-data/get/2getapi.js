const https = require('https');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/todos/8',
    method: 'GET'
}

const request = https.request(options, resp => {
    console.log(`statusCode: ${resp.statusCode}`)
    resp.on('data', d => {
        console.log(JSON.parse(d));
    });
});
request.on('error', error => {
    console.error(error)
});
request.end();