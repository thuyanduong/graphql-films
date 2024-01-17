import Language from "../models/language.model.js"

// A GraphQL needs you to define all fields and their data types.
const LanguageType = `#graphql
  type Language {
      language_id: ID
      name: String
      films: [Film]
  }
  `

// Field values are populated from your back-end data stores via resolver functions.
const languagesResolver = {
  Language: {
    films: async (parent) => await Language.getFilmsInLanguage(parent.language_id)
  }
}

export { LanguageType, languagesResolver }
