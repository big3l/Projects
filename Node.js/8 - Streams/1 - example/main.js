const fs = require('fs');

const readable = fs.createReadStream(__dirname + '/lorem.txt', { encoding: 'utf8', highWaterMark: 20 * 1024});
const writeable = fs.createWriteStream(__dirname + '/loremcopy.txt');

readable.on('data', function (piece) {
    console.log(piece.length)
    writeable.write(piece)
})
