const http = require('http');

const server = http.createServer((request, response) => {

    console.log(request.url)

    response.setHeader('Content-type', 'text/html');

    response.setHeader('Access-Control-Allow-Origin', '*');

    let data = `<div>
                <h1 style = 'color: blue' >Welcome to Node.js</h1>
                <img style = 'border: 5px solid black' src='https://picsum.photos//600/500' />
                </div > `;

    response.writeHead(200);
    response.end(data);

})

server.listen(4321, () => {
    console.log('Listening to port 4321')
})

