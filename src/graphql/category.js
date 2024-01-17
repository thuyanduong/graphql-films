import Category from "../models/category.model.js"

// A GraphQL needs you to define all fields and their data types.
const CategoryType = `#graphql
  type Category {
      category_id: ID
      name: String
      films: [Film]
  }
  `

// Field values are populated from your back-end data stores via resolver functions.
const categoriesResolver = {
  Category: {
    films: async (parent) => await Category.getFilmsInCategory(parent.category_id)
  }
}

export { CategoryType, categoriesResolver }
