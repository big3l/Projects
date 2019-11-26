let questions = [
    'what is your name?',
    'what is your fav hobby?',
    'what is your preferred programming language?'
]

let answers = [];

function ask(i) {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(' > ')
}

process.stdin.on('data', function (data) {
    // process.stdout.write('\n' + data.toString().trim() + '\n')
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    }
    else { process.exit() }
});

process.on('exit', function () {
    process.stdout.write('\n\n')
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later! \n`)
    process.stdout.write(`Your answers are = ${answers} \n`)
    console.log(answers)
})

ask(0)
