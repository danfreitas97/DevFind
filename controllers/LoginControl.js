const bcrypt = require('bcrypt')
const database = require('../models')
const jwt = require('jsonwebtoken')



class LoginControl {

    static login(req, res, next){
        const {email, senha} = req.body
        database.users.findOne({where:{email: email}})
                .then( user => {
                 LoginControl.checkSenha(senha, user.senha).then((senhaValidada) => {
                    if(senhaValidada){
                        const token = jwt.sign({sub:user.username}, 'notasecret', {expiresIn: 3600});
                        const body = {
                            user: user,
                            token: token
                        }
                        res.status(200).send(body);
                    }
                    else{
                        res.status(401).json({msg: 'Senha inválida.'});
                    }
                 });
                })
                .catch(erro => next(erro));
    }

   



    static checkEmail(email){
        if(!email){
        throw new Error('Email não consta na base de dados');
        }
    }
    
    static async checkSenha(senha, senhaHash){
        return await bcrypt.compare(senha, senhaHash)
    }

}


module.exports = LoginControl