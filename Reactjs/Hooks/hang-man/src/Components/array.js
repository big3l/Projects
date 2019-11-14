let word = 'javascript';
let guessed_letters = ['a', 'b', 'c']

compare = () => {
    let guessArray = word.split('').map((letter) => {
        if (guessed_letters.includes(letter)) {
            return letter
        } else {
            return ('_')
        }

    })
    return guessArray
}

{this.compare()}



// ['_','_','_','_','_','_','_','_','_','_']