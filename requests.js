const newWord = async () => {
    const response = await fetch('http://puzzle.mead.io/puzzle')
    const word = await response.json()
    return word.puzzle 
}