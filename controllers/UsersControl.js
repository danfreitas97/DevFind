const database = require('../models')
const bcrypt = require('bcrypt')

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
            const senhaHash = await UsersControl.hashin(newUsers.senha)
            const newUsersOk = await database.users.create({...newUsers, senha: senhaHash})
            return res.status(200).json(newUsersOk)
            
        }
        catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async hashin (senha) {
        const cost = 12;
        return bcrypt.hash (senha, cost);
    }

    static async updateUsers (req, res){
        const paramObj = req.params
        let user = paramObj.user
        const newUpdate = req.body
        try {
            let senhaHash

            if (newUpdate.senha) {
                senhaHash = await UsersControl.hashin(newUpdate.senha)
            }

            await database.users.update({...newUpdate, senha: senhaHash || newUpdate.senha}, {where: { user : user }} )
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