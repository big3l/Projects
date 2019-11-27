// npm install axios
const axios = require('axios');

let link = 'https://jsonplaceholder.typicode.com/users';

axios.get(link).then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error);
})
