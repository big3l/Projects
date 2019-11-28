const axios = require('axios');

// axios({
//     url: 'https://newsapi.org/v2/everything',
//     method: 'get',
//     params: {
//         apikey: 'd15bff34a6474622a6f8eeab1327351f',
//         q: 'craft-beer'
//     }
// })
//     .then(response => console.log(response.data))
//     .catch(err => {
//         console.log(err);
//     });


const NewsApi = require('newsapi');
const newsapi = new NewsApi('d15bff34a6474622a6f8eeab1327351f');

newsapi.v2.everything({
    q: 'aliens',
    language: 'en',
})
    .then(response => console.log(response))
    .catch(err => {
        console.log(err);
    });