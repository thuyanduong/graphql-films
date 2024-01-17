import { Category, Film } from './index.js'

class CategoryModel {

    static async getCategories() {
        return await Category.findAll({ order: [['category_id', 'ASC']], })
    }

    static async getCategoryById(category_id) {
        return await Category.findByPk(category_id)
    }

    static async getCategoryWithFilms(category_id) {
        return await Category.findByPk(category_id, { include: Film })
    }

    static async getFilmsInCategory(category_id) {
        return (await Category.findByPk(category_id, { include: Film })).dataValues.films
    }
}

export default CategoryModel