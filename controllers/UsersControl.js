const database = require('../models')

class UsersControl{
    static async selectAllUsers (req, res){
        try {
        const allUsers = await database.users.findAll()
        return res.status(200).json(allUsers) 
            }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async selectOneUsers (req, res){
        const {user} = req.params
        try {
            const oneUsers = await database.users.findOne( {where: { user : user }})
            return res.status(200).json(oneUsers)            
        }
        catch(error){
            return res.status(404).json(error.message)
        }
    }

    static async createUsers (req, res){
        const newUsers = req.body
        try {
            const newUsersOk = await database.users.create(newUsers)
            return res.status(200).json(newUsersOk)
            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async updateUsers (req, res){
        const {user} = req.params
        const newUpdate = req.body
        try {
            await database.users.update(newUpdate, {where: { user : user }} )
            const updatedUsers = await database.users.findOne( {where: { user : user }})
            return res.status(200).json(updatedUsers)            
        }
        catch(error){
            return res.status(404).json(error.message)
        }
    }

    static async deleteUsers (req, res){
        const {user} = req.params
        try {
            await database.users.destroy({where: { user : user }})
            return res.status(200).json({alert: `user ${user} was deleted`})            
        }
        catch(error){
            return res.status(404).json(error.message)
        }
    }
}

module.exports = UsersControl;