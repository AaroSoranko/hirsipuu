'use script'

const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "ohjelmointi",
    "javascript",
    "data",
    "ihmemies",
    "puhelin",
    "matikka",
    "pelle",
    "harjoitus",
    "moikka",
    "kauppa"
]

let randomizedWord =''
let maskedWord =''

const newGame = () => {
    const random = Math.floor(Math.random() * 10) + 1
    randomizedWord = words[random]
    maskedWord = "*".repeat(randomizedWord.length)
    console.log(randomizedWord)
    output.innerHTML = maskedWord
}

const win = () => {
    alert(`Olet arvannut sanan, sana on ${randomizedWord}.`)
    newGame()
}

const replaceFoundChars = (guess) =>{
    for (let i = 0;i<randomizedWord.length;i++) {
        const char = randomizedWord.substring(i,i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString = newString.join('')
            maskedWord = newString
        }
    }
    output.innerHTML = maskedWord
}

newGame()

input.addEventListener('keypress',(e) => {
    if (e.key === 'Enter') {
        e.preventDefault()

        const guess =input.value
        if (guess.toLowerCase()===randomizedWord.toLowerCase()){

        } else if (guess.lenght === 1){
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase() = randomizedWord.toLocaleLowerCase()){
                win()
            }
        } else {
            alert("Arvasit väärin hahaa")
        }
        input.value=''
    }
})