var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

class gotCharacter {
    constructor(id, name, stats) {
        this.id = id;
        this.name = name;
        this.base_stat = stats
    }
}

const newGotChar = new gotCharacter()

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const theData = getAPIData('https://anapioficeandfire.com/api/characters/')
.then(data => {
    for (const character of data.results) {
        getAPIData(got.url).then(gotData => {
            populateDOM(gotData)
        })
    }
})

let mainArea = document.querySelector('main')

function populateDOM(single_character) {
    gotArray.forEach(name => {
        console.log(characters)
        let gotCard = document.createElement('div')
        let gotName = document.createElement('h3')
        let photo = document.createElement('img')
    
        gotCard.setAttribute('class', 'charDivs')
        pic.setAttribute('class', 'picDivs')

        let gotNum = getGotNumber(got.url)

        name.textContent = got.name

        pic.src = `../images/${gotNum}.png`

        gotDiv.appendChild(name)
        gotDiv.appendChild(pic)

        mainArea.appendChild(gotDiv)
    })
}

function getGotNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return `00${charID.slice(1, 2)}`
    } else {
        return `0${charID}`
    }
}

function fillCardFront(gotFront, data) {
    gotFront.setAttribute('class', 'card__face card__face--front')
    let name = document.createElement('P')
    let pic = document.createElement('img')
    pic.setAttribute('class', 'picDivs')
    let gotNum = getGotNumber(data.id)
    gotFront.appendChild(name)

    pic.src = `../images/${gotNum}.png`

    gotFront.appendChild(pic)
    gotFront.appendChild(name)
}

function fillCardBack(gotBack, data) {
    gotBack.setAttribute('class', 'card__face card__face--back')
    let gotOrder = document.createElement('p')
    let gotHP = document.createElement('h5')
    gotOrder.textContent = `#${data.id} ${data.name[0].toUpperCase()}${data.name.slice(1)}`

    gotBack.appendChild(gotOrder)
    gotBack.appendChild(gotHP)

}