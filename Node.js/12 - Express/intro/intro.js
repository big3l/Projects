let express = require('express')
let app = express()

app.get('/', function (req, res){
    res.send('hello world')
});

app.post('/', function (req, res){
    res.send('POST request to the homepage')
})