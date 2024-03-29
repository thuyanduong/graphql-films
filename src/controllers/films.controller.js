import Film from "../models/film.model.js"

const getAllFilms = async (req, res, next) => {
  const { page, pageSize } = req.query
  const films = await Film.getFilms(page, pageSize)
  res.send(films)
}

const getFilm = async (req, res, next) => {
  const { id } = req.params
  const film = await Film.getFilmById(id)
  res.send(film)
}

export { getAllFilms, getFilm }
