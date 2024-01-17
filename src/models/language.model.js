import { Film, Language } from "./index.js"

class LanguageModel {
  static async getLanguages() {
    return await Language.findAll({ order: [["language_id", "ASC"]] })
  }

  static async getLanguageById(language_id) {
    return await Language.findByPk(language_id)
  }

  static async getLanguageWithFilms(language_id) {
    return await Language.findByPk(language_id, { include: Film })
  }

  static async getFilmsInLanguage(language_id) {
    return (await Language.findByPk(language_id, { include: Film })).dataValues
      .films
  }
}

export default LanguageModel
