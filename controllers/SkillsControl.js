const database = require('../models')

class SkillsControl{
    static async selectAllSkills (req, res){
        try {
        const allSkills = await database.skills.findAll()
        return res.status(200).json(allSkills) 
            }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async selectOneSkills (req, res){
        const paramObj = req.params
        let skill = paramObj.skill

        try {
            const oneSkills = await database.skills.findOne( {where: { skill : skill }})
            return res.status(200).json(oneSkills)            
        }
        catch(error){
            return res.status(404).json(error.message)
        }
    }

    static async addSkills (req, res){
        const newSkills = req.body
        try {
            const newSkillsOk = await database.skills.create(newSkills)
            return res.status(200).json(newSkillsOk)
            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updateSkills (req, res){
        const paramObj = req.params
        let skill = paramObj.skill
        const newUpdate = req.body
        try {
            await database.skills.update(newUpdate, {where: { skill : skill }} )
            const updatedSkills = await database.skills.findOne( {where: { skill : skill }})
            return res.status(200).json(updatedSkills)            
        }
        catch(error){
            return res.status(404).json(error.message)
        }
    }

    static async deleteSkills (req, res){
        const {skill} = req.params
        try {
            await database.skills.destroy({where: { skill : skill }})
            return res.status(200).json({alert: `skill ${skill} was deleted from DB`})            
        }
        catch(error){
            return res.status(404).json(error.message)
        }
    }
}

module.exports = SkillsControl;