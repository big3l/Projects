const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');

    if (request.url === '/') {
        fs.createReadStream(__dirname + '/index5.html').pipe(response);
    }
    else if (request.url === '/api') {
        response.setHeader('Content-type', 'application/json');
        response.writeHead(200);

        let data = {
            id: 1,
            firstname: 'Daniel',
            lastname: 'Lewis',
            Occupation: 'Web Developer',
            Skills: { React: '50%', JavaScript: '40%', PhP: '5%', Python: '5%' }

        }
        response.end(JSON.stringify(data));
    }
    else {
        response.writeHead(404);
        response.end('Bad Gateway');
    }
    console.log('you are in : ', request.url);
})

server.listen(5000, () => {
    console.log('Listening to port 5000')
})
