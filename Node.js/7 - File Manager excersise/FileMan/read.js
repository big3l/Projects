const fs = require('fs');
const path = require('path');

function Read(data) {
    let [name] = data
    let file = path.join(__dirname, name, 'info.json')
    console.log('file = ' + file)

    // let directory = __dirname + name;
    // console.log('directory = ' + directory)

    // let filename = 'info.json';
    // console.log('filename = ' + filename)

    // let filepath = path.format({
    //     dir: directory,
    //     base: filename
    // })
    // console.log('Filepath = ' + filepath)


    fs.readFile(file, (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(JSON.parse(data))
        }
    })
}

module.exports = Read;