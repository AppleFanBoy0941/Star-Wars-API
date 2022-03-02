import findCategory from './modules/findCategory.js'

let query = window.location.search
let param = new URLSearchParams(query)
let category = param.get('c').toLowerCase()

if(category === null) {
    fetch(`https://swapi.dev/api/films/`)
        .then(res => res.json())
        .then(data => findCategory(data))
}
else if(category !== null) {
    fetch(`https://swapi.dev/api/${category}/`)
        .then(res => res.json())
        .then(data => findCategory(data))
}