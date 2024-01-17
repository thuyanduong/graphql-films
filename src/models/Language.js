import {Film, Language} from './index.js'

class LanguageModel {
    static async getLanguages(){
        return await Language.findAll({order: [['language_id', 'ASC']],})
    }

    static async getLanguageById(id){
        return await Language.findByPk(id)
    }

    static async getLanguageWithFilms(id){
        return await Language.findByPk(id, {include: Film})
    }
}

export default LanguageModel