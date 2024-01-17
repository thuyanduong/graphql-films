import { Film, Language, Category } from './index.js'
import paginate from '../util/pagination.js'

class FilmModel {

    static async getFilms(page, pageSize) {
        return await Film.findAll({
            order: [['film_id', 'ASC']],
            include: Language,
            ...paginate(page, pageSize)
        })
    }

    static async getFilmById(id) {
        return await Film.findByPk(id, { include: Language })
    }

    static async getFilmWithCategories(id) {
        return await Film.findByPk(id, { include: Category })
    }
}

export default FilmModel