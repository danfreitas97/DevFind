const passport = require('passport')
const {Strategy: JwtStrategy, ExtractJwt} = require('passport-jwt')
const bcrypt = require('bcrypt')
const database = require('../models')




module.exports = function (){

    passport.use(new JwtStrategy (
        {
            usernameField: 'email',
            passwordField: 'senha',
            secretOrKey: 'notasecret',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        },

        (jwt_payload ,done) => {
            try 
            {
                database.users.findOne( {where: { user : jwt_payload.sub }})
                    .then(user => {
                        done(null, user)
            
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