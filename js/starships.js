import { starships } from '../assets/starships.js'

let contentArea = document.querySelector
    ('.content')

starships.forEach(ship => {
    let shipDiv = document.createElement('div')
    let shipName = document.createElement('h3')
    let shipPic = document.createElement('img')

    shipName.textContent = ship.name

    let shipNum = getCharNumber(ship.url)

    shipPic.src = 'https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg'

    shipDiv.appendChild(shipName)
    shipDiv.appendChile(shipPic)
    contentArea.appendChild(shipDiv)
})

