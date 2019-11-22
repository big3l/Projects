const fs = require('fs');
const path = require('path');

function Create(data) {
    
    const fileMan = path.dirname(__filename);
    console.log(fileMan);

    let [name,age,hobby] =  data
    
    let newFolder = fileMan + '/' + info.hobby;

    fs.mkdir(path.join(newFolder), (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Folder created....')
        }
    })

    // let nameFile = path.dirname(__dirname);
    // let newFile = nameFile + '/' + info.json;
    // console.log('newFile = ' + newFile)

    let content = JSON.stringify(info);

    fs.writeFile(path.join(newFolder, 'info.json'), content, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('File Created....')
        }
    })
}

module.exports = Create;