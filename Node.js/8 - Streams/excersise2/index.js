const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

//compress the file input.txt to input.txt.gz
const [filepath = path.join(__dirname, 'input.txt')] = process.argv.slice(2);

const stream = fs.createReadStream(filepath).pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(filepath + '.gz'));

stream.on('exit', () => console.log('File Compressed'));



//////////////////////////////////////////////////////////////////////////////////////////

// let newFile = process.argv[2];

// const readable = fs.createReadStream(__dirname + '/' + filepath, { encoding: 'utf8' });
// process.stdout.write('input.txt has been read \n');

// const compress = fs.createWriteStream('input.txt.gz')
// process.stdout.write('input.txt.gz has been created \n')

// const compressed = zlib.deflate(input)
// const output = zlib.inflate(compressed)

// readable.pipe(compress);
// compress('File Compressed. \n')
