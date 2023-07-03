import { Request, Response } from "express"
import { movieRead } from "../interfaces"
import { Movie } from "../entities"
import { movieServices } from "../services"

const create = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await movieServices.create(req.body)
  return res.status(201).json(movie)
}
const read = async (req: Request, res: Response): Promise<Response> => {
  const movies: movieRead = await movieServices.read()
  return res.status(200).json(movies)
}
const update = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await movieServices.update(res.locals.movie, req.body)
  return res.status(200).json(movie)
}
const destroy = async (req: Request, res: Response): Promise<Response> => {
  await movieServices.destroy(res.locals.movie)
  return res.status(204).json()
}

export default { create, read, update, destroy }
