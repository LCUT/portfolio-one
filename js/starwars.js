


personDiv.appendChild(gender)
personDiv.appendChild(pic)

mainArea.appendChild(personDiv)


function get CharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ) {
        return charID.slice(1,2)
    } else {
        return charID
    }
}

const maleCharacters = people.filter(person => person.gender === 'male')