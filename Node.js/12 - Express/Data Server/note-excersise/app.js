const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


app.post('/', (request, response) => {
    const newnote = request.body.note
    // response.render('index', { title: 'Info' });

    
    if (newnote === '') {
        response.send('Please enter a new note')
    }
    else {
        const note = request.body.notetxt
        newnote === note
    }
    console.log(newnote)
    response.end(newnote)
})
 

app.listen(4000, () => {
    console.log('Listening to port 4000')
});

