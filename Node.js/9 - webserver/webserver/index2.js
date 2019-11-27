const http = require('http');

const server = http.createServer((request, response) => {

    console.log(request.url)

    response.setHeader('Content-type', 'text/plain');

    response.setHeader('Access-Control-Allow-Origin', '*');

    response.writeHead(200);

    response.end('Hello from Node.js web server using plain text');

    if (request.url === '/home') {
        console.log('Home page has been requested')
    }

})

server.listen(4321, () => {
    console.log('Listening to port 4321')
})