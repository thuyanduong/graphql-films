import Film from "../models/film.model.js"

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

const filmsResolver = {
  Query: {
    films: async (_, args) => await Film.getFilms(args.page, args.pageSize),
    film: async (_, args) => await Film.getFilmById(args.id),
  },
  Film: {
    categories: async (parent) => await Film.getCategoriesForFilm(parent.film_id),
  },
}

export { FilmType, filmsResolver }
