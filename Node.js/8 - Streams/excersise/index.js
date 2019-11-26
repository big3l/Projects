const fs = require('fs');
const path = require('path');

// const findWord = process.argv[2];
// const findFile = process.argv[3];

let [findWord = 'function', findFile = 'data.txt'] = process.argv.slice(2)

//default file
if (!fs.existsSync(findFile)) {
    findFile = 'data.txt'
}

// const read = fs.createReadStream(__dirname + '/data.txt', { encoding: 'utf8' });
const readFile = fs.createReadStream(__dirname + '/' + findFile, { encoding: 'utf8' })

let i = 0;
let searchRes = 0;
readFile.on('data', function (chunk) {
    i++;
    console.log('Reading Chunk....' + i)
    if (chunk.includes(findWord)) {
        searchRes++;
    }
})

readFile.on('end', function () {
    process.stdout.write('End of Data \n')
    process.stdout.write(`Number of chunks: ${i} \n`)
    process.stdout.write(`Found '${findWord}' ${searchRes} times \n`)
})

 