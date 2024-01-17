import {makeExecutableSchema} from '@graphql-tools/schema'
import {FilmType, filmsResolver} from './films.graphql.js'
import {LanguageType, languagesResolver} from './languages.graphql.js'
import {CategoryType, categoriesResolver} from './category.graphql.js'

const QueryType = `#graphql
  type Query {
    films(page: Int, pageSize: Int): [Film!]!
    languages: [Language!]!
    categories: [Category!]!
    film (id: ID!): Film
    language (id: ID!): Language
    category (id: ID!): Category
  }
  `

//Step 3. define a schema
const schema = makeExecutableSchema({
    typeDefs: [QueryType, FilmType, LanguageType, CategoryType], 
    resolvers: [filmsResolver, languagesResolver, categoriesResolver]
  })

export default schema