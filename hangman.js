class Hangman {
    constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    }
    get getPuzzle() {
        let puzzle = ''
        this.word.forEach(letter => this.guessedLetters.includes(letter) || letter === ' '  ? puzzle += letter : puzzle += '_')
        return puzzle
    }
    makeGuess(guess) {
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.getStatus() === 'playing') {
            if (isUnique) {
                this.guessedLetters.push(guess)
            }
            if (isUnique && isBadGuess) {
                this.remainingGuesses--
            }
        }
    }
    getStatus() {
        const allGuessed = () => {
            let correctGuesses = []
            let removeWhiteSpace = this.word.filter(e => e != ' ')
            this.word.forEach((e1) => this.guessedLetters.forEach(e2 => {
                if (e1 === e2) {
                    correctGuesses.push(e1)
                }
            }))
            correctGuesses = correctGuesses.filter(e => e != ' ')
            return removeWhiteSpace.length === correctGuesses.length
         }

        if (this.remainingGuesses === 0) {
            return 'failed'
        } else if (this.remainingGuesses > 0 && allGuessed()) {
            return 'finished'
        } else if (this.remainingGuesses > 0) {
            return 'playing'
        }
    }
    get statusMessage() {
        switch(this.getStatus()) {
            case 'playing':
                return `Guesses left: ${this.remainingGuesses}`
                break
            case 'failed':
                return `Nice try! The word was '${this.word.join('')}'` 
                break
            case 'finished':
                return 'Great work! You guessed the word'
                break
        }  
    }
}

