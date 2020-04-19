const game1 = new Hangman('Car Space', 5)

document.querySelector('#puzzle').textContent = game1.getPuzzle()
document.querySelector('#guesses').textContent = game1.statusMessage()








window.addEventListener('keypress', e => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    
    document.querySelector('#puzzle').textContent = game1.getPuzzle()
    document.querySelector('#guesses').textContent = game1.statusMessage()
})