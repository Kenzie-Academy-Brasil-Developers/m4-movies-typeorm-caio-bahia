import { NextFunction, Request, Response } from "express"
import { Movie } from "../entities"
import { AppDataSource } from "../data-source"
import { movieRepo } from "../interfaces"
import { AppError } from "../errors"

const verifyIfNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const repo: movieRepo = AppDataSource.getRepository(Movie)
  const findMovie = await repo.findOneBy({
    name: req.body.name
  })

  if (findMovie) {
    throw new AppError("Movie already exists.", 409)
  }
  return next()
}

export default verifyIfNameExists
