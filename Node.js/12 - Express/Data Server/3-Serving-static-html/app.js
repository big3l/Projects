const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// this will work with the json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// search for the html folder using static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (request, response) => {
    let users = [{
        first_name: 'Daniel',
        last_name: 'Lewis',
        age: 36,
        job: 'Developer'
    },
    {
        first_name: 'Plinkey',
        last_name: 'Plonkey',
        age: 120,
        job: 'Retired'
    },
    {
        first_name: 'Davey',
        last_name: 'Crocket',
        age: 22,
        job: 'Student'
    },
    {
        first_name: 'Steve',
        last_name: 'Iwrin',
        age: 55,
        job: 'Crocodile catcher'
    },
    {
        first_name: 'Punk',
        last_name: 'Childs',
        age: 83,
        job: 'Dribbler'
    }];
    response.json(users)
});

app.get('/download', (request, response) => {
    response.download(path.join(__dirname, '/downloads/file.txt'))
});



app.post('/submit-form', (request, response) => {
    const name = request.body.name
    const email = request.body.email
    console.log(`UserName: ${name} \nemail : ${email}`)
    response.end(`Your user name is : ${name} \nYour email is : ${email}`)
})

app.get('/redirect', (request, response)=> {
    response.redirect('/about.html')
})


app.listen(3001, () => {
    console.log('Listening to port 3001')
});
