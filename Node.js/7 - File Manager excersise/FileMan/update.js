const fs = require('fs');
const path = require('path');

function Update(data) {
    let [name, key, value] = data
    // let name = './Sports'
    // let key = 'job';
    // let value = 'Developer';

    let file = path.join(__dirname, name, 'info.json')
    console.log('file = ' + file);



    let datas = fs.readFileSync(file);
    let info = JSON.parse(data);
    console.log('data + info = ' + datas + info)
    info[key] = value;

    let content = JSON.stringify(info);
    console.log('content =' + content)

    fs.writeFile(path.join(file), content, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log('File Updated.... ')
        }
    })
}


module.exports = Update;