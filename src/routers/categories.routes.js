import express from 'express'
import { getAllCategories, getCategory, getCategoryWithFilms } from '../controllers/categories.controller.js'

const router = express.Router()

router.get('/', getAllCategories)

router.get('/:id', getCategory)

router.get('/:id/films', getCategoryWithFilms)

export default router