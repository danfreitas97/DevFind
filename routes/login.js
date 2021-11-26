const { Router } = require('express');
const LoginControl = require('../controllers/LoginControl')

const router = Router();

router.post('/public/login', LoginControl.login)

router.post('/public/esqueci-senha', LoginControl.esqueciSenha)

router.post('/public/resetar-senha', LoginControl.resetarSenha)

module.exports = router