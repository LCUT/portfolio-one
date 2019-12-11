import { people } from '../assets/people.js'

let mainArea = document.querySelector('main')
let mainHeader = document.querySelector('header')

people.forEach(function(person) {
    let personDiv = document.createElement('div')
    let name = document.createElement('h2')
    let gender = document.createElement('h3')
    let pic = document.createElement('img')

    personDiv.appendChild(pic)
    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    

    let charNum = getCharNumber(person.url)

    pic.setAttribute('class', 'pic')
    personDiv.setAttribute('class', 'card')
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


const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' && person.gender !== 'male')
const allDivs = Array.from(mainArea.querySelectorAll('div'))




let maleButton = document.createElement('button')
maleButton.textContent = "Male Characters"
maleButton.addEventListener('click', () => {
    femaleCharacters.forEach(elt => {
        let matchedDiv = allDivs.filter(element => {
            return element.firstChild.textContent === elt.name
        })
        matchedDiv[0].setAttribute("style", "display: none")
    })
})

let femaleButton = document.createElement('button')
femaleButton.textContent = "Female Characters"
femaleButton.addEventListener('click', () => {
    maleCharacters.forEach(elt => {
        let matchedDiv = allDivs.filter(element => {
            return element.firstChild.textContent === elt.name
        })
        matchedDiv[0].setAttribute("style", "display: none")
    })
})

let otherButton = document.createElement('button')
otherButton.textContent = "Other Characters"
otherButton.addEventListener('click', () => {
  femaleCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
      return element.firstChild.textContent === elt.name
    })
    matchedDiv[0].setAttribute("style", "display: revert")
    
  })
})

mainHeader.appendChild(otherButton)
mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)







