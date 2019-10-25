import { people } from '../assets/people.js'

let mainArea = document.querySelector('main')

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const allDivs = Array.from(mainArea.querySelectorAll('div'))

const otherCharacters = people.filter(person => person.gender !== 'female' && person.gender !== 'male')


let maleButton = document.createElement('button')
maleButton.textcontent = "Male Characters"
maleButton.addEventListener('click', () => {
    maleCharacters.forEach(elt => {
        let matchedDiv = allDivs.filter(element => {
            return element.firstChild.textContent === elt.name
        })
        console.log(matchedDiv)
        matchedDiv[0].setAttribute("style", "display: none;")
    })
    femaleCharacters.forEach(elt => {
        let matchedDiv = allDivs.filter(elemnt => {
            return element.firstChild.textContent === elt.name
        })
        console.log(matchedDiv)
        matchedDiv[0].setAttribute("style", "display: none;")
    })
})

let femaleButton = document.createElement('button')
femaleButton.textContent = "Female Characters"
femaleButton.addEventListener('click', event => {

})

mainArea.appendChild(maleButton)
mainArea.appendChild(femaleButton)

people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('h3')
    let pic = document.createElement('img')

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    let charNum = getCharNumber(person.URL)

    name.textContent = person.name
    gender.textContent = person.gender

    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    mainArea.appendChild(personDiv)
})

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ) {
        return charID.slice(1,2)
    } else {
        return charID
    }
}







