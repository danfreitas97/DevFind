const bcrypt = require('bcrypt')
const database = require('../models')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const mailer = require('../mailer.js')



class LoginControl {

    static checkEmail(email){
        if(!email){
        throw new Error('Email não consta na base de dados');
        }
    }
        
        static async checkSenha(senha, senhaHash){
            return await bcrypt.compare(senha, senhaHash)
        }

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

   static async esqueciSenha(req, res){
       const {email} = req.body

       try {

            if(!email){
             throw new Error('Digite um email válido');
            }     
            
            const user = await database.users.findOne({where:{email: email}})

    
            const token = crypto.randomBytes(24).toString('hex');
            const now = new Date();
            now.setHours(now.getHours() + 1)

            user.redefinToken = token
            user.redefinExpires = now

            await user.save()

            mailer.sendMail({
                to: email,
                from: 'devfind@devfind.com',
                subject: 'Esqueceu sua senha? - Dev.Find',
                template: '../mail/esqueciSenha',
                context: { token }
            })

            console.log()

            return res.status(200).json({msg: 'Token enviado ao email cadastrado. Expira em 1 hora.'})

            
        } catch(error){
            res.status(400).send({error: 'Email não consta na Base de Dados'})
            }
   } 

   static async hashin (senha) {
    const cost = 12;
    return bcrypt.hash (senha, cost);
    }

   static async resetarSenha(req, res) {
        const {email, token, senha} = req.body

        try {
            const user = await database.users.findOne({where:{email: email, redefinToken: token}})

            if(!email || !token ){
                throw new Error('Email ou Token inválidos');
               }

            let senhaHash = await LoginControl.hashin(senha)
               
               
            user.senha = senhaHash

            await user.save()

            return res.status(200).json({msg: 'Senha alterada com sucesso.'})

        } catch (error) {
            res.status(400).send({error: 'Erro na recuperação da conta'})
        }
   }


}


module.exports = LoginControl