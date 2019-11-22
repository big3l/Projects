const fs = require('fs');

var fileExistPath = './index.html'
var missingFilePath = './404.html'

//Read files
fs.readFile(fileExistPath, 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data)
    console.log('1st: the data has been read')
})
console.log('2nd: the order is Asynchronous, should follow file read function but its quicker so runs first')

// fs.readFile(missingFilePath, 'utf8', (err, data) => {
//     if (err) throw err;
//         console.log(data)
// })

//Sync
var data = fs.readFileSync(fileExistPath, 'utf8');
// console.log(data)
console.log('3rd: this is quicker than sync function')
console.log('4th: the data has been read')