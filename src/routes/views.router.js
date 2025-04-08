import { Router } from "express";
import viewsController from "../controllers/views.controller.js"

const router = Router()

router.get("/", viewsController.index)

router.get("/users", viewsController.getAllUsers)

router.get("/pets", viewsController.getAllPets)

export default router