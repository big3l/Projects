function print(star = 1, header = 'Enter no of stars and header') {
    let stars = '';
    for (let i = 0; i < star; i++) {
        stars += '*';
    }
    console.log(stars)
    console.log(header)
    console.log(stars)
}
module.exports = print;


// for (let i = 0 ; i < 15 ; i++){
//     process.stdout.write('*');
// }
// console.log(header)

// for (let i = 0 ; i < 15 ; i++){
//     process.stdout.write('*');
// }