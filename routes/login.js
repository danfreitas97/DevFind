const { Router } = require('express');
const LoginControl = require('../controllers/LoginControl')

const router = Router();

router.post('/login', LoginControl.login)

router.post('/esqueci-senha', LoginControl.esqueciSenha)

router.post('/resetar-senha', LoginControl.resetarSenha)

module.exports = router