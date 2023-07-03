import { Router } from "express"
import middlewares from "../middlewares"
import { movieCreateSchema, movieUpdateSchema } from "../schemas"
import { movieControllers } from "../controllers"
import verifyIfNameExists from "../middlewares/verifyIfNameExistis.middleware"
import verifyIdExists from "../middlewares/verifyIdExists.middleware"

export const movieRouter: Router = Router()

movieRouter.post(
  "",
  middlewares.validateBody(movieCreateSchema),
  middlewares.verifyIfNameExists,
  movieControllers.create
)
movieRouter.get("", middlewares.pagination, movieControllers.read)

movieRouter.use(":/id", middlewares.verifyIdExists)

movieRouter.patch("/:id", middlewares.validateBody(movieUpdateSchema), movieControllers.update)
movieRouter.delete("/:id", verifyIdExists, movieControllers.destroy)
