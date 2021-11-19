const database = require('../models')

class UserSkillsControl{
    static async selectAllUserSkills (req, res){
        try {
        const allSkills = await database.user_skills.findAll()
        return res.status(200).json(allSkills) 
            }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async selectOneUserSkills (req, res){
        const paramObj = req.params
        let skillId = paramObj.skill

        try {
            const oneSkills = await database.user_skills.findOne( {where: { skillId : skillId }})
            return res.status(200).json(oneSkills)            
        }
        catch(error){
            return res.status(404).json(error.message)
        }
    }

    static async selectAllOneUserSkills (req, res){
        const paramObj = req.params
        let skillId = paramObj.skill
        
        try {
            const allOneSkills = await database.user_skills.findAll( {where: { skillId : skillId }})
            return res.status(200).json(allOneSkills)            
        }
        catch(error){
            return res.status(404).json(error.message)
        }
    }

    static async addUserSkills (req, res){
        const newSkills = req.body
        try {
            const newSkillsOk = await database.user_skills.create(newSkills)
            return res.status(200).json(newSkillsOk)
            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updateUserSkills (req, res){
        const paramObj = req.params
        let skillId = paramObj.skill
        const newUpdate = req.body
        try {
            await database.user_skills.update(newUpdate, {where: { skillId : skillId }} )
            const updatedSkills = await database.skills.findOne( {where: { skillId : skillId }})
            return res.status(200).json(updatedSkills)            
        }
        catch(error){
            return res.status(404).json(error.message)
        }
    }

    static async deleteUserSkills (req, res){
        const paramObj = req.params
        let skillId = paramObj.skill
        try {
            await database.user_skills.destroy({where: { skillId : skillId }})
            return res.status(200).json({alert: `skill ${skillId} was deleted`})            
        }
        catch(error){
            return res.status(404).json(error.message)
        }
    }
}

module.exports = UserSkillsControl;