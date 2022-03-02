export default function createGrid__planets(planets) {
    let resultsSection = document.getElementsByClassName('resultsSection')[0]

    let planetColors = [
        {
            type : ['desert'],
            color : 'FAD5A5'
        },
        {
            type : ['grasslands'],
            color : 'b0b389'
        },
        {
            type : ['mountains', 'mountain ranges'],
            color : '818B99'
        },
        {
            type : ['jungle', 'jungles'],
            color : '004b49'
        },
        {
            type : ['rainforests'],
            color : '00755e'
        },
        {
            type : ['tundra'],
            color : 'dff4f3'
        },
        {
            type : ['ice caves'],
            color : 'A5F2F3'
        },
        {
            type : ['swamp', 'swamps'],
            color : '52641D'
        },
        {
            type : ['gas giant'],
            color : 'FB7F6B'
        },
        {
            type : ['forests'],
            color : '228B22'
        },
        {
            type : ['lakes'],
            color : '5d89ba'
        },
        {
            type : ['grassy hills'],
            color : '7ec850'
        },
        {
            type : ['cityscape'],
            color : '7f817e'
        },
        {
            type : ['ocean'],
            color : '003366'
        }
    ]

    planets.results.forEach( function(elm) {

        let filmId = elm.url.split('/').slice(-2, -1)[0]

        // Create elements
        let article = document.createElement('article')
        let planetDiv = document.createElement('div')
        let headerTag = document.createElement('h1')
        let headerATag = document.createElement('a')
        let terrainTag = document.createElement('p')
        
        // Add classes and attributes
        article.classList.add('result', 'result--planet')
        planetDiv.classList.add('result__planet')
        headerTag.classList.add('result__header')
        terrainTag.classList.add('result__terrain')

        headerATag.setAttribute('href', `details.html?c=films&id=${filmId}`)

        // Style planet
        let terr = elm.terrain.split(', ')
        let tLength = terr.length

        if (tLength > 1) {

            let gradient = ['linear-gradient(45deg']

            terr.forEach( function(t, index) {
                planetColors.forEach( function(color) {
                    if(color.type.includes(t)) {
                        gradient = `${gradient}, #${color.color}`
                    }
                })
            })

            gradient = `${gradient})`

            console.log(gradient)

            planetDiv.style.background = gradient
        }
        else {
            planetColors.forEach( function(color) {
                if(color.type == terr[0]) {
                    planetDiv.style.background = `#${color.color}`
                }
            })
        }

        // Add text
        let headerTagInner = document.createTextNode(elm.name)
        headerATag.appendChild(headerTagInner)

        let terrainTagInner = document.createTextNode(elm.terrain)
        terrainTag.appendChild(terrainTagInner)

        // Add event listener to article
        article.addEventListener('click', function() {
            location.href = `details.html?c=films&id=${filmId}`
        })

        // Append elements
        article.appendChild(planetDiv)
        headerTag.appendChild(headerATag)
        article.appendChild(headerTag)
        article.appendChild(terrainTag)

        resultsSection.appendChild(article)
    })
}