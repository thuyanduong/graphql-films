import express from "express"
import filmsRouter from "./films.routes.js"
import languagesRouter from "./languages.routes.js"
import categoriesRouter from "./categories.routes.js"
import actorsRouter from "./actors.routes.js"

const router = express.Router()

router.use("/films", filmsRouter)
router.use("/languages", languagesRouter)
router.use("/categories", categoriesRouter)
router.use("/actors", actorsRouter)

export default router
