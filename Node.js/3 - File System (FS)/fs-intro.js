const fs = require('fs'); 
const path = require('path');

//creating a new folder
fs.mkdir(path.join(__dirname, '/test'), (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('Folder created....')
    }
})

//creating a new File and write inside
const content = 'New file created with nodejs'

fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), content, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('File Created....')
    }
})

// to append a file
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love react JS', (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('File Appended....')
    }
})

// Read a file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
    }
})