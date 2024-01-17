import Film from "../models/film.model.js"

// A GraphQL needs you to define all fields and their data types.
const FilmType = `#graphql
  type Film {
    film_id: ID 
    title: String
    language_id: Int
    description: String
    length: Int
    rating: String
    release_year: Int
    language: Language

  }
  `
// Field values are populated from your back-end data stores via resolver functions.
const filmsResolver = {
  Film: {

  }
}

export { FilmType, filmsResolver }
