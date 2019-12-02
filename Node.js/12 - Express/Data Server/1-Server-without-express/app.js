const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text-plain');
    res.statusCode = 200;
    res.end('Hello World')
});

server.listen(3000, 'localhost', () => {
    console.log('Listening to port 3000');
});