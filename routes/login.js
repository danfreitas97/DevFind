const { Router } = require('express');
const LoginControl = require('../controllers/LoginControl.js');
const passport = require('passport');
const loginControl = new LoginControl();

const router = Router();

router.post('/login', passport.authenticate ('local'), (req,res)=>{
    res.status(200)
    .send({message: 'logged in'});
})

module.exports = router