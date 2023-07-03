import { AppDataSource } from "../data-source"
import { Movie } from "../entities"
import {
  Pagination,
  PaginationParams,
  movieCreate,
  movieRead,
  movieRepo,
  movieUpdate
} from "../interfaces"

const create = async (payload: movieCreate): Promise<Movie> => {
  const repo: movieRepo = AppDataSource.getRepository(Movie)
  const movie: Movie = repo.create(payload)
  await repo.save(movie)

  return movie
}
const read = async ({
  page,
  perPage,
  order,
  sort,
  prevPage,
  nextPage
}: PaginationParams): Promise<Pagination> => {
  const repo: movieRepo = AppDataSource.getRepository(Movie)
  const [movies, count]: [Movie[], number] = await repo.findAndCount({
    order: { [sort]: order },
    skip: page,
    take: perPage
  })
  return {
    count,
    data: movies,
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage
  }
}
const update = async (movie: Movie, payload: movieUpdate): Promise<Movie> => {
  const repo: movieRepo = AppDataSource.getRepository(Movie)

  const movieUpdate: Movie = repo.create({ ...movie, ...payload })

  await repo.save(movieUpdate)

  return movieUpdate
}
const destroy = async (movie: Movie): Promise<void> => {
  const repo: movieRepo = AppDataSource.getRepository(Movie)
  await repo.delete({ id: movie.id })
}

export default { create, read, update, destroy }
