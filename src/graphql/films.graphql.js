import Film from '../models/Film.js'

const FilmType = `#graphql
  type Film {
      film_id: ID!
      title: String!
      language_id: Int!
      description: String
      length: Int
      rating: String
      release_year: Int
      language: Language!
      categories: [Category!]
  }
  `

const filmsResolver = {
    Query: {
        films: async (parent, args) => (await Film.getFilms(args.page, args.pageSize)),
        film: async (parent, args) => (await Film.getFilmById(args.id))
    },
    Film: {
        categories: async (parent, args) => (await Film.getFilmWithCategories(parent.film_id)).dataValues.categories
    }
}

export {
    FilmType,
    filmsResolver
}