import { Router } from "express"
import middlewares from "../middlewares"
import { movieCreateSchema, movieUpdateSchema } from "../schemas"
import { movieControllers } from "../controllers"

export const movieRouter: Router = Router()

movieRouter.post("", middlewares.validateBody(movieCreateSchema), movieControllers.create)
movieRouter.get("", movieControllers.read)

movieRouter.use(":/id", middlewares.verifyIdExists)

movieRouter.patch("/:id", middlewares.validateBody(movieUpdateSchema), movieControllers.update)
movieRouter.delete("/:id", movieControllers.destroy)
