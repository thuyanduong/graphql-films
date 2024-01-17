import Category from "../models/category.model.js"

const getAllCategories = async (req, res, next) => {
  const categories = await Category.getCategories()
  res.send(categories)
}

const getCategory = async (req, res, next) => {
  const { id } = req.params
  const category = await Category.getCategoryById(id)
  res.send(category)
}

export { getAllCategories, getCategory }
