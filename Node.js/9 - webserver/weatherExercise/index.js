const axios = require('axios');

let city = process.argv[2];

let apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=745aa89e7eae29812eed4c070bb4b3b9`;

axios.get(apiKey).then(response => {
    let conditions = response.data.weather[0].description;
    let temp = (response.data.main.temp - 273).toFixed(2);
    let far = (response.data.main.temp - 234).toFixed(2);
    console.log(`It is now ${temp} °C / ${far} °F in ${city} `)
    console.log(`The current weather conditions are ${conditions} `)
})


let fiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${city},us&appid=745aa89e7eae29812eed4c070bb4b3b9`;

axios.get(fiveDay).then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error);
})