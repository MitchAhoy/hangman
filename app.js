const startGame = async () => {
    const word = await newWord()
    game1 = new Hangman(word, 5)
    render()
}

const render = () => {
document.querySelector('#puzzle').textContent = game1.getPuzzle
document.querySelector('#guesses').textContent = game1.statusMessage
}

startGame()



document.querySelector('#reset').addEventListener('click', startGame)

window.addEventListener('keypress', e => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})