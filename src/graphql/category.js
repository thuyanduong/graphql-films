import Category from "../models/category.model.js";

const CategoryType = `#graphql
  type Category {
      category_id: ID
      name: String
      films: [Film]
  }
  `;

const categoriesResolver = {
  Query: {
    categories: async () => await Category.getCategories(),
    category: async (_, args) => await Category.getCategoryById(args.id),
  },
  Category: {
    films: async (parent) =>
      await Category.getFilmsInCategory(parent.category_id),
  },
};

export { CategoryType, categoriesResolver };
