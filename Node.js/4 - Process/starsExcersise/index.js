const print = require('./stars');
let arr = process.argv.slice(2);
console.log(arr);
let stars = arr[0];
let header = arr[1];
print(stars, header)

