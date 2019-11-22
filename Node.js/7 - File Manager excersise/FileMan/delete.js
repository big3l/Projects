const fs = require('fs');
const path = require('path');

function Delete(data) {
    let [delFolder] = data
    let filePath = path.join(path.dirname(__filename), delFolder, 'info.json')
    console.log('filepath = ' + filePath)

    let dirPath = path.join(path.dirname(__filename), delFolder)
    console.log('dirPath = ' + dirPath)

    fs.unlinkSync(filePath);

    fs.rmdirSync(dirPath);

    console.log('filePath deleted = ' + filePath)
    console.log('dirPathdeleted = ' + dirPath);
}

module.exports = Delete;