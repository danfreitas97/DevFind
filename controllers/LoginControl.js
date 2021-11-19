const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const database = require('../models')
const jwt = require('jsonwebtoken')



class LoginControl {

    constructor(){
        passport.use(new LocalStrategy (
            {
            usernameField: 'email',
            passwordField: 'senha',
            session: false
            },
        
            (email,senha,done) => {
                try 
                {
                    database.users.findOne( {where: { email : email }})
                        .then(user => {
                            this.checkEmail(email)
                            this.checkSenha(senha, user.senha)
                                .then(()=> done(null, user))
                                .catch((error)=> done(error, false))
                        }).catch((error)=> done(error))

                }
                catch (error) {
                    done(error);
                }
        
            }
        ));
        
        passport.serializeUser(function(user, done) {
            done(null, user.user);
          });
          
          passport.deserializeUser(function(user, done) {
            database.users.findOne( {where: { user : user }}).then( user => {
                done (null, user);
            }).catch(err => done(err));
          });
    }

    checkEmail(email){
        if(!email){
        throw new Error('Email não consta na base de dados');
        }
    }

    async checkSenha(senha, senhaHash){
        const senhaOk = await bcrypt.compare(senha, senhaHash)
        if(!senhaOk){
            throw new Error('Senha Incorreta');
        }
    }




}


module.exports = LoginControl