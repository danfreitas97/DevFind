const jwt = require('jsonwebtoken');
const secret = require('./config/auth.json')

module.exports = (req, res, next) => {
    if (req.path.startsWith('/public')){
        return next();
    }
    const authHeader = req.get('Authorization');

    if (!authHeader)
        return res.status(401).send({error : 'Token not provided'})

    
    const parts = authHeader.split(' ')

    if (!parts.length === 2)
        return res.status(401).send({error : 'Error on Token provided'})

    const token = parts[1]


    jwt.verify(token, secret, (err, decoded)=>{
        if (err) return res.status(401).send({error : err})

        req.user = decoded.user

        return next();
    })
    
}