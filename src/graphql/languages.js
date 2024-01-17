import Language from "../models/language.model.js"

const LanguageType = `#graphql
  type Language {
      language_id: ID
      name: String
      films: [Film]
  }
  `

const languagesResolver = {
  Query: {
    languages: async () => await Language.getLanguages(),
    language: async (_, args) => await Language.getLanguageById(args.id),
  },
  Language: {
    films: async (parent) => await Language.getFilmsInLanguage(parent.language_id),
  },
}

export { LanguageType, languagesResolver }
