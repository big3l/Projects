const axios = require('axios');

let word = process.argv[2];
let language = "en-us";


axios({
    method: 'get',
    url: `https://od-api.oxforddictionaries.com:443/api/v2/entries/${language}/${word}`,
    headers: {
        app_id: '1cb8060e',
        app_key: '3ab2ea94c2f489e3b5def889ee19bd9b',
    },
})
    .then(response => {
        console.log(`${response.data.word} (${response.data.results[0].lexicalEntries[0].lexicalCategory.text})`);
            
        let route = response.data.results[0].lexicalEntries[0].entries[0].senses;

        let i = 1;
        route.forEach(senses => {
            console.log(`${i++}. ${senses.definitions}`)
        }),
            console.log(` \n Provided by: ${response.data.metadata.provider}`);
    })
    .catch(err => {
        console.log(err);
    });
