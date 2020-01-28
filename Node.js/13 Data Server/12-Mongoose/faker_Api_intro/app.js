let faker = require("faker");
faker.locale = 'en';

let newName = faker.name.findName();
let newEmail = faker.internet.email();
let newCard = faker.helpers.createCard();
let prodName = faker.commerce.productName();
let price = faker.commerce.price();
let word = faker.random.word();

console.log(newName, newEmail, newCard.company.name);
console.log(`${prodName} costs : ${price} ${word} `);
console.log(faker.date.weekday());

