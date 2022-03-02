export default function createGrid__people(people) {
    let resultsSection = document.getElementsByClassName('resultsSection')[0]

    people.results.forEach( function(elm) {

        let peopleId = elm.url.split('/').slice(-2, -1)[0]

        // Create elements
        let article = document.createElement('article')
        let headerTag = document.createElement('h1')
        let headerATag = document.createElement('a')
        let birthTag = document.createElement('p')
        
        // Add classes and attributes
        article.classList.add('result', 'result--people')
        headerTag.classList.add('result__header')
        birthTag.classList.add('result__birth')

        headerATag.setAttribute('href', `details.html?c=people&id=${peopleId}`)


        // Add text
            let headerTagInner = document.createTextNode(elm.name)
            headerATag.appendChild(headerTagInner)

            let birthSpanInner = document.createTextNode(elm.birth_year)
            birthTag.innerHTML = `Birth year: <span>${elm.birth_year}</span>`

        // Add event listener to article
        article.addEventListener('click', function() {
            location.href = `details.html?c=films&id=${peopleId}`
        })

        // Append elements
        headerTag.appendChild(headerATag)
        article.appendChild(headerTag)
        article.appendChild(birthTag)

        resultsSection.appendChild(article)
    })
}