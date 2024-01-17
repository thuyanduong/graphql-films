import { makeExecutableSchema } from "@graphql-tools/schema"
import Film from "../models/film.model.js"
import Language from "../models/language.model.js"
import Category from "../models/category.model.js"
import { FilmType, filmsResolver } from "./films.js"
import { LanguageType, languagesResolver } from "./languages.js"
import { CategoryType, categoriesResolver } from "./category.js"

// A GraphQL schema defines all fields and their data types.
const QueryType = `#graphql
  type Query {
    films (page: Int, pageSize: Int): [Film]
    film (id: ID!): Film
    languages: [Language]
    language (id: ID!): Language
    categories: [Category]
    category (id: ID!): Category
  }
  `

// Field values are populated from your back-end data stores via resolver functions.
const QueryResolver = {
  Query: {
    films: async (_, args) => await Film.getFilms(args.page, args.pageSize),
    film: async (_, args) => await Film.getFilmById(args.id),
    languages: async () => await Language.getLanguages(),
    language: async (_, args) => await Language.getLanguageById(args.id),
    categories: async () => await Category.getCategories(),
    category: async (_, args) => await Category.getCategoryById(args.id)
  }
}

// A schema is created by merging all type definitions and resolver functions.
const schema = makeExecutableSchema({
  typeDefs: [QueryType, FilmType, LanguageType, CategoryType],
  resolvers: [QueryResolver, filmsResolver, languagesResolver, categoriesResolver]
})

export default schema
