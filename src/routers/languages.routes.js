import express from "express"
import { getAllLanguages, getLanguage } from "../controllers/language.controller.js"

const router = express.Router()

router.get("/", getAllLanguages)

router.get("/:id", getLanguage)

export default router
