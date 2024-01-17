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
    categories: [Category]
  }
  `
// Field values are populated from your back-end data stores via resolver functions.
const filmsResolver = {
  Film: {
    categories: async (parent) => await Film.getCategoriesForFilm(parent.film_id)
  }
}

export { FilmType, filmsResolver }
