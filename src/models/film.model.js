import { Film, Language, Category } from './index.js'
import paginate from '../util/pagination.js'

class FilmModel {

    static async getFilms(page, pageSize) {
        return await Film.findAll({
            order: [['film_id', 'DESC']],
            include: Language,
            ...paginate(page, pageSize)
        })
    }

    static async getFilmById(film_id) {
        return await Film.findByPk(film_id, { include: Language })
    }

    static async getFilmWithCategories(film_id) {
        return await Film.findByPk(film_id, { include: Category })
    }

    static async getCategoriesForFilm(film_id){
        return (await Film.findByPk(film_id, { include: Category })).dataValues.categories
    }
}

export default FilmModel