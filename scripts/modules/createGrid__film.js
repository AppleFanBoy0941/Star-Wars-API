export default function createGrid__film(films) {
    
    let resultsSection = document.getElementsByClassName('resultsSection')[0]

    films.results.forEach( function(elm) {

        let filmId = elm.url.split('/').slice(-2, -1)[0]

        // Create elements
        let article = document.createElement('article')
        let idTag = document.createElement('span')
        let headerTag = document.createElement('h1')
        let headerATag = document.createElement('a')
        let directorTag = document.createElement('p')
        
        // Add classes and attributes
        article.classList.add('result', 'result--film')
        idTag.classList.add('result__episodeId')
        headerTag.classList.add('result__header')
        directorTag.classList.add('result__director')

        headerATag.setAttribute('href', `details.html?c=films&id=${filmId}`)


        // Add text
            let idTagInner = document.createTextNode(elm.episode_id)
            idTag.appendChild(idTagInner)

            let headerTagInner = document.createTextNode(elm.title)
            headerATag.appendChild(headerTagInner)

            let directorTagInner = document.createTextNode(elm.director)
            directorTag.appendChild(directorTagInner)

        // Add event listener to article
        article.addEventListener('click', function() {
            location.href = `details.html?c=films&id=${filmId}`
        })

        // Append elements
        article.appendChild(idTag)
        headerTag.appendChild(headerATag)
        article.appendChild(headerTag)
        article.appendChild(directorTag)

        resultsSection.appendChild(article)
    })
}