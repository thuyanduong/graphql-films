import express from "express";
import {
  getAllLanguages,
  getLanguage,
  getLanguageWithFilms,
} from "../controllers/language.controller.js";

const router = express.Router();

router.get("/", getAllLanguages);

router.get("/:id", getLanguage);

router.get("/:id/films", getLanguageWithFilms);

export default router;
