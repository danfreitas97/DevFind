const database = require('../models')

class NivelControl{
    static async selectAllOneLevels (req, res){
        const paramObj = req.params
        let level = paramObj.nivel
        
        try {
            const allOneLevels = await database.user_skills.findAll( {where: { nivel : level }})
            return res.status(200).json(allOneLevels)            
        }
        catch(error){
            return res.status(404).json(error.message)
        }
    }
}

module.exports = NivelControl;