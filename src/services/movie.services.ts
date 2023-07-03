import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import { movieCreate, movieRead, movieRepo, movieUpdate } from "../interfaces"

const create = async (payload: movieCreate): Promise<Movie> => {
  const repo: movieRepo = AppDataSource.getRepository(Movie)
  const movie: Movie = repo.create(payload)
  await repo.save(movie)

  return movie
}
const read = async (): Promise<movieRead> => {
  const repo: movieRepo = AppDataSource.getRepository(Movie)
  return await repo.find()
}
const update = async (movie: Movie, payload: movieUpdate): Promise<Movie> => {
  const repo: movieRepo = AppDataSource.getRepository(Movie)
  const movieUpdate: Movie = repo.create({ ...movie, ...payload })

  await repo.save(movieUpdate)

  return movieUpdate
}
const destroy = async (movie: Movie): Promise<void> => {
  const repo: movieRepo = AppDataSource.getRepository(Movie)
  await repo.remove(movie)
}

export default { create, read, update, destroy }
