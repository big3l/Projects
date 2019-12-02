const express = require('express');
const app = express();


app.get('/', function (req, res) {
    res.send('hello world')
});

app.get('/about', function (req, res) {
    res.send('<h1>About Page</h1>')
});

app.get('/about/more', function (req, res) {
    res.send('<h1>More Page</h1>')
});

app.get('/users/:name', (req, res) => {
    let user = req.params.name;
    res.send('<h1>'+user+'</h1>')
});



app.post('/', function (req, res) {
    res.send('POST request to the homepage');
})

app.listen(4000, () => {
    console.log('server started on port 4000');
})