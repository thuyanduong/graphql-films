import { Film, Language, Category, Actor } from "./index.js"
import paginate from "../util/pagination.js"

class FilmModel {
  static async getFilms(page, pageSize) {
    return await Film.findAll({
      order: [["film_id", "ASC"]],
      // include: Language,
      ...paginate(page, pageSize)
    })
  }

  static async getFilmById(film_id) {
    return await Film.findByPk(film_id, { include: [Language, Category, Actor] })
  }

  static async getCategoriesForFilm(film_id) {
    return (await Film.findByPk(film_id, { include: Category })).dataValues.categories
  }
}

export default FilmModel
