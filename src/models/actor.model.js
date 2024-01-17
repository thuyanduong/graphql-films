import { Actor } from "./index.js"

class ActorModel {
  static async getActors() {
    return await Actor.findAll({ order: [["actor_id", "ASC"]] })
  }

  static async getActorById(actor_id) {
    return await Actor.findByPk(actor_id)
  }
}

export default ActorModel
