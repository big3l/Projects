
// 'Process' is like 'event' (onClick, onChange, onLoad etc)

// btn.on('click', function () { })

// process.on('exit', function (code) {
//         console.log(`About to exit ${code}`)
// })
// console.log(process.argv);

// function run() {
//         let counter = 0;
//         setInterval(() => {
//                 counter++;
//                 console.log(counter);
//                 if (counter === 20){
//                         console.log(`Counter got to ${counter}, exit the loop`)
//                         process.exit();
//                 }
//         }, 10)
// }
// run();

// console.log(process.argv[2])

let command = process.argv[2];
// console.log(command);
if (command === 'fly') {
        console.log('flying....');
} 
else if (command === 'drive') {
        console.log('driving....')
}
else if (command === 'email') {
        console.log('sending....')
}
else if (command === 'backup') {
        console.log('Back up is complete')
}

