import { DeepPartial, Repository } from "typeorm"
import { movieCreateSchema, movieUpdateSchema, movieSchema } from "../schemas"
import { z } from "zod"
import { Movie } from "../entities"

type movieCreate = z.infer<typeof movieCreateSchema>
type movieRead = Array<Movie>
type movieUpdate = DeepPartial<movieCreate>
type movieResp = z.infer<typeof movieSchema>

type movieRepo = Repository<Movie>

export { movieCreate, movieRead, movieUpdate, movieRepo }
