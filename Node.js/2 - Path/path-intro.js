const path = require('path');

//base file name
console.log(path.basename(__filename));
// path-intro.js

//Directory name
console.log(path.dirname(__filename));
// /home/dan/Desktop/Projects/Projects/Node.js/Path

//File extension
console.log(path.extname(__filename));
// .js

//Path object
console.log(path.parse(__filename));
// { root: '/',
//   dir: '/home/dan/Desktop/Projects/Projects/Node.js/Path',
//   base: 'path-intro.js',
//   ext: '.js',
//   name: 'path-intro' }
