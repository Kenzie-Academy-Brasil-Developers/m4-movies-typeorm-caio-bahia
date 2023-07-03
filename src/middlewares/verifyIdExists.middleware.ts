import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { movieRepo } from "../interfaces"
import { Movie } from "../entities"
import { AppError } from "../errors"

const verifyIdExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const repo: movieRepo = AppDataSource.getRepository(Movie)

  const id: number = Number(req.params.id)

  const movieExists: boolean = await repo.exist({ where: { id } })

  if (!movieExists) throw new AppError("Movie not Found", 404)

  res.locals = { ...res.locals, movie: movieExists }
  return next()
}

export default verifyIdExists
