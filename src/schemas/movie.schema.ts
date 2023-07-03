import { z } from "zod"

const movieSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  description: z.string().optional().nullish(),
  duration: z.number(),
  price: z.number()
})

const movieCreateSchema = movieSchema.omit({ id: true })
const movieUpdateSchema = movieCreateSchema.partial()

export { movieCreateSchema, movieUpdateSchema, movieSchema }
