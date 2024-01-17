import Actor from "../models/actor.model.js"

const getAllActors = async (req, res, next) => {
  const actors = await Actor.getActors()
  res.send(actors)
}

const getActor = async (req, res, next) => {
  const { id } = req.params
  const actor = await Actor.getActorById(id)
  res.send(actor)
}

export { getAllActors, getActor }