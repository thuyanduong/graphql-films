import Language from '../models/Language.js'

const LanguageType = `#graphql
  type Language {
      language_id: ID!
      name: String!
      films: [Film!]
  }
  `
  
const languagesResolver = {
    Query: {
        languages: async () => await Language.getLanguages(),
        language: async (parent, args) => await Language.getLanguageById(args.id)
    },
    Language: {
        films: async (parent) => (await Language.getLanguageWithFilms(parent.language_id)).dataValues.films
    }
}

export {
    LanguageType, 
    languagesResolver
}