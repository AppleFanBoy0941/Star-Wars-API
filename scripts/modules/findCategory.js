// Import functions for creating categories
import createGrid__film from "./createGrid__film.js"
import createGrid__people from "./createGrid__people.js"
import createGrid__planets from "./createGrid__planets.js"

export default function findCategory(data) {
    let query = window.location.search
    let param = new URLSearchParams(query)
    let category = param.get('c').toLowerCase()

    switch (category) {
        case 'films':
            createGrid__film(data)
            break

        case 'people':
            createGrid__people(data)
            break

        case 'planets':
            createGrid__planets(data)
            break

        case 'starships':
            // Starships function here ...
            break

        case 'vehicles':
            // Vehicles function here ...
            break
            
        default:
            createGrid__film(data)
    }
}