import { makeExecutableSchema } from '@graphql-tools/schema'
import { FilmType, filmsResolver } from './films.graphql.js'
import { LanguageType, languagesResolver } from './languages.graphql.js'
import { } from './category.graphql.js'

const QueryType = `#graphql
  type Query {
    films (page: Int, pageSize: Int): [Film!]!
    film (id: ID!): Film
    languages: [Language!]!
    language (id: ID!): Language
  }
  `

const schema = makeExecutableSchema({
  typeDefs: [QueryType, FilmType, LanguageType],
  resolvers: [filmsResolver, languagesResolver]
})

export default schema