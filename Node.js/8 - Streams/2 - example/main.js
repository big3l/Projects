const fs = require('fs');

//create readable stream
let read = fs.createReadStream('test.txt');
process.stdout.write('test.txt has been read \n')

//creat writeable stream
let writeable = fs.createWriteStream('output.txt')
process.stdout.write('output.txt has been created \n')

//pipe is the read and write operations
//it will read test.txt and write data to output.txt
read.pipe(writeable);
process.stdout.write('test.txt has been copied to output.txt \n')