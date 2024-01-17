import express from 'express'
import {getAllFilms, getFilm, getFilmWithCategories} from '../controllers/films.controller.js'

const router = express.Router()

router.get('/', getAllFilms)

router.get('/:id', getFilm)

router.get('/:id/categories', getFilmWithCategories)

export default router