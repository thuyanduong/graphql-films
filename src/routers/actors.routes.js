import express from "express"
import { getAllActors, getActor } from "../controllers/actors.controller.js"

const router = express.Router()

router.get("/", getAllActors)

router.get("/:id", getActor)

export default router
