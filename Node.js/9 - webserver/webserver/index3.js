const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {

    console.log(request.url)

    response.setHeader('Content-type', 'text/html');

    response.setHeader('Access-Control-Allow-Origin', '*');

    let html = fs.readFileSync(__dirname + '/index3.html', 'utf8')

    let title = 'This is the web server in node.js'
    html = html.replace('{title}', title);

    let message = 'Node.js provides an http module which can be used to create an HTTP client of a server. Following is the bare minimum structure of the HTTP server which listens at 8081 port.'
    html = html.replace('{message}', message);

    let src = 'https://picsum.photos//600/500'
    html = html.replace('{src}', src)

    response.writeHead(200);
    response.end(html);

})

server.listen(4321, () => {
    console.log('Listening to port 4321')
})