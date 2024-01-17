import express from "express"
import { getAllFilms, getFilm } from "../controllers/films.controller.js"

const router = express.Router()

router.get("/", getAllFilms)

router.get("/:id", getFilm)

export default router
