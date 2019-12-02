const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post(newnote, (request, response) => {
    const newnote = request.body.note
    const note = request.body.notetxt

    console.log(newnote)
    response.end(note + '' + newnote)
})

app.get('/redirect', (request, response) => {
    response.redirect('/about.html')
})





app.listen(4000, () => {
    console.log('Listening to port 4000')
});
