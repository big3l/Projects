const fs = require('fs');

//writeStream...
const file = fs.createWriteStream('file.txt');
file.write('hello world');
file.write('+, hello world again+');
file.end(', from streams!');

const morefile = fs.createWriteStream('morefile.txt');
for (let i = 0; i < 10000; i++) {
    morefile.write('Hello world ' + i + '\n');
}
morefile.end('The end of stream');


//readStream...
const readable = fs.createReadStream(__dirname + '/morefile.txt',
    { encoding: 'utf8', highWaterMark: 900 * 1024 })
readable.on('data', function (chunk) {
    console.log(chunk.length)
    // will print:
    // 14 = Hello world + \n (charachter no.)
    // 65520 = default bit counter is 64 * 1024 (=64gb)
    // 65536 
    // 37837 = this is the remainder   
   
})
 // the parameters of the bit counter(stream) can be set using highwatermark:
