const axios = require('axios');

// let api = `https://reqres.in/api/users`;

// axios.get(api).then((response) => {
//     console.log(response.data)
// }).catch(err => {
//     console.log(err);
// })

// axios({
//     method: 'GET',
//     url: 'https://reqres.in/api/users',
//     port: 443,
// })
//     .then(response => { console.log(response.data) })
//     .catch(err => {
//         console.log(err);
//     });

axios({
    method: 'GET',
    // url: 'https://dog.ceo/api/breeds/image/random',
    url: 'https://jsonplaceholder.typicode.com/posts',
    params : {
        _limit : 1,
        _start : 5,
        
    }
})
    .then(response => { console.log(response.data) })
    .catch(err => {
        console.log(err);
    });