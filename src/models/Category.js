import { Category, Film } from '../models/index.js'

class CategoryModel {

    static async getCategories() {
        return await Category.findAll({ order: [['category_id', 'ASC']], })
    }

    static async getCategoryById(id) {
        return await Category.findByPk(id)
    }

    static async getCategoryWithFilms(id) {
        return await Category.findByPk(id, { include: Film })
    }
}

export default CategoryModel