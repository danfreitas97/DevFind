const jwt = require('jsonwebtoken');
const secret = require('./config/auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).send({error : 'Token not provided'})

    
    const parts = authHeader.split(' ')

    if (!parts.length === 2)
        return res.status(401).send({error : 'Error on Token provided'})

    const {scheme, token} = parts

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).send({error : 'Malformed Token'})

    jwt.verify(token, secret, (err, decoded)=>{
        if (err) return res.status(401).send({error : 'Invalid Token'})

        req.user = decoded.user

        return next();
    })
    
}