const axios = require('axios');

let word = 'lewis';
let language = "en-us";

axios({
    method: 'get',
    url: `https://od-api.oxforddictionaries.com:443/api/v2/entries/${language}/${word}`,
    headers: {
        app_id: '1cb8060e',
        app_key: '3ab2ea94c2f489e3b5def889ee19bd9b',
    }
})
    .then(response => { console.log(response.data) })
    .catch(err => {
        console.log(err);
    });

