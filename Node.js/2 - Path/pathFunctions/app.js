const pathFunctions = require('./pathFunctions')
const path = require('path');

console.log('app: Live Server')

pathFunctions.getConstants();

pathFunctions.getBaseName(__filename);
pathFunctions.getBaseName('/home/user/index.js');

pathFunctions.getDirName(__dirname);
pathFunctions.getDirName('/home/user/index.js');

pathFunctions.getExtName(__filename);
pathFunctions.getExtName('/home/user/book.aformat');
pathFunctions.getExtName('/home/user/book.pdf');
pathFunctions.getExtName('/home/user/book.txt');

// output from above.....
// app: Live Server
// __filename:/home/dan/Desktop/Projects/Projects/Node.js/2 - Path/pathFunctions/pathFunctions.js
// __dirname:/home/dan/Desktop/Projects/Projects/Node.js/2 - Path/pathFunctions
// basename :app.js
// basename :pathFunctions.js
// dirname : /home/dan/Desktop/Projects/Projects/Node.js/2 - Path
// dirname : /home/dan/Desktop/Projects/Projects/Node.js/2 - Path
// extname : .js
// extname : .aformat
// extname : .pdf
// extname : .txt


//join - puts the dir, name, base, ext together and returns as a path
console.log('Join function')
let result;
result = path.join('/home', 'user_folder', 'style.css/joiningfolder');
console.log('join : ' + result)
result = path.join('/bookStore', 'learnJsIn24hrs', 'book.pdf');
console.log('join : ' + result)
result = path.join('This is the new path to join');
console.log('join : ' + result)

// output from join functions....
// Join function
// join : /home/user_folder/style.css/joiningfolder
// join : /bookStore/learnJsIn24hrs/book.pdf
// join : This is the new path to join

//parse - prints the path as an object
console.log('Parse Function')
result = path.parse('/bookShop/yourFavBook/book.pdf');
console.log(result);
console.log(typeof result);

console.log('dir = ' + result.dir)
console.log('base = ' + result.base)
console.log('ext = ' + result.ext)
console.log('name = ' + result.name)

// output from parse functions.....
// Parse Function
// {
//   root: '/',
//   dir: '/bookShop/yourFavBook',
//   base: 'book.pdf',
//   ext: '.pdf',
//   name: 'book'
// }
// object
// dir = /bookShop/yourFavBook
// base = book.pdf
// ext = .pdf
// name = book

//format - prints objects as string
console.log('Format Function')
result = path.format({
    dir: '/store/nameOfABook',
    base: 'bookName.pdf',
})
console.log('Format: ' + result)

result = path.format({
    root: '/',
    dir: '/store/nameOfABook',
    name: 'bookName',
    ext: '.pdf'
})
console.log('Format: ' + result)

result = path.format({
    dir: '/store/nameOfABook',
    base: 'bookName.pdf',
})
console.log('Format: ' + result)

// Format Function
// Format: /store/nameOfABook/bookName.pdf
// Format: /store/nameOfABook/bookName.pdf
// Format: /store/nameOfABook/bookName.pdf